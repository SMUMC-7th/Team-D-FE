import { SlPencil } from "react-icons/sl";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import * as S from "./TaskModal.style";
import { useState } from "react";

const TaskModal = ({ isModal, setIsModal }) => {
  const [titleBoxOpen, setTitleBoxOpen] = useState(false);
  const [staffLstOpen, setStaffLstOpen] = useState(false);
  const [selectedName, setSelectedName] = useState("나재호");
  //   console.log("lstOpen", staffLstOpen);

  const openHandler = (choice) => {
    //choice는 titleBox와 staffLst중에 handle하고자 하는것
    if (choice == "titleBox") setTitleBoxOpen(!titleBoxOpen);
    else if (choice == "staffLst") setStaffLstOpen(!staffLstOpen);
  };

  const selectedHandler = (name) => {
    console.log(name);
    setSelectedName(name);
    setStaffLstOpen(false);
  };
  return (
    <>
      <S.Overlay isModal={isModal} onClick={() => setIsModal(false)} />
      <S.Modal isModal={isModal}>
        <S.CloseButton>
          <MdKeyboardDoubleArrowRight
            size="64px"
            onClick={() => setIsModal(false)}
          />
        </S.CloseButton>
        <S.MenuContainer>
          <S.MenuItem fontSize="40px">
            Flowchart 완성{" "}
            <SlPencil Button onClick={() => openHandler("titleBox")} />
          </S.MenuItem>
          {titleBoxOpen ? (
            <S.ModalInputWrapper>
              <S.ModalInput></S.ModalInput>
              <S.ModalBtn bcg="#568573">등록</S.ModalBtn>
            </S.ModalInputWrapper>
          ) : null}

          <S.MenuItem fontSize="25px">2024.10.01 ~ 09</S.MenuItem>
          <S.ModalInputWrapper gap="0px">
            <S.EditDate>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </S.EditDate>
            년
            <S.EditDate>
              {Array.from({ length: 12 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </S.EditDate>
            월
            <S.EditDate>
              {Array.from({ length: 31 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </S.EditDate>
            일 ~
            <S.EditDate>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </S.EditDate>
            년
            <S.EditDate>
              {Array.from({ length: 12 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </S.EditDate>
            월
            <S.EditDate>
              {Array.from({ length: 31 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </S.EditDate>
            일<S.ModalBtn bcg="#568573">수정</S.ModalBtn>
          </S.ModalInputWrapper>
          <hr style={{ background: "white", color: "white" }} />
          <S.liText>역할자</S.liText>
          <div>
            <S.ModalInputWrapper bcg="none" border="none">
              <S.MenuItem fontSize="25px" fontWeight="400">
                {selectedName}
              </S.MenuItem>{" "}
              <S.ModalBtn
                style={{ color: "black" }}
                onClick={() => openHandler("staffLst")}
              >
                수정
              </S.ModalBtn>
            </S.ModalInputWrapper>
            {staffLstOpen ? (
              <S.StaffListBox>
                <S.ModalStaffName onClick={() => selectedHandler("송병호")}>
                  송병호
                </S.ModalStaffName>
                <S.ModalStaffName onClick={() => selectedHandler("김영준")}>
                  김영준
                </S.ModalStaffName>
                <S.ModalStaffName onClick={() => selectedHandler("조용주")}>
                  조용주
                </S.ModalStaffName>
                <S.ModalBtn
                  onClick={() => {
                    () => {
                      setStaffLstOpen(false);
                    };
                  }}
                  width="160px"
                  height="30px"
                  bcg="#568573"
                >
                  변 경
                </S.ModalBtn>
              </S.StaffListBox>
            ) : null}
          </div>
          <S.liText>진행 상황</S.liText>
          <S.ModalInputWrapper>
            <S.ModalBtn bcg="#568573">업데이트</S.ModalBtn>
          </S.ModalInputWrapper>
        </S.MenuContainer>
      </S.Modal>
    </>
  );
};

export default TaskModal;
