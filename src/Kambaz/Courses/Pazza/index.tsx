import { Routes, Route, Navigate } from 'react-router';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import PostViewer from './PostViewer';
export default function Pazza() {
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
