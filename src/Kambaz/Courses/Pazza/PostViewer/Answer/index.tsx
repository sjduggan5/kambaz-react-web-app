import { useSelector } from 'react-redux';
import PostEditor from '../PostEditor';
import AnswerBottom from './AnswerBottom';
import AnswerHeader from './AnswerHeader';

import DOMPurify from 'dompurify';
import ActionsMenu from '../ActionsMenu';

export default function Answer({ comment, type }: { comment: any; type: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { isEditing } = useSelector((state: any) => state.postsReducer);

  const canSeeDropdown =
    currentUser?.role === 'INSTRUCTOR' || comment?.author === currentUser._id;

  return (
    <div className="bg-white rounded-2 mt-2">
      <AnswerHeader type={type} />
      <hr className="mt-1 mb-0" />
      {comment && isEditing !== type ? (
        <div className="d-flex flex-row justify-content-between">
          <div
            className="m-2"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(comment?.content),
            }}
          />
          {canSeeDropdown && (
            <ActionsMenu
              location={type}
              type="COMMENT"
              entityId={comment?._id}
            />
          )}
        </div>
      ) : (
        <div className="ps-2 pe-2 pt-2">
          <PostEditor editLocation={type} />
        </div>
      )}
      {comment && <hr className="mt-1 mb-0" />}
      {comment && <AnswerBottom comment={comment} type={type} />}
    </div>
  );
}
