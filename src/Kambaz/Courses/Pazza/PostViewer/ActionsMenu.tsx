import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, setIsEditing, updatePost } from '../postsReducer';
import * as client from '../client';
import { deleteComment } from '../commentsReducer';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';

export default function ActionsMenu({
  location,
  type,
  entityId,
}: {
  location: string;
  type: string;
  entityId: string;
}) {
  const { cid, postId } = useParams();
  const { comments } = useSelector((state: any) => state.commentsReducer);
  const { posts } = useSelector((state: any) => state.postsReducer);
  const [post, setPost] = useState(posts.find((p: any) => p._id === postId));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = () => {
    dispatch(setIsEditing(location));
  };

  useEffect(() => {
    setPost(posts.find((p: any) => p._id === postId));
  }, [postId])

  const handleDelete = async () => {
    if (type === 'COMMENT') {
      await client.deleteComment(entityId);
      dispatch(deleteComment(entityId));

      if (
        !comments
          .filter((c: any) => c._id !== entityId)
          .some((c: any) => c.commentType === 'ANSWER')
      ) {
        const updatedPost = { ...post, status: 'UNANSWERED' };
        await client.updatePost(updatedPost);
        dispatch(updatePost(updatedPost));
      }
    } else {
      await client.deletePost(entityId);
      dispatch(deletePost(entityId));
      navigate(`/Kambaz/Courses/${cid}/Pazza/Glance`);
    }
  };

  return (
    <Dropdown className="me-1 mt-1">
      <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-basic">
        Actions
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleEdit}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
