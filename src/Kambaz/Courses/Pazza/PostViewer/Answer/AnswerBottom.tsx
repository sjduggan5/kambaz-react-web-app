import { useSelector } from 'react-redux';
import '../../Pazza.css';

export default function AnswerBottom({
  comment,
  type,
}: {
  comment: any;
  type: string;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const canEdit =
    (currentUser.role === 'FACULTY' && type === 'INSTRUCTOR') ||
    (currentUser.role === 'STUDENT' && type === 'STUDENT');

  return (
    <div className="post-bottom d-flex flex-row align-items-center p-2 rounded-bottom">
      {canEdit && (
        <button className="btn btn-secondary float-end btn-sm">Edit</button>
      )}
      <div className="ms-auto posted-by">{`Posted by ${comment?.authorName}`}</div>
    </div>
  );
}
