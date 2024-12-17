import * as S from "./ProjectTable.styled";
import { SlPencil } from "react-icons/sl";
import TaskBox from "./TaskBox";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const TeamList = ({
  isModal,
  setIsModal,
  projectList,
  currentState,
  setcurrentState,
}) => {
  console.log(projectList);
  const [currentProjectTasks, setCurrentProjectTasks] = useState(projectList);
  // const { tasks } = projectList[0];
  // console.log(tasks[0]);
  const currentProject = projectList.filter(
    (item) => currentState == item.projectName
  );
  console.log(currentProject[0]); // filter 결과 배열의 첫 요소 사용

  return (
    <S.TeamTable>
      {currentProject[0].teamMembers.map((member) => {
        return (
          <S.TeamTasklist key={member.userKey}>
            {" "}
            <S.HeaderCellBox>
              {
                <S.HeaderCell>
                  {" "}
                  {member.userName}
                  <SlPencil style={{ width: "15px" }} />
                </S.HeaderCell>
              }
            </S.HeaderCellBox>
            {currentProject[0]?.tasks.map((task, idx) => {
              console.log(task, idx);
              if (task.userKey != member.userKey) {
                return;
              }
              return (
                <TaskBox
                  key={idx}
                  task={task}
                  isModal={isModal}
                  setIsModal={setIsModal}
                />
              );
            })}
            <CiCirclePlus
              size="40"
              onClick={() => setIsModal(true)}
            ></CiCirclePlus>
          </S.TeamTasklist>
        );
      })}
    </S.TeamTable>
  );
};

export default TeamList;

// {projectList &&
//   projectList.map((project, _) => {
//     return (
//       <S.TeamTasklist key={project.id}>
//         {" "}
//         {/* 각 프로젝트에 고유한 key 추가 */}
//         {/* <S.HeaderCell style={{ border: "none", fontSize: "30px" }}>
//           {project.userName} <SlPencil style={{ width: "15px" }} />
//         </S.HeaderCell> */}
//         {project.teamMembers.map((item, idx) => {
//           return (
//             <S.HeaderCell key={idx}>
//               {" "}
//               {item}
//               <SlPencil style={{ width: "15px" }} />
//             </S.HeaderCell>
//           );
//         })}
//         {project.tasks.map((task, idx) => {
//           console.log(task, idx);
//           return (
//             <TaskBox
//               key={idx}
//               task={task}
//               isModal={isModal}
//               setIsModal={setIsModal}
//             />
//           );
//         })}
//       </S.TeamTasklist>
//     );
//   })}
