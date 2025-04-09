import { Link, useLocation, useParams } from 'react-router-dom';
export default function CourseNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [
    'Home',
    'Modules',
    'Pazza',
    'Zoom',
    'Assignments',
    'Quizzes',
    'Grades',
    'People',
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          to={`/Kambaz/Courses/${cid}/${link}`}
          className={`list-group-item border border-0 ${pathname.includes(link) ? 'active' : 'text-danger'}`}
          id={`wd-course-${link.toLocaleLowerCase()}-link`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
