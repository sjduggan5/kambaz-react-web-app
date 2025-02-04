import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Signup</h3>
      <input className="form-control" placeholder="username" id="wd-username" />
      <input
        className="form-control mt-2"
        placeholder="password"
        id="wd-password"
      />
      <Link to="/Kambaz/Dashboard" id="wd-signup-link">
        <Button
          className="mt-2"
          style={{ width: '100%' }}
          variant="primary"
          size="sm"
          id="wd-signup-btn"
        >
          Signup
        </Button>
      </Link>
      <br />
      <Link to="/Kambaz/Account/Signin" id="wd-signin-link">
        Signin
      </Link>
    </div>
  );
}
