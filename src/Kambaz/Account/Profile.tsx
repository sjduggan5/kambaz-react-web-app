import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        className="form-control mb-2"
        defaultValue="alice"
        placeholder="username"
        id="wd-username"
      />
      <input
        className="form-control mb-2"
        defaultValue="123"
        placeholder="password"
        type="password"
        id="wd-password"
      />
      <input
        className="form-control mb-2"
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
      />
      <input
        className="form-control mb-2"
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
      />
      <input
        className="form-control mb-2"
        defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
      />
      <input
        className="form-control mb-2"
        defaultValue="alice@wonderland"
        type="email"
        id="wd-email"
      />
      <select className="form-select mb-2" defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option> <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>{' '}
        <option value="STUDENT">Student</option>
      </select>
      <Link to="/Kambaz/Account/Signin">
        <Button variant="danger" style={{ width: '100%' }}>
          Signout
        </Button>
      </Link>
    </div>
  );
}
