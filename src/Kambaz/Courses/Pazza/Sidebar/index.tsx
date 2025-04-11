import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';

export default function Sidebar() {
  const { cid } = useParams();
  const { posts } = useSelector((state: any) => state.postsReducer);
  return (
    <div id="wd-pazza-sidebar" className="wd list-group fs-5 rounded-0">
      {posts.map((post) => (
        // TODO: replace with MiniPost component for each post in sidebar
        <Link to={`/Kambaz/Courses/${cid}/Pazza/Posts/${post._id}`}>
          {post.title}
          <hr />
          {post.content}
          <hr />
        </Link>
      ))}
    </div>
  );
}
