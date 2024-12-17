import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 10px;
  padding: 10px;
  gap: 15px;
`;
const Header = styled.h1`
  font-family: Roboto Serif;
  font-size: 35px;
  font-weight: 400;
  line-height: 49.22px;
  text-align: center;
`;

const Profile = styled.div`
  text-align: center;
`;
const ImgBox = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    background-color: lightgray;
    border-radius: 8px;
    width: 100%;
    height: 30%;
    img{
        src="/src/pages/jerry/profile_init.png"
    }
`;
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5px;
  gap: 10px;
`;
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 5px;
`;
const ProfileEditBtn = styled.button`
  border-radius: 10px;
  font-family: Roboto Serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.88px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  background-color: white;
  margin-left: 15px;
`;
const ProfileText = styled.div`
  font-size: ${(props) => props.size || "20px"};
  margin-left: 10px;
`;
const TextLst = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 8px;
  gap: 15px;
`;
const NavText = styled.div`
  //추후에 link로 교체필요
  font-family: Gowun Batang;
  font-size: 20px;
  font-weight: 400;
  line-height: 28.13px;
  text-align: center;
  border-bottom: 1px solid #a0a0a0;
`;
const Line = styled.hr`
  margin: 0;
  padding: 0;
  color: white;
  width: 90%;
`;
export {
  Container,
  Header,
  ProfileText,
  RowWrapper,
  ColumnWrapper,
  Profile,
  ProfileEditBtn,
  ImgBox,
  NavText,
  TextLst,
  Line,
};
