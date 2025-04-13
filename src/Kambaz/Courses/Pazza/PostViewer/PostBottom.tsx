import { useSelector } from 'react-redux';
import '../Pazza.css';

export default function PostBottom({ post }: { post: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const canEdit =
    currentUser.role === 'FACULTY' || post?.author === currentUser._id;
  return (
    <div className="post-bottom d-flex flex-row align-items-center p-2 rounded-bottom">
      {canEdit && (
        <button className="btn btn-secondary float-end btn-sm">Edit</button>
      )}
      <div className="ms-auto posted-by">{`Posted by ${post.authorName}`}</div>
    </div>
  );
}
