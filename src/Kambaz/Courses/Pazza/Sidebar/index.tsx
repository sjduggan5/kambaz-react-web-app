import { useNavigate, useParams } from 'react-router-dom';
import '../Pazza.css';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';

export default function Sidebar() {
  const { cid } = useParams();
  const { posts } = useSelector((state: any) => state.postsReducer);
  const navigate = useNavigate();

  return (
    <div className="pazza-sidebar">
      <button
        className="btn btn-sm btn-primary"
        onClick={() => navigate(`/Kambaz/Courses/${cid}/Pazza/Create`)}
      >
        Create Post
      </button>
      {posts.filter((post) => post.isPinned).length > 0 && (
        <div className="pinned-section">
          <div className="pinned-header">PINNED</div>
          {posts
            .filter((post) => post.isPinned)
            .map((post) => (
              <PostItem key={post._id} post={post} cid={cid} />
            ))}
        </div>
      )}
      <div className="pinned-section">
        <div className={'pinned-header'}>UNPINNED</div>
        {posts
          .filter((post) => !post.isPinned)
          .map((post) => (
            <PostItem key={post._id} post={post} cid={cid} />
          ))}
      </div>
    </div>
  );
}
