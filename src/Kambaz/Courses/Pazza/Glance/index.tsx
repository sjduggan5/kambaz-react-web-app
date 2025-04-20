import { useSelector } from 'react-redux';

// Simple PostsList component to show posts in the main content area when not viewing a specific post
export default function Glance() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="posts-list">
      <h2>Welcome back {currentUser.firstName}</h2>
      <h3>Recent Posts</h3>
      <p>Select a post from the sidebar to view its details</p>
    </div>
  );
}
