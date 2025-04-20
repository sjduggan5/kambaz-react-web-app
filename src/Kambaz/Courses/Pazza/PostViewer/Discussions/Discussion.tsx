import { useDispatch, useSelector } from 'react-redux';
import '../../Pazza.css';
import PostEditor from '../PostEditor';
import Form from 'react-bootstrap/esm/Form';
import * as client from '../../client';
import { updateComment } from '../../commentsReducer';
import DOMPurify from 'dompurify';
import ActionsMenu from '../ActionsMenu';
import { useEffect, useState } from 'react';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  // Format 12-hour time with minutes
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 || 12;
  const time = `${hour12}:${minutes} ${ampm}`;

  // Format MM/DD/YY
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const yy = String(date.getFullYear()).slice(-2);
  const formattedDate = `${mm}/${dd}/${yy}`;

  return `${time} · ${formattedDate}`; // e.g., "6:25 PM · 04/23/25"
};

export default function Discussion({ discussion }: { discussion: any }) {
  const { comments } = useSelector((state: any) => state.commentsReducer);
  const { isEditing } = useSelector((state: any) => state.postsReducer);
  const [editArea, setEditArea] = useState();
  const [editId, setEditId] = useState();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const replies = comments.filter(
    (c: any) => c.parentComment === discussion._id
  );
  const dispatch = useDispatch();
  const canSeeDropdown =
    currentUser?.role === 'FACULTY' || discussion?.author === currentUser._id;

  useEffect(() => {
    if (isEditing) {
      const details = isEditing.split(':');
      setEditArea(details[0]);
      setEditId(details[1]);
    } else {
      setEditArea(undefined);
      setEditId(undefined);
    }
  }, [isEditing]);

  const handleChange = async () => {
    await client.updateComment({
      ...discussion,
      isResolved: !discussion.isResolved,
    });
    dispatch(
      updateComment({ ...discussion, isResolved: !discussion.isResolved })
    );
  };

  return (
    <div className="post-bottom ps-2 pb-2">
      <Form>
        <Form.Check
          type="switch"
          label={discussion.isResolved ? 'Resolved' : 'Unresolved'}
          checked={discussion.isResolved}
          onChange={handleChange}
        />
      </Form>
      <div className="d-flex flex-row align-items-center">
        <div className="fs-6 fw-bold me-2">{discussion.authorName}</div>
        <div className="fs-6">{formatDate(discussion.createDate)}</div>
      </div>
      <div className="fs-6">
        {editArea === 'DISCUSSION-EDIT' && editId === discussion._id ? (
          <PostEditor editLocation={`DISCUSSION-EDIT:${discussion._id}`} />
        ) : (
          <div className="d-flex flex-row justify-content-between">
            <div
              className="m-2"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(discussion?.content),
              }}
            />
            {canSeeDropdown && (
              <ActionsMenu
                location={`DISCUSSION-EDIT:${discussion._id}`}
                type="COMMENT"
                entityId={discussion?._id}
              />
            )}
          </div>
        )}
      </div>
      {replies?.map((reply: any) => (
        <div className="discussion-reply ms-3 mt-2">
          <div className="d-flex flex-row align-items-center">
            <div className="fs-6 fw-bold me-2">{reply.authorName}</div>
            <div className="fs-6">{formatDate(reply.createDate)}</div>
          </div>
          <div className="fs-6">
            {editArea === 'DISCUSSION-EDIT' && editId === reply._id ? (
              <PostEditor editLocation={`DISCUSSION-EDIT:${reply._id}`} />
            ) : (
              <div className="d-flex flex-row justify-content-between">
                <div
                  className="m-2"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(reply?.content),
                  }}
                />
                {canSeeDropdown && (
                  <ActionsMenu
                    location={`DISCUSSION-EDIT:${reply._id}`}
                    type="COMMENT"
                    entityId={reply?._id}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="ps-2 pe-2 pt-2">
        <PostEditor editLocation={`DISCUSSION-NEW:${discussion._id}`} />
      </div>
    </div>
  );
}
