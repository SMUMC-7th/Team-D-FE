import { useState } from "react";
import * as S from "./Dropdown.styled";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentState, setCurrentState] = useState("모두 보기");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (state) => {
    setCurrentState(state);
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
        <S.MenuItem onClick={() => handleMenuItemClick("진행 중")}>
          진행 중
        </S.MenuItem>
        <S.MenuItem onClick={() => handleMenuItemClick("완료")}>
          완료
        </S.MenuItem>
        <S.MenuItem onClick={() => handleMenuItemClick("모두 보기")}>
          모두 보기
        </S.MenuItem>
      </S.DropdownMenu>
    </S.DropdownContainer>
  );
};

export default Dropdown;
