import { Routes, Route, Navigate, useParams } from 'react-router';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import PostViewer from './PostViewer';
import { useEffect } from 'react';
import * as client from './client';
import { setPosts } from './postsReducer';
import { setFolders } from './foldersReducer';
import { useDispatch } from 'react-redux';
export default function Pazza() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const fetchPostsAndFolders = async () => {
    const coursePosts = await client.fetchAllPostsForCourse(cid || '');
    const courseFolders = await client.fetchFoldersForcourse(cid || '');
    dispatch(setPosts(coursePosts));
    dispatch(setFolders(courseFolders));
  };
  useEffect(() => {
    fetchPostsAndFolders();
  }, [cid]);
  return (
    <div id="wd-courses">
      <Navbar />
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <Sidebar />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Posts/:postId" element={<PostViewer />} />
            <Route path="Glance" element={<></>} />
            <Route path="/" element={<Navigate to={`Glance`} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
