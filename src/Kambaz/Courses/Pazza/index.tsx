import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import PostViewer from './PostViewer';
import './Pazza.css';
import { useSelector } from 'react-redux';

export default function Pazza() {

  return (
    <div id="pazza-app">
      <Navbar />
      <div className="pazza-main-content">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="content-container">
          <Routes>
            <Route path="Posts/:postId" element={<PostViewer />} />
            <Route path="Glance" element={<PostsList />} />
            <Route path="/" element={<Navigate to={`Glance`} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

// Simple PostsList component to show posts in the main content area when not viewing a specific post
function PostsList() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="posts-list">
      <h2>Welcome back {currentUser.firstName}</h2>
      <h3>Recent Posts</h3>
      <p>Select a post from the sidebar to view its details</p>
    </div>
  );
}