import { useState } from "react";
import * as S from "./ProjectTable.styled";
import { IoIosRemoveCircle } from "react-icons/io";
import TaskModal from "../modal/TaskModal";

const TaskBox = ({ isModal, setIsModal }) => {
  // console.log(setIsModal, "a");

  return (
    <S.TaskBtn
      onClick={() => setIsModal(true)}
      isModal={isModal}
      setIsModal={true}
    >
      <IoIosRemoveCircle color="red" size="25px" />
      Usecase 최종
      <S.Circle />
    </S.TaskBtn>
  );
};

export default TaskBox;
