import AnswerBottom from './AnswerBottom';
import AnswerHeader from './AnswerHeader';

export default function Answer({ comment, type }: { comment: any; type: any }) {
  return (
    <div className="bg-white rounded-2 mt-2">
      <AnswerHeader type={type} />
      <hr className="mt-1 mb-0" />
      {comment ? (
        <div className="fs-6 m-2">{comment.content}</div>
      ) : (
        <>add wysiwyg editor</>
      )}
      <hr className="mt-1 mb-0" />
      {comment && <AnswerBottom comment={comment} type={type} />}
    </div>
  );
}
