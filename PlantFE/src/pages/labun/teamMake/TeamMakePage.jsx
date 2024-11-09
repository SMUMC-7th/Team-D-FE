import * as S from "./TeamMakePage.style";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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

  const { register, handleSubmit, control, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const projectType = watch("projectType");
  const onSubmit = async (data) => {
    console.log("데이터 제출 : ", data);
  };

  return (
    <S.Container>
      <S.TitleText>Goal</S.TitleText>
      <S.Hr />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <S.P>종 류</S.P>
          <S.InputBox>
            <Controller
              name="projectType"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option value="">프로젝트 선택</option>
                  <option value="class">수업</option>
                  <option value="goalOriented">목표 지향</option>
                  <option value="drawing">그림</option>
                  <option value="personalHomework">개인 과제</option>
                  <option value="custom">직접 입력</option>
                </select>
              )}
            />
            {projectType === "custom" && (
              <S.Input
                type="text"
                {...register("customProjectType")}
                placeholder="프로젝트 종류 입력"
              />
            )}
          </S.InputBox>
        </div>
        <div>
          <S.P>팀 명</S.P>
          <S.InputBox>
            <S.Input type={"text"} {...register("projectName")} />
          </S.InputBox>
        </div>
        <div>
          <S.P>기 간</S.P>
          <S.InputBox>
            <S.Input type={"date"} {...register("startDate")} />
            부터
          </S.InputBox>
          <S.InputBox>
            <S.Input type={"date"} {...register("endtDate")} />
            까지
          </S.InputBox>
        </div>
        <div>
          <S.P>팀뭔 ID</S.P>
          <S.InputBox>
            <S.Input type={"text"} {...register("teamMembers")} />
            <S.Button>등록</S.Button>
          </S.InputBox>
        </div>

        <S.CreateSeedButton type="submit">씨앗 생성</S.CreateSeedButton>
      </form>
    </S.Container>
  );
};

export default TeamMakePage;
