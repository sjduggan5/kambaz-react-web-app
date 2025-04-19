import { useNavigate, useParams } from 'react-router-dom';
import '../Pazza.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PostCategory from './PostCategory';
import groupPostsByDate from './groupDatesByWeek';
import { MdOutlinePostAdd } from 'react-icons/md';

export default function Sidebar() {
  const { cid } = useParams();
  const { posts, folderFilter } = useSelector(
    (state: any) => state.postsReducer
  );

  const [postsToShow, setPostsToShow] = useState(posts);
  const [groupedPosts, setGroupedPosts] = useState(
    groupPostsByDate(postsToShow.filter((post) => !post.isPinned))
  );
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (folderFilter && search) {
      setPostsToShow(
        posts.filter((post) => post.folders.includes(folderFilter) && post.title.toLowerCase().includes(search.toLowerCase()))
      );
    } else if (folderFilter) {
      setPostsToShow(
        posts.filter((post) => post.folders.includes(folderFilter))
      );
    } else if (search) {
      setPostsToShow(
        posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
      );
    } else {
      setPostsToShow(posts);
    }
  }, [folderFilter, posts, search]);

  useEffect(() => {
    setGroupedPosts(
      groupPostsByDate(postsToShow.filter((post) => !post.isPinned))
    );
  }, [postsToShow]);

  return (
    <div className="pazza-sidebar">
      <div className="d-flex flex-row bg-secondary">
        <button
          color="#3973a1"
          className="btn btn-sm m-1 w-50 create-button"
          onClick={() => navigate(`/Kambaz/Courses/${cid}/Pazza/Create`)}
        >
          <div className="d-flex flex-row align-items-center">
            <MdOutlinePostAdd className="me-1" />
            New Post
          </div>
        </button>
        <input
          type="text"
          className="form-control form-control-sm search-input m-1"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {postsToShow.filter((post) => post.isPinned).length > 0 && (
        <PostCategory
          posts={postsToShow.filter((post) => post.isPinned)}
          category="PINNED"
        />
      )}
      {Object.entries(groupedPosts)
        .filter(([_, postGroup]) => postGroup.length > 0)
        .map(
          ([category, postGroup]) =>
            postGroup && <PostCategory posts={postGroup} category={category} />
        )}
    </div>
  );
}
