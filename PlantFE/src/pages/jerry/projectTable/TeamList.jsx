import * as S from "./ProjectTable.styled";
import { SlPencil } from "react-icons/sl";
import TaskBox from "./TaskBox";

const TeamList = ({ isModal, setIsModal, projectList }) => {
  console.log(projectList);

  // const { tasks } = projectList[0];
  // console.log(tasks[0]);

  return (
    <S.TeamTable>
      {/* <S.TeamTasklist>
        <S.HeaderCell style={{ border: "none", fontSize: "30px" }}>
          나재호 <SlPencil style={{ width: "15px" }} />
        </S.HeaderCell>
        <TaskBox isModal={isModal} setIsModal={setIsModal} />
        <TaskBox isModal={isModal} setIsModal={setIsModal} />
      </S.TeamTasklist> */}
      <S.TeamTasklist>
        <S.HeaderCell style={{ border: "none", fontSize: "30px" }}>
          나재호 <SlPencil style={{ width: "15px" }} />
        </S.HeaderCell>
        {projectList &&
          projectList.map((project, _) => {
            return project?.tasks.map((task, idx) => {
              console.log(task, idx);
              return (
                <TaskBox
                  key={idx}
                  task={task}
                  isModal={isModal}
                  setIsModal={setIsModal}
                />
              );
            });
          })}
        <TaskBox />
      </S.TeamTasklist>
    </S.TeamTable>
  );
};

export default TeamList;
