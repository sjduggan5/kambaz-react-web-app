import { useDispatch, useSelector } from 'react-redux';
import '../Pazza.css';
import { setIsEditing, deletePost } from '../postsReducer';
import * as client from '../client';

export default function PostBottom({ post }: { post: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsEditing('POST'));
  };

  const canEdit =
    currentUser.role === 'FACULTY' || post?.author === currentUser._id;
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
        </div>
      )}
      <div className="ms-auto posted-by">{`Posted by ${post.authorName}`}</div>
    </div>
  );
}
