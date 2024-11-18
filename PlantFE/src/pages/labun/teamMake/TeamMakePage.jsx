import * as S from "./TeamMakePage.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

//import axios from "axios";
//import { useNavigate } from "react-router-dom";
//import React from "react";

const TeamMakePage = () => {
  //const navigate = useNavigate();
  const schema = yup.object().shape({
    projectType: yup.string().required(),
    projectName: yup.string().required(),
    startDate: yup.date().required().max(yup.ref("endDate")),
    endDate: yup.date().required().min(yup.ref("startDate")),
    teamMembers: yup.array().of(yup.string().required()).required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log("데이터 제출 : ", data);
  };

  const [members, setMembers] = useState([
    { id: Date.now(), name: "", registered: false },
  ]);

  const addMemberInput = () => {
    setMembers([...members, { id: Date.now(), name: "", registered: false }]);
  };

  const handleRegisterClick = (index, value) => {
    const updatedMembers = members.map((member, idx) => {
      if (idx === index) {
        return { ...member, displayText: value, registered: true };
      }
      return member;
    });
    setMembers(updatedMembers);
  };

  function MemberInput({
    member,
    index,
    register,
    addTeamMemberInput,
    teamMembersLength,
    handleRegisterClick,
  }) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
    return (
      <S.Container_Form_Input_Box>
        {!member.registered ? (
          <S.InputBox>
            <S.Input
              type={"text"}
              {...register(`teamMembers[${index}].name`)}
              onChange={handleChange}
            />
            <S.Button onClick={() => handleRegisterClick(index, inputValue)}>
              등록
            </S.Button>
          </S.InputBox>
        ) : (
          <S.MemberBox>
            <p>{member.displayText}</p>
          </S.MemberBox>
        )}

        {index === teamMembersLength - 1 && (
          <S.PlusButton onClick={addTeamMemberInput}>+ 추가</S.PlusButton>
        )}
      </S.Container_Form_Input_Box>
    );
  }

  return (
    <S.Container>
      <S.TitleText>Goal</S.TitleText>
      <S.Hr />
      <p className="SmallText">* 팀원 모두 회원가입 한 뒤에 진행해주세요. </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <S.P>프로젝트명</S.P>
          <S.InputBox>
            <S.Input type={"text"} {...register("projectName")} />
          </S.InputBox>
        </div>
        <div>
          <S.P>기 간</S.P>
          <S.Container_Form_Input_Box>
            <S.InputBox>
              <input
                className="Date_Input"
                type={"date"}
                {...register("startDate")}
              />
              <p>부터</p>
            </S.InputBox>
            <S.InputBox>
              <input
                className="Date_Input"
                type={"date"}
                {...register("endtDate")}
              />
              <p>까지</p>
            </S.InputBox>
          </S.Container_Form_Input_Box>
        </div>
        <div className="TeamMemberBox">
          <S.P>팀원 ID</S.P>
          <S.Container_Form_Input_Box>
            {members.map((member, index) => (
              <MemberInput
                key={member.id}
                member={member}
                index={index}
                register={register}
                addTeamMemberInput={addMemberInput}
                teamMembersLength={members.length}
                handleRegisterClick={handleRegisterClick}
              />
            ))}
          </S.Container_Form_Input_Box>
        </div>

        <S.CreateSeedButton type="submit">
          CREATE
          <img src="../../../../public/plus.png" className="Plus" />
        </S.CreateSeedButton>
      </form>
    </S.Container>
  );
};

export default TeamMakePage;
