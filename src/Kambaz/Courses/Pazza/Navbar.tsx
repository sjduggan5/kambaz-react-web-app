/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Nav } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router';
import './Pazza.css';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { LuSquareUserRound } from 'react-icons/lu';
import { setFolderFilter, setPostsBar } from './postsReducer';
import { FaFolder } from 'react-icons/fa6';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';

export default function NavbarComponent() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { folders } = useSelector((state: any) => state.foldersReducer);
  const { folderFilter, postsBarOpen } = useSelector(
    (state: any) => state.postsReducer
  );
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-column align-items-stretch">
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
            <Nav.Link
              className="navbar-item d-flex flex-row align-items-center"
              href=""
            >
              <LuSquareUserRound size={25} className="me-1" />
              {`${currentUser.firstName} ${currentUser.lastName}`}
            </Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
      <Container className="post-bottom m-0 mw-100 pt-2 pb-2">
        {postsBarOpen ? (
          <GoTriangleLeft
            className="me-3"
            title="Hide Posts"
            color="darkgray"
            onClick={() => dispatch(setPostsBar(false))}
          />
        ) : (
          <GoTriangleRight
            className="me-3"
            title="Show Posts"
            color="darkgray"
            onClick={() => dispatch(setPostsBar(true))}
          />
        )}
        <FaFolder color="#3973a1" />
        {folders.map((folder: any) => (
          <button
            className={`btn btn-sm ${folderFilter === folder._id ? 'btn-primary' : 'btn-secondary'} ms-3`}
            onClick={() => {
              dispatch(
                setFolderFilter(
                  folderFilter === folder._id ? undefined : folder._id
                )
              );
              dispatch(setPostsBar(true));
            }}
          >
            {folder.name}
          </button>
        ))}
      </Container>
    </div>
  );
}
