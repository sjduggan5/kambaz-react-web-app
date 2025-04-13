import { Link } from 'react-router-dom';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}/${date.getDate()}/${String(date.getFullYear()).slice(-2)}`;
};

export default function PostItem({
  post,
  cid,
}: {
  post: any;
  cid: string | undefined;
}) {
  return (
    <Link
      to={`/Kambaz/Courses/${cid}/Pazza/Posts/${post._id}`}
      className="post-item"
    >
      <div className="post-meta">
        <span className={`post-type ${post.postType}`}>{post.postType}</span>
        <span className="post-title">{post.title}</span>
        <span className="post-date">{formatDate(post.createDate)}</span>
      </div>
      <div className="post-body">{post.content}</div>
    </Link>
  );
}
