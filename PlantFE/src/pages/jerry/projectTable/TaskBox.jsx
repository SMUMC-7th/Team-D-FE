import { useState } from "react";
import * as S from "./ProjectTable.styled";
import { IoIosRemoveCircle } from "react-icons/io";
import TaskModal from "../modal/TaskModal";

const TaskBox = (props) => {
  // console.log(task);
  const { isModal, setIsModal, task } = props;
  console.log(props);

  return (
    task && (
      <S.TaskBtn
        onClick={() => setIsModal(true)}
        isModal={isModal}
        setIsModal={true}
      >
        <IoIosRemoveCircle color="red" size="25px" />
        {task.taskName}
        <S.Circle />
      </S.TaskBtn>
    )
  );
};

export default TaskBox;
