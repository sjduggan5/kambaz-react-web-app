import AnswerIcon from './AnswerIcon';

export default function AnswerHeader({ type }: { type: any }) {
  return (
    <div className="pt-1 ps-1 pe-1 d-flex flex-row align-items-center">
      <AnswerIcon type={type} />
      <div className="fs-6 fw-bold ms-2">{`the ${type.toLowerCase()}s' answer,`}</div>
      <div className="fs-6 fst-italic ms-2">{`where ${type.toLowerCase()}s collectively construct a single answer`}</div>
    </div>
  );
}
