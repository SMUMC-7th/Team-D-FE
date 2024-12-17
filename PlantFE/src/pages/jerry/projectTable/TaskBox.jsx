import { useState } from "react";
import * as S from "./ProjectTable.styled";
import { IoIosRemoveCircle } from "react-icons/io";
import TaskModal from "../modal/TaskModal";
import { authInstance } from "../../../api/jerry/axios.instance";

const TaskBox = (props) => {
  // console.log(task);
  const { isModal, setIsModal, task } = props;
  console.log(props);

  const handleDeleteTask = async () => {
    authInstance.delete(`/projects/tasks/${task.taskKey}`);
  };

  return (
    task && (
      <S.TaskBtn
        onClick={() => setIsModal(true)}
        isModal={isModal}
        setIsModal={true}
      >
        <span onClick={() => handleDeleteTask()}>
          <IoIosRemoveCircle color="red" size="25px" />
        </span>
        {task.taskName}
        <S.Circle />
      </S.TaskBtn>
    )
  );
};

export default TaskBox;
