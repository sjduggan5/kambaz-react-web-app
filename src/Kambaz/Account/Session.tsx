import * as client from './client';
import { useEffect, useState } from 'react';
import { setCurrentUser, setEnrollments } from './reducer';
import { useDispatch } from 'react-redux';
export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      console.log('HERE');
      const currentUser = await client.profile();
      const enrollments = await client.fetchEnrollments();
      dispatch(setEnrollments(enrollments));
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
    }
    setPending(false);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  if (!pending) {
    return children;
  }
}
