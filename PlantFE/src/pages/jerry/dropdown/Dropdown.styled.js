import styled from 'styled-components';

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownButton = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px; /* 버튼 너비 조정 */
`;

const DropdownMenu = styled.div`
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    z-index: 1;
`;

const MenuItem = styled.div`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`;

const IconContainer = styled.div`
    border-left: 2px solid #ccc;
    padding-left: 10px;
`;

export {DropdownContainer, DropdownButton, DropdownMenu, MenuItem, IconContainer}