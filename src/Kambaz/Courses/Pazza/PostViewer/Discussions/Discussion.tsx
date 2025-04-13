import { useSelector } from 'react-redux';
import '../../Pazza.css';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  // Format 12-hour time with minutes
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 || 12;
  const time = `${hour12}:${minutes} ${ampm}`;

  // Format MM/DD/YY
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const yy = String(date.getFullYear()).slice(-2);
  const formattedDate = `${mm}/${dd}/${yy}`;

  return `${time} · ${formattedDate}`; // e.g., "6:25 PM · 04/23/25"
};

export default function Discussion({ discussion }: { discussion: any }) {
  const { comments } = useSelector((state: any) => state.commentsReducer);
  const replies = comments.filter((c) => c.parentComment === discussion._id);
  return (
    <div className="post-bottom ps-2 pb-2">
      <div>{discussion.isResolved ? 'Resolved' : 'Unresolved'}</div>
      <div className="d-flex flex-row align-items-center">
        <div className="fs-6 fw-bold me-2">{discussion.authorName}</div>
        <div className="fs-6">{formatDate(discussion.createDate)}</div>
      </div>
      <div className="fs-6">{discussion.content}</div>
      {replies?.map((reply) => (
        <div className="discussion-reply ms-3 mt-2">
          <div className="d-flex flex-row align-items-center">
            <div className="fs-6 fw-bold me-2">{reply.authorName}</div>
            <div className="fs-6">{formatDate(reply.createDate)}</div>
          </div>
          <div className="fs-6">{reply.content}</div>
        </div>
      ))}
      <div className='ms-3'>
        TODO: Add WYSIWYG here (Reply to this followup discussion)
      </div>
    </div>
  );
}
