import styled from 'styled-components';


const Background = styled.div`
    height: 100%;
    border-radius: 20px;
    background-color: white;
    position: relative;
    z-index: 1;
    
`
const Table = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 100%;
    border-right: 0.5px solid #B2B2B2;
    position: absolute;
    z-index: 2;
`;

const HeaderCell = styled.div`
    font-weight: bold;
    padding: 10px;
    border-bottom: 2px solid #B2B2B2;
    font-family: Roboto Serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 35.16px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

`;

const Cell = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #B2B2B2;
    // &:not(:last-child) {
    //     border-right: 1px solid #ccc; /* 각 셀의 오른쪽에 세로선을 추가 */
    // }

    font-family: Roboto Serif;
    font-size: ${props => props.size || '20px'};
    font-weight: 400;
    line-height: 30.94px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

`;



export {Background, Table, HeaderCell, Cell}