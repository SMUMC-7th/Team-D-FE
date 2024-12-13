import * as S from "./TeamMakePage.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { PostProject } from "../../../api/labunAPI";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const TeamMakePage = () => {
  const navigate = useNavigate();

  const [members, setMembers] = useState([
    { id: Date.now(), name: "", registered: false },
  ]);
  const [membersId, setMembersId] = useState([]);

  const schema = yup.object().shape({
    projectName: yup.string().required(),
    startDate: yup.date().required().max(yup.ref("endDate")),
    endDate: yup.date().required().min(yup.ref("startDate")),
    //teamMembers: yup.array().of(yup.string().required()).required(),
  });

  const {
    mutate: PostTeamMakeMutation,
    isError,
    isPending,
  } = useMutation({
    mutationFn: PostProject,
    onSuccess: () => {
      console.log("데이터 제출 성공");
      navigate("/");
    },
  });
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      teamMembers: membersId,
    };

    console.log("데이터 제출 : ", formattedData);
    PostTeamMakeMutation(formattedData);
  };

  const addMemberInput = () => {
    setMembers([...members, { id: Date.now(), name: "", registered: false }]);
  };

  const deleteMember = (index) => {
    setMembers(members.filter((_, idx) => idx !== index));
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
              //{...register(`teamMembers[${index}].name`)}
              value={inputValue}
              onChange={handleChange}
            />
            <S.Button
              onClick={() => handleRegisterClick(index, inputValue)}
              disabled={!inputValue.trim()}
            >
              등록
            </S.Button>
          </S.InputBox>
        ) : (
          <S.MemberBox>
            <p>{member.displayText}</p>{" "}
            <button onClick={() => deleteMember(index)}>X</button>
          </S.MemberBox>
        )}

        {index === teamMembersLength - 1 && (
          <S.PlusButton onClick={addTeamMemberInput}>+ 추가</S.PlusButton>
        )}
      </S.Container_Form_Input_Box>
    );
  }
  useEffect(() => {
    const teamMembers = members.map((member) => member.displayText || "");
    setMembersId(teamMembers);
  }, [members, setMembers]);

  if (isPending) {
    return <h1>로딩중</h1>;
  }
  if (isError) {
    return <h1>에러!!</h1>;
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
                {...register("endDate")}
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
                //register={register}
                addTeamMemberInput={addMemberInput}
                teamMembersLength={members.length}
                handleRegisterClick={handleRegisterClick}
              />
            ))}
          </S.Container_Form_Input_Box>
        </div>

        <S.CreateSeedButton
          type="submit"
          // disabled={!isValid}
          // style={{
          //   background: isValid
          //     ? "linear-gradient(to left top, rgba(150, 220, 199, 0.91), rgba(178, 231, 202, 0.91), rgba(234, 254, 231, 0.91), rgba(220, 243, 218, 0.91))"
          //     : "gray",
          // }}
        >
          CREATE
          <img src="../../../../public/plus.png" className="Plus" />
        </S.CreateSeedButton>
      </form>
    </S.Container>
  );
};

export default TeamMakePage;
