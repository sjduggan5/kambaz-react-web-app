/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Nav } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router';
import './Pazza.css';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { LuSquareUserRound } from 'react-icons/lu';

export default function NavbarComponent() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

  return (
    <BootstrapNavbar className="blue-background">
      <Container>
        <BootstrapNavbar.Brand
          className="navbar-item"
          href={`#/Kambaz/Courses/${cid}/Pazza`}
        >
          pazza
        </BootstrapNavbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link className="navbar-item" href="">
            {cid}
          </Nav.Link>
          <Nav.Link
            className={`navbar-item ${pathname.includes('Glance') ? 'active' : ''}`}
            href={`#/Kambaz/Courses/${cid}/Pazza`}
          >
            Q & A
          </Nav.Link>
          {currentUser.role === 'FACULTY' && (
            <Nav.Link
              className="navbar-item"
              href={`#/Kambaz/Courses/${cid}/Pazza/ManageClass`}
            >
              Manage Class
            </Nav.Link>
          )}
        </Nav>
        <Nav>
          <Nav.Link className="navbar-item" href="">
            <LuSquareUserRound size={25} />{' '}
            {`${currentUser.firstName} ${currentUser.lastName}`}
          </Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
}
