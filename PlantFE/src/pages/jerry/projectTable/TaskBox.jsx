import * as S from "./ProjectTable.styled";
import { IoIosRemoveCircle } from "react-icons/io";

const TaskBox = () => {
  return (
    <S.TaskBtn>
      <IoIosRemoveCircle color="red" size="25px" />
      Usecase 최종
      <S.Circle />
    </S.TaskBtn>
  );
};

export default TaskBox;
