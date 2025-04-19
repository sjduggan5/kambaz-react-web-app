import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
export default function PazzaProtectedRoute({ children }: { children: any }) {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role != 'STUDENT') {
    return children;
  }
  return <Navigate to={`/Kambaz/Courses/${cid}/Pazza`} />;
}
