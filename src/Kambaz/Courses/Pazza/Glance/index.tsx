import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as client from '../../client.ts';
import { useEffect, useState } from 'react';
import { FaCheckSquare, FaUnlockAlt } from 'react-icons/fa';
import '../Pazza.css';
import { BsFillExclamationSquareFill } from 'react-icons/bs';

interface Comment {
  authorType: 'INSTRUCTOR' | 'STUDENT';
  commentType: 'COMMENT' | 'ANSWER';
}

interface Post {
  _id: string;
  status: 'ANSWERED' | 'UNANSWERED';
  postType: 'QUESTION' | 'NOTE';
}

const getUnansweredQuestions = (posts: Post[]): number => {
  return posts.filter(
    (post: Post) => post.postType === 'QUESTION' && post.status === 'UNANSWERED'
  ).length;
};

const getInstructorResponses = (comments: Comment[]): number => {
  return comments.filter(
    (comment: Comment) => comment.authorType === 'INSTRUCTOR'
  ).length;
};

const getStudentResponses = (comments: Comment[]): number => {
  return comments.filter(
    (comment: Comment) => comment.authorType === 'INSTRUCTOR'
  ).length;
};

export default function Glance() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { posts } = useSelector((state: any) => state.postsReducer);
  const { comments } = useSelector((state: any) => state.commentsReducer);
  const unreadPosts = posts.length - currentUser.postsViewed.length;
  const unansweredCount = getUnansweredQuestions(posts);
  const instructorResponseCount = getInstructorResponses(comments);
  const setudentResponseCount = getStudentResponses(comments);
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const courseUsers = await client.findUsersForCourse(cid || '');
    setUsers(courseUsers);
  };
  useEffect(() => {
    fetchUsers();
  }, [cid]);
  return (
    <div className="bg-secondary p-2 h-100">
      <div className="d-flex flex-row align-items-center">
        <FaUnlockAlt color="dimgray" />
        <div className="glance-text fs-2 ms-3">Class at a Glance</div>
      </div>
      <div className="bg-light rounded ps-2 d-flex flex-row pb-5 pt-2">
        <div className="w-50">
          <div>
            {unansweredCount > 0 ? (
              <div className="mt-2 d-flex flex-row align-items-center">
                <BsFillExclamationSquareFill
                  size="30"
                  color="darkred"
                  className="me-1"
                />
                <div className="fs-4 fw-bold">
                  {unansweredCount} unanswered questions
                </div>
              </div>
            ) : (
              <div className="mt-2 d-flex flex-row align-items-center">
                <FaCheckSquare size="30" color="green" className="me-1" />
                <div className="fs-4 fw-bold">no unanswered questions</div>
              </div>
            )}
          </div>
          <div>
            {unreadPosts > 0 ? (
              <div className="mt-2 d-flex flex-row align-items-center">
                <BsFillExclamationSquareFill
                  size="30"
                  color="darkred"
                  className="me-1"
                />
                <div className="fs-4 fw-bold">{unreadPosts} unread posts</div>
              </div>
            ) : (
              <div className="mt-2 d-flex flex-row align-items-center">
                <FaCheckSquare size="30" color="limegreen" className="me-1" />
                <div className="fs-4 fw-bold">no unread posts</div>
              </div>
            )}
          </div>
        </div>
        <hr />
        <table>
          <tbody>
            <tr>
              <td className="text-end fw-bold pe-2">{posts.length}</td>
              <td>Total number of posts</td>
            </tr>
            <tr>
              <td className="text-end fw-bold pe-2">
                {instructorResponseCount}
              </td>
              <td>Instructor responses</td>
            </tr>
            <tr>
              <td className="text-end fw-bold pe-2">{setudentResponseCount}</td>
              <td>Student responses</td>
            </tr>
            <tr>
              <td className="text-end fw-bold pe-2">{users.length}</td>
              <td>Students enrolled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
