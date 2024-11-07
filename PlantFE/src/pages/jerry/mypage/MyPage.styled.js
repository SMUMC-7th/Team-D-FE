import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex:1;
    height: 100vh;
    width: 100%;
`
const Sidebar = styled.div`
    width: 20%;
`
const Main = styled.div`
    width: 80%;
`
const SortBtnLst = styled.div`

`
const ConditionBar = styled.div`

`
const MainContentBox = styled.div`

`
const Line = styled.hr`
    margin: 0;
    padding: 0;
    color: white;
    height: 100%;

`

export {Container, Sidebar, Main, SortBtnLst, ConditionBar, Line, MainContentBox}