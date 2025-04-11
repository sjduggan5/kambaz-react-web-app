export default function PostViewer() {
  const post = {
    title: 'example title',
    body: 'this is the body of the post',
    id: 1,
  };
  return (
    <div>
      {post.title}
      <hr />
      {post.body}
    </div>
  );
}
