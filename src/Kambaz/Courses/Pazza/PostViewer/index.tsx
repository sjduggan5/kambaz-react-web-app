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
import { setIsEditing, updatePost } from '../postsReducer';
import * as userClient from '../../../Account/client';
import { setCurrentUser } from '../../../Account/reducer';

export default function PostViewer() {
  const { postId } = useParams();
  const { posts } = useSelector((state: any) => state.postsReducer);
  const { comments } = useSelector((state: any) => state.commentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [post, setPost] = useState(posts.find((p) => p._id === postId));
  const dispatch = useDispatch();

  useEffect(() => {
    const currentPost = posts.find((p) => p._id === postId);
    setPost(currentPost);
  }, [postId, posts]);

  const fetchComments = async () => {
    const comments = await client.fetchCommentsForPost(postId as string);
    dispatch(setComments(comments));
  };

  const viewPost = async () => {
    if (post && !currentUser.postsViewed.includes(postId)) {
      const updatedPost = { ...post, views: post.views + 1 };
      const updatedUser = {
        ...currentUser,
        postsViewed: [...currentUser.postsViewed, postId],
      };
      await client.updatePost(updatedPost);
      await userClient.updateUser(updatedUser);
      dispatch(updatePost(updatedPost));
      dispatch(setCurrentUser(updatedUser));
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  useEffect(() => {
    dispatch(setIsEditing(null));
  }, [postId]);

  useEffect(() => {
    viewPost();
  }, [currentUser, post, postId]);

  const instructorAnswer = comments?.find(
    (c) => c.authorType === 'INSTRUCTOR' && c.commentType === 'ANSWER'
  );
  const studentAnswer = comments?.find(
    (c) => c.authorType === 'STUDENT' && c.commentType === 'ANSWER'
  );

  return (
    <div className="bg-secondary p-2 h-100">
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
        {(currentUser.role === 'STUDENT' || studentAnswer) && (
          <Answer comment={studentAnswer} type="STUDENT" />
        )}
        {(currentUser.role === 'FACULTY' || instructorAnswer) && (
          <Answer comment={instructorAnswer} type="INSTRUCTOR" />
        )}
        <Discussions />
      </>
    </div>
  );
}
