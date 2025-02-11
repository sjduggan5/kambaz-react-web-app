import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Signin</h3>
      <input className="form-control" placeholder="username" id="wd-username" />
      <input
        className="form-control mt-2"
        placeholder="password"
        id="wd-password"
      />
      <Link to="/Kambaz/Dashboard" id="wd-signin-link">
        <Button
          className="mt-2"
          style={{ width: '100%' }}
          variant="primary"
          size="sm"
          id="wd-signin-btn"
        >
          Signin
        </Button>
      </Link>
      <br />
      <Link to="/Kambaz/Account/Signup" id="wd-signup-link">
        Signup
      </Link>
    </div>
  );
}
