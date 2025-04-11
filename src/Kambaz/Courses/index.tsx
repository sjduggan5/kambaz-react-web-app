import { Routes, Route, useParams, useLocation } from 'react-router';
import CourseNavigation from './Navigation';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/Editor';
import { FaAlignJustify } from 'react-icons/fa';
import PeopleTable from './People/Table';
import * as client from './client';
import { useEffect, useState } from 'react';
import Pazza from './Pazza';

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === cid);
  const [users, setUsers] = useState();
  const fetchUsers = async () => {
    const courseUsers = await client.findUsersForCourse(cid || '');
    setUsers(courseUsers);
  };
  useEffect(() => {
    fetchUsers();
  }, [cid]);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split('/')[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable users={users} />} />
            <Route path="Pazza*" element={<Pazza />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
