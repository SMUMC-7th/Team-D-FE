import * as S from "./ProjectTable.styled";
import { SlPencil } from "react-icons/sl";
import TaskBox from "./TaskBox";

const TeamList = ({ isModal, setIsModal }) => {
  return (
    <S.TeamTable>
      <S.TeamTasklist>
        <S.HeaderCell style={{ border: "none", fontSize: "30px" }}>
          나재호 <SlPencil style={{ width: "15px" }} />
        </S.HeaderCell>
        <TaskBox isModal={isModal} setIsModal={setIsModal} />
        <TaskBox isModal={isModal} setIsModal={setIsModal} />
      </S.TeamTasklist>
      <S.TeamTasklist>
        <S.HeaderCell style={{ border: "none", fontSize: "30px" }}>
          나재호 <SlPencil style={{ width: "15px" }} />
        </S.HeaderCell>
        <TaskBox />
        <TaskBox />
      </S.TeamTasklist>
      <S.TeamTasklist>
        <S.HeaderCell style={{ border: "none", fontSize: "30px" }}>
          나재호 <SlPencil style={{ width: "15px" }} />
        </S.HeaderCell>
        <TaskBox />
        <TaskBox />
      </S.TeamTasklist>
    </S.TeamTable>
  );
};

export default TeamList;
