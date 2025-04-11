import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router';
import "./Pazza.css"

export default function Navbar() {
  const { cid } = useParams();
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href={`#/Kambaz/Courses/${cid}/Pazza`}>Pazza</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
