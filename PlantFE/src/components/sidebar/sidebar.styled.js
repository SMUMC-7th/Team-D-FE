import styled from "styled-components";

const Container = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 10px;
    padding: 10px;
`
const Header = styled.h1`
    font-family: Roboto Serif;
    font-size: 35px;
    font-weight: 400;
    line-height: 49.22px;
    text-align: center;

`
const Profile = styled.div`

`
const TextLst = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 10px;
`
const NavText = styled.div` //추후에 link로 교체
    font-family: Gowun Batang;
    font-size: 20px;
    font-weight: 400;
    line-height: 28.13px;
    text-align: center;
    border-bottom: 1px solid #A0A0A0;

`
const Line = styled.hr`
    margin: 0;
    padding: 0;
    color: white;
    width: 90%;

`
export {Container, Header, Profile, NavText, TextLst, Line}