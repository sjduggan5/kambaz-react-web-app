import { TbSquareLetterSFilled } from 'react-icons/tb';
import { BsFillInfoSquareFill } from 'react-icons/bs';

export default function PostIcon({ type }: { type: string }) {
  return type === 'STUDENT' ? (
    <TbSquareLetterSFilled color="limegreen" size={30}></TbSquareLetterSFilled>
  ) : (
    <BsFillInfoSquareFill size={26} color="darkorange"></BsFillInfoSquareFill>
  );
}
