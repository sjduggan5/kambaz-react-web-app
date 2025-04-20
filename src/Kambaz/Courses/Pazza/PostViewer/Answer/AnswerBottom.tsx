import { useDispatch, useSelector } from 'react-redux';
import '../../Pazza.css';
import { setIsEditing } from '../../postsReducer';
import {deleteComment} from "../../commentsReducer.ts"
import * as client from '../../client.ts';

export default function AnswerBottom({
  comment,
  type,
}: {
  comment: any;
  type: string;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsEditing(type));
  };

  const handleDelete = async () => {
    console.log(comment)
    if (window.confirm('Are you sure you want to delete this comment?')) {
      await client.deleteComment(comment._id);
      dispatch(deleteComment(comment._id));
    }
  };

  const canEdit =
    (currentUser.role === 'FACULTY' && type === 'INSTRUCTOR') ||
    (currentUser.role === 'STUDENT' && type === 'STUDENT');

  return (
    <div className="post-bottom d-flex flex-row align-items-center p-2 rounded-bottom">
      {canEdit && (
        <div>
          <button
            className="btn btn-secondary float-end btn-sm"
            onClick={handleClick}
          >
            Edit
          </button>
          <button
            className="btn btn-danger float-end btn-sm me-2"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
      <div className="ms-auto posted-by">{`Posted by ${comment?.authorName}`}</div>
    </div>
  );
}
