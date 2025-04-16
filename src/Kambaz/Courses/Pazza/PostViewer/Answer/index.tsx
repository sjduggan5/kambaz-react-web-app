import { useSelector } from 'react-redux';
import PostEditor from '../PostEditor';
import AnswerBottom from './AnswerBottom';
import AnswerHeader from './AnswerHeader';

import DOMPurify from 'dompurify';

export default function Answer({ comment, type }: { comment: any; type: any }) {
  const { isEditing } = useSelector((state: any) => state.postsReducer);
  return (
    <div className="bg-white rounded-2 mt-2">
      <AnswerHeader type={type} />
      <hr className="mt-1 mb-0" />
      {comment && isEditing !== type ? (
          <div className='m-2' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(comment?.content)}}/>
      ) : (
        <div className="ps-2 pe-2 pt-2">
          <PostEditor editLocation={type} />
        </div>
      )}
      {comment && <hr className="mt-1 mb-0" />}
      {comment && <AnswerBottom comment={comment} type={type} />}
    </div>
  );
}
