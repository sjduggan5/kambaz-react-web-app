import { useNavigate, useParams } from 'react-router-dom';
import '../Pazza.css';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const { cid } = useParams();
  const { posts, folderFilter } = useSelector(
    (state: any) => state.postsReducer
  );
  const [postsToShow, setPostsToShow] = useState(posts);
  const navigate = useNavigate();

  useEffect(() => {
    if (folderFilter) {
      console.log(folderFilter);
      setPostsToShow(
        posts.filter((post) => post.folders.includes(folderFilter))
      );
    } else {
      setPostsToShow(posts);
    }
  }, [folderFilter]);

  return (
    <div className="pazza-sidebar">
      <button
        className="btn btn-sm btn-primary"
        onClick={() => navigate(`/Kambaz/Courses/${cid}/Pazza/Create`)}
      >
        Create Post
      </button>
      {postsToShow.filter((post) => post.isPinned).length > 0 && (
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
        {postsToShow
          .filter((post) => !post.isPinned)
          .map((post) => (
            <PostItem key={post._id} post={post} cid={cid} />
          ))}
      </div>
    </div>
  );
}
