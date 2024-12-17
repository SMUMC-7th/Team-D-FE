import styled from "styled-components";

// 스타일드 컴포넌트

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isModal }) =>
    isModal ? "0" : "-40vw"}; /* 모달이 열리면 0, 닫히면 -30vw */
  width: 40vw;
  height: 100vh;
  background: linear-gradient(180deg, #f1fff9 0%, #c4eddc 52.5%, #c8dad8 100%);
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease; /* 부드러운 슬라이드 애니메이션 */
  display: flex;
  flex-direction: column;
  padding: 2rem;
  z-index: 10;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isModal }) => (isModal ? "block" : "none")};
  z-index: 9;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  padding: 1rem 0;
  font-size: ${({ fontSize }) => fontSize || "30px"};
  color: #333;
  text-decoration: none;
  font-family: Gowun Batang;
  font-weight: ${(props) => props.fontWeight || "700"};
  line-height: 57.92px;
  padding: 0 40px;
  text-underline-position: from-font;

  cursor: pointer;
`;

const CloseButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalInputWrapper = styled.div`
  background: ${(props) =>
    props.bcg ||
    "conic-gradient(from 77.05deg at 52.42% 60.94%, #8FDEC6 0deg, #96DCC7 9.4deg, #B2E7CA 159.84deg, #EAFEE7 210.24deg, #DCF3DA 242.64deg, #DFFADC 266.04deg, #DDFCEA 296.64deg, #8FDEC6 360deg);"};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  min-width: 404px;
  height: 62px;
  border-radius: 10px;
  border: ${(props) => props.border || "1px solid #838383"};
  gap: ${(props) => props.gap || "15px"};
`;

const ModalInput = styled.input`
  border: none;
  border-bottom: 2px solid gray;
  width: auto;
  height: 30px;
  background-color: rgba(0, 0, 0, 0);
`;

const ModalBtn = styled.button`
  border: 2px solid #818181;
  background: ${(props) =>
    props.bcg ||
    "conic-gradient(from 77.05deg at 52.42% 60.94%, #8FDEC6 0deg, #96DCC7 9.4deg, #B2E7CA 159.84deg, #EAFEE7 210.24deg, #DCF3DA 242.64deg, #DFFADC 266.04deg, #DDFCEA 296.64deg, #8FDEC6 360deg);"};
  color: white;
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
  border-radius: 8px;
  font-family: "BMEULJIRO";
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
`;
const EditDate = styled.select`
  width: auto;
  border-radius: 3px;
`;
const StaffListBox = styled.div`
  position: absolute;
  left: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  background: conic-gradient(
    from 77.05deg at 52.42% 60.94%,
    #8fdec6 0deg,
    #96dcc7 9.4deg,
    #b2e7ca 159.84deg,
    #eafee7 210.24deg,
    #dcf3da 242.64deg,
    #dffadc 266.04deg,
    #ddfcea 296.64deg,
    #8fdec6 360deg
  );
  width: 200px;
  height: 160px;
  border-radius: 10px;
  border: 0.1px solid #1e1e1e;
  gap: 5px;
  z-index: 3;
`;

const ModalStaffName = styled.button`
  width: 120px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid #888888;
  background-color: white;
  font-weight: 600;
  font-family: "RobotoSerif";
  font-size: 15px;
  box-shadow: 0px 4px 4px 0px #00000040;
  cursor: pointer;
`;

const liText = styled.li`
  font-family: Gowun Batang;
  font-size: 30px;
  font-weight: 400;
  line-height: 43.44px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export {
  liText,
  ModalStaffName,
  StaffListBox,
  ModalInputWrapper,
  ModalInput,
  ModalBtn,
  MenuContainer,
  EditDate,
  Modal,
  Overlay,
  MenuItem,
  CloseButton,
};
