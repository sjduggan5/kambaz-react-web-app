import { Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deletePost, setIsEditing } from '../postsReducer';
import * as client from '../client';
import { deleteComment } from '../commentsReducer';
import { useNavigate, useParams } from 'react-router';

export default function ActionsMenu({
  location,
  type,
  entityId,
}: {
  location: string;
  type: string;
  entityId: string;
}) {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = () => {
    dispatch(setIsEditing(location));
  };

  const handleDelete = async () => {
    if (type === 'COMMENT') {
      await client.deleteComment(entityId);
      dispatch(deleteComment(entityId));
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
