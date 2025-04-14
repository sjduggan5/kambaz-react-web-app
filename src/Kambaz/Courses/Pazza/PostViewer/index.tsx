import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import '../Pazza.css';
import { setComments } from '../commentsReducer';
import * as client from '../client';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostBottom from './PostBottom';
import Answer from './Answer';
import Discussions from './Discussions';

export default function PostViewer() {
  const { postId } = useParams();
  const { posts } = useSelector((state: any) => state.postsReducer);
  const { comments } = useSelector((state: any) => state.commentsReducer);
  const [post, setPost] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const currentPost = posts.find((p) => p._id === postId);
    setPost(currentPost);
  }, [postId, posts]);

  const fetchComments = async () => {
    const comments = await client.fetchCommentsForPost(postId as string);
    dispatch(setComments(comments));
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const instructorAnswer = comments?.find(
    (c) => c.authorType === 'INSTRUCTOR' && c.commentType === 'ANSWER'
  );
  const studentAnswer = comments?.find(
    (c) => c.authorType === 'STUDENT' && c.commentType === 'ANSWER'
  );

  return (
    <div className="bg-secondary p-2">
      <>
        {post && (
          <div className="bg-white rounded-2">
            <PostHeader post={post} />
            <hr className="mt-1 mb-0" />
            <PostBody post={post} />
            <hr className="mt-1 mb-0" />
            <PostBottom post={post} />
          </div>
        )}
        <Answer comment={studentAnswer} type="STUDENT" />
        <Answer comment={instructorAnswer} type="INSTRUCTOR" />
        <Discussions />
      </>
    </div>
  );
}
