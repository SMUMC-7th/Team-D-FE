import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OutletWrapper = styled.div`
  width: 100%;
  min-height: 91vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #6bad99;

  /* 전체 스크롤바 스타일을 지정합니다 */
  ::-webkit-scrollbar {
    width: 12px; /* 세로 스크롤바 너비 */
    height: 12px; /* 가로 스크롤바 높이 */
  }

  /* 스크롤바 트랙을 스타일링합니다 */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* 스크롤 트랙 색상 */
    border-radius: 10px; /* 둥근 모서리 적용 */
  }

  /* 스크롤바 손잡이를 스타일링합니다 */
  ::-webkit-scrollbar-thumb {
    background: #888; /* 손잡이 색상 */
    border-radius: 10px; /* 둥근 모서리 적용 */
    border: 3px solid #f1f1f1; /* 손잡이 주변 여백 */
  }

  /* 스크롤바 손잡이 마우스 오버 시 스타일 */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* 손잡이 색상 변경 */
  }

  /* 스크롤바 화살표 버튼을 제거합니다 */
  ::-webkit-scrollbar-button {
    display: none; /* 화살표 버튼 숨김 */
  }
`;

export { AppContainer, OutletWrapper };
