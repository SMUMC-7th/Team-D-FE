import { useState } from "react";
import { RxQuestionMark } from "react-icons/rx";

const BookCard = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover}
    </div>
  );
};
