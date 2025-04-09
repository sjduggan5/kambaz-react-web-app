import { Link, useParams } from 'react-router';

export default function Sidebar() {
  const { cid } = useParams();
  // TODO: create post redux store and set with values from database in useEffect
  const posts = [
    {
      title: 'example title',
      body: 'this is the body of the post',
      id: 1,
    },
    {
      title: 'example title 2',
      body: 'this is the body of the post 2',
      id: 2,
    },
  ];
  return (
    <div id="wd-pazza-sidebar" className="wd list-group fs-5 rounded-0">
      {posts.map((post) => (
        // TODO: replace with MiniPost component for each post in sidebar
        <Link to={`/Kambaz/Courses/${cid}/Pazza/Posts/${post.id}`}>
          {post.title}
          <hr />
          {post.body}
          <hr />
        </Link>
      ))}
    </div>
  );
}
