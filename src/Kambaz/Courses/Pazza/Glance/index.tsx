import { useSelector } from 'react-redux';
import { IoIosCheckboxOutline } from "react-icons/io";
import { CiNoWaitingSign } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import * as client from '../../client.ts';
import { useEffect, useState } from 'react';

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
    post => post.postType === 'QUESTION' && post.status === 'UNANSWERED'
  ).length;
};

const getInstructorResponses = (comments: Comment[]): number => {
  return comments.filter(comment => comment.authorType === 'INSTRUCTOR').length;
};

const getStudentResponses = (comments: Comment[]): number => {
  return comments.filter(comment => comment.authorType === 'INSTRUCTOR').length;
};


export default function Glance() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { posts } = useSelector((state: any) => state.postsReducer);
  const { comments } = useSelector((state: any) => state.commentsReducer);
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
    <div className="posts-list">
      <h2>Welcome back {currentUser.firstName}</h2>
      <h3>Recent Posts</h3>
      <p>Select a post from the sidebar to view its details</p>
      <h1>About the Posts</h1>
      <div>
        {unansweredCount > 0
          ? <><CiNoWaitingSign className="me-1" />Unanswered questions: {unansweredCount} </>
          : <><IoIosCheckboxOutline className="me-1" /> No unanswered questions</>}
      </div>
      <div><CiNoWaitingSign className="me-1" /> UNREAD POSTS WILL GO HERE WHEN DONE</div>
      <hr />
      <h1>Stats</h1>
      <div> Total number of posts: {posts.length} </div>
      <div>Instructor responses: {instructorResponseCount}</div>
      <div>Student responses: {setudentResponseCount}</div>
      <div>Students enrolled: {users.length}</div>
    </div>
  );
}

//Number of unread posts or no unread posts
// Number of unanswered posts or no unanswered posts DONE
// Total number of posts DONE
// Number of instructor responses DONE
// Number of student responses DONE
// Number of students enrolled