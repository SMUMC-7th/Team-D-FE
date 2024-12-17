import React, { useState } from "react";
import * as S from "./Dropdown.styled";
import { IoIosArrowDown } from "react-icons/io";

const ProjectDropdown = ({ currentState, setcurrentState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (state) => {
    setcurrentState(state);
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer>
      <S.DropdownButton onClick={toggleDropdown}>
        {currentState}
        <S.IconContainer>
          <IoIosArrowDown />
        </S.IconContainer>
      </S.DropdownButton>
      <S.DropdownMenu isOpen={isOpen}>
        <S.MenuItem onClick={() => handleMenuItemClick("A")}>A</S.MenuItem>
        <S.MenuItem onClick={() => handleMenuItemClick("B")}>B</S.MenuItem>
        <S.MenuItem onClick={() => handleMenuItemClick("C")}>C</S.MenuItem>
      </S.DropdownMenu>
    </S.DropdownContainer>
  );
};

export default ProjectDropdown;
