import * as S from "./TeamMakePage.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { PostProject } from "../../../api/labunAPI";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "../../../context/AuthContext";

const TeamMakePage = () => {
  const navigate = useNavigate();

  const [members, setMembers] = useState([
    { id: Date.now(), name: "", registered: false },
  ]);
  const [membersId, setMembersId] = useState([]);
  const { userId, setProjectCreate } = useAuthContext();

  const schema = yup.object().shape({
    projectName: yup.string().required(),
    startDate: yup.date().required(),
    endDate: yup.date().required(),
    teamMembers: yup
      .array()
      .of(yup.string().required())
      .min(1, "최소 1명 이상의 팀원을 등록해야 합니다.")
      .required(),
  });

  const {
    mutate: PostTeamMakeMutation,
    isError,
    isPending,
  } = useMutation({
    mutationFn: PostProject,
    onSuccess: (response) => {
      console.log("데이터 제출 성공", response);
      navigate(`/mypage/${userId}`);
    },
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      teamMembers: [],
    },
  });

  useEffect(() => {
    setProjectCreate(true);
    return () => {
      setProjectCreate(false);
    };
  }, [setProjectCreate]);

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      teamMembers: membersId,
    };

    console.log("데이터 제출 : ", formattedData);
    PostTeamMakeMutation(formattedData);
  };

  //팀원ID 추가
  const addMemberInput = () => {
    setMembers([
      ...members,
      { id: Date.now(), displayText: "", registered: false },
    ]);
  };
  //팀원ID 삭제
  const deleteMember = (index) => {
    const updateMembers = members.filter((_, idx) => idx !== index);
    setMembers(updateMembers);
    updateTeamMembers(updateMembers);
  };
  //팀원ID 등록 버튼 눌렀을 때
  const handleRegisterClick = (index, value) => {
    const updatedMembers = members.map((member, idx) => {
      if (idx === index) {
        return { ...member, displayText: value, registered: true };
      }
      return member;
    });
    setMembers(updatedMembers);
    updateTeamMembers(updatedMembers);
  };

  const updateTeamMembers = (updatedMembers) => {
    const members = updatedMembers
      .filter((member) => member.registered)
      .map((member) => member.displayText);
    setMembersId(members);
    setValue("teamMembers", members);
  };

  function MemberInput({
    member,
    index,
    addTeamMemberInput,
    teamMembersLength,
  }) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

    return (
      <S.Container_Form_Input_Box>
        {!member.registered ? (
          <S.InputBox>
            <S.Input type={"text"} value={inputValue} onChange={handleChange} />
            <S.Button
              onClick={() => handleRegisterClick(index, inputValue)}
              disabled={!inputValue.trim()}
            >
              등록
            </S.Button>
          </S.InputBox>
        ) : (
          <S.MemberBox>
            <p>{member.displayText}</p>
            <button onClick={() => deleteMember(index)}>X</button>
          </S.MemberBox>
        )}

        {index === teamMembersLength - 1 && (
          <S.PlusButton onClick={addTeamMemberInput}>+ 추가</S.PlusButton>
        )}
      </S.Container_Form_Input_Box>
    );
  }

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
            <p>{errors.startDate?.message}</p>
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
                // register={register}
                addTeamMemberInput={addMemberInput}
                teamMembersLength={members.length}
                handleRegisterClick={handleRegisterClick}
              />
            ))}
          </S.Container_Form_Input_Box>
        </div>
        <p>{errors.teamMembers?.message}</p>

        <S.CreateSeedButton
          type="submit"
          disabled={!isValid}
          style={{
            background: isValid
              ? "linear-gradient(to left top, rgba(150, 220, 199, 0.91), rgba(178, 231, 202, 0.91), rgba(234, 254, 231, 0.91), rgba(220, 243, 218, 0.91))"
              : "gray",
          }}
        >
          CREATE
          <img src="../../../../public/plus.png" className="Plus" />
        </S.CreateSeedButton>
      </form>
    </S.Container>
  );
};

export default TeamMakePage;
