import './Pazza.css';
import { Routes, Route, Navigate, useParams } from 'react-router';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import PostViewer from './PostViewer';
import { useEffect } from 'react';
import * as client from './client';
import { setFolderFilter, setPosts } from './postsReducer';
import { setFolders } from './foldersReducer';
import { useDispatch, useSelector } from 'react-redux';
import Glance from './Glance';
import PostCreator from './PostCreator';
import ManageClass from './ManageClass';
import PazzaProtectedRoute from './PazzaProtectedRoute';

export default function Pazza() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { postsBarOpen } = useSelector((state: any) => state.postsReducer);
  const dispatch = useDispatch();
  const fetchPostsAndFolders = async () => {
    const coursePosts = await client.fetchAllPostsForUserAndCourse(
      currentUser._id || '',
      cid || ''
    );
    const courseFolders = await client.fetchFoldersForCourse(cid || '');
    dispatch(setPosts(coursePosts));
    dispatch(setFolders(courseFolders));
    dispatch(setFolderFilter(undefined));
  };
  useEffect(() => {
    fetchPostsAndFolders();
  }, [cid, currentUser]);
  return (
    <div id="pazza-app">
      <div className="sticky-navbar">
        <Navbar />
      </div>
      <div className="pazza-main-content">
        {postsBarOpen && (
          <div className="sidebar-container">
            <Sidebar />
          </div>
        )}
        <div className="content-container">
          <Routes>
            <Route path="Posts/:postId" element={<PostViewer />} />
            <Route path="Create" element={<PostCreator />} />
            <Route path="Glance" element={<Glance />} />
            <Route path="/" element={<Navigate to={`Glance`} />} />
            <Route
              path="ManageClass"
              element={
                <PazzaProtectedRoute>
                  <ManageClass />
                </PazzaProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
