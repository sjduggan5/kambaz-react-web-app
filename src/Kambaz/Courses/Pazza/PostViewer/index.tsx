import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export default function PostViewer() {
  const { postId } = useParams();
  const { posts } = useSelector((state: any) => state.postsReducer);
  const [post, setPost] = useState();

  useEffect(() => {
    const currentPost = posts.find((p) => p._id === postId);
    setPost(currentPost);
  }, [postId, posts]);
  return (
    <div>
      {post && (
        <>
          {post.title}
          <br />
          {post.content}
        </>
      )}
    </div>
  );
}
