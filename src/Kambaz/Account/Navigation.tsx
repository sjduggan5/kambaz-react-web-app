import { Link } from 'react-router-dom';
export default function AccountNavigation() {
  return (
    <div className="me-5" id="wd-account-navigation">
      <Link
        to="/Kambaz/Account/Signin"
        id="wd-signin-link"
        className="list-group-item text-center border-start border-black border-3 ps-1 mb-2"
      >
        Signin
      </Link>

      <Link
        to="/Kambaz/Account/Signup"
        id="wd-signup-link"
        className="list-group-item text-center  ps-2 mb-2 text-danger"
      >
        Signup
      </Link>

      <Link
        to="/Kambaz/Account/Profile"
        id="wd-profile-link"
        className="list-group-item text-center  ps-2 mb-2 text-danger"
      >
        Profile
      </Link>
    </div>
  );
}
