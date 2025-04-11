import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
export default function ProtectedRoute({
  courses,
  children,
}: {
  courses: any;
  children: any;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { cid } = useParams();
  if (currentUser) {
    if (cid && !courses.some((c: any) => c._id === cid && c.enrolled)) {
      return <Navigate to="/Kambaz/Dashboard" />;
    }
    return children;
  }
  return <Navigate to="/Kambaz/Account/Signin" />;
}
