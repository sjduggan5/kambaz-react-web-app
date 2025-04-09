import { Container, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export default function Navbar() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href={`#/Kambaz/Courses/${cid}/Pazza`}>Pazza</Nav.Link>
      </Nav.Item>
      <Nav.Item>{currentUser.firstName}</Nav.Item>
    </Nav>
  );
}
