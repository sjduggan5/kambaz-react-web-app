import { useSelector } from 'react-redux';
import Discussion from './Discussion';

export default function Discussions() {
  const { comments } = useSelector((state: any) => state.commentsReducer);
  const discussionComments = comments.filter(
    (c) => c.commentType === 'COMMENT'
  );
  const rootDiscussions = discussionComments.filter((c) => !c.parentComment);
  return (
    <div className="bg-white rounded-2 mt-2">
      <div className="pt-1 ps-1 pe-1 d-flex flex-row align-items-center">
        <div className="fs-6 fw-bold ms-2">followup discussions</div>
        <div className="fs-6 fst-italic ms-2">
          for lingering questions and comments
        </div>
      </div>
      <hr className="mt-1 mb-0" />
      {rootDiscussions.map((discussion) => (
        <Discussion discussion={discussion} />
      ))}
      <hr className="m-0" />
      <div className='ps-2'>
        <div className='fs-6'>
          Start a new followup discussion
        </div>
        <div className='fs-6'>
          TODO: Add WYSIWYG editor here (Compose a new followup discussion)
        </div>
      </div>
    </div>
  );
}
