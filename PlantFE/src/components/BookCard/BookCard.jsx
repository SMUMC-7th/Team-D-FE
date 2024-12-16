import { useState } from "react";
import { RxQuestionMark } from "react-icons/rx";
import * as S from "./BookCard.style";

const BookCard = (props) => {
  const { state, plant, project, date, img_path, level } = props;
  const [isHover, setIsHover] = useState(false);

  return (
    <S.Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {state ? (
        <>
          <img src={img_path} />
          {isHover ? (
            <S.DetailCard>
              <ul>
                <li>
                  식물 이름 : {plant} <p>lv.{level}</p>
                </li>
                <li>획득 프로젝트 : {project}</li>
                <li>획득일 : {date}</li>
              </ul>
              <button>닫기</button>
            </S.DetailCard>
          ) : (
            <></>
          )}
        </>
      ) : (
        <RxQuestionMark />
      )}
    </S.Container>
  );
};

export default BookCard;
