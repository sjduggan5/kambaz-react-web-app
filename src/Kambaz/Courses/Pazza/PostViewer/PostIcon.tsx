import { BsFillQuestionSquareFill } from 'react-icons/bs';
import { PiNoteFill } from 'react-icons/pi';

export default function PostIcon({
  postType,
  postStatus,
}: {
  postType: string;
  postStatus: string;
}) {
  return postType === 'QUESTION' ? (
    <BsFillQuestionSquareFill
      size={24}
      color={postStatus === 'UNANSWERED' ? 'darkred' : 'dimgray'}
    ></BsFillQuestionSquareFill>
  ) : (
    <PiNoteFill size={30}></PiNoteFill>
  );
}
