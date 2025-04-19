import { Container, Nav } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router';
import '../Pazza.css';
import BootstrapNavbar from 'react-bootstrap/Navbar';

export default function ManageClassNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  return (
    <BootstrapNavbar className="manage-class-nav" expand="lg">
      <Container>
        <Nav className="mx-auto">
          <Nav.Link
            className={`manage-class-nav-item ${pathname.includes('ManageClass') ? 'active' : ''}`}
            href={`#/Kambaz/Courses/${cid}/Pazza/ManageClass`}
          >
            <div>
              Manage
              <br />
              Folders
            </div>
          </Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
}
