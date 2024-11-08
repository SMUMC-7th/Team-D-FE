import * as S from "./SiginUpPage.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//import axios from "axios";
//import { useNavigate } from "react-router-dom";
//import React from "react";

const SignUpPage = () => {
  //const navigate = useNavigate();
  const schema = yup.object().shape({
    id: yup.string().required("아이디를 반드시 입력해주세요."),
    password: yup.string().required(),
    password_check: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("비밀번호 검증 또한 필수 입력요소입니다."),
    lastName: yup.string().required(),
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    gender: yup.string().required(),
    year: yup.number().required().min(1900).max(new Date().getFullYear()),
    month: yup.number().required().min(1).max(12),
    day: yup.number().required().min(1).max(31),
    termsOfService: yup.boolean().required().oneOf([true]),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log("데이터 제출 : ", data);
  };

  return (
    <S.Container>
      <S.TitleText>Sign up</S.TitleText>
      <S.Login>
        <p>이미 계정이 있으신가요?</p>
        <a href="/login" className="Login_text">
          로그인
        </a>
      </S.Login>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <S.P>아이디</S.P>
          <S.InputBox>
            <S.Input
              type={"text"}
              {...register("id")}
              style={{ width: "150px" }}
            />
            <S.Button>중복 확인</S.Button>
            <p>어쩌고저쩌고</p>
          </S.InputBox>
        </div>
        <div>
          <S.P>비밀번호</S.P>
          <S.InputBox>
            <S.Input type={"password"} {...register("password")} />
          </S.InputBox>
        </div>
        <div>
          <S.P>비밀번호 확인</S.P>
          <S.InputBox>
            <S.Input type={"password"} {...register("password_check")} />
          </S.InputBox>
        </div>
        <div>
          <S.P>이름</S.P>
          <S.InputBox>
            <S.Input
              type={"text"}
              {...register("lastName")}
              placeholder="성"
              style={{ width: "87px" }}
            />
            <S.Input
              type={"text"}
              {...register("firstName")}
              placeholder="이름"
              style={{ width: "87px" }}
            />
          </S.InputBox>
        </div>
        <div>
          <S.P>이메일</S.P>
          <S.InputBox>
            <S.Input
              type={"text"}
              {...register("email")}
              style={{ width: "260px" }}
            />
            <S.Button>이메일 인증</S.Button>
          </S.InputBox>
        </div>
        <div>
          <S.P>성별</S.P>
          <S.InputBox>
            <label>
              <input type={"radio"} value="man" {...register("gender")} />남
            </label>
            <label>
              <input type={"radio"} value="woman" {...register("gender")} />여
            </label>
            <label>
              <input type={"radio"} value="none" {...register("gender")} />
              선택 안함
            </label>
          </S.InputBox>
        </div>
        <div>
          <S.P>생년월일</S.P>
          <S.InputBox>
            <S.Input
              type={"number"}
              {...register("year")}
              placeholder="년도"
              style={{ width: "80px" }}
            />

            <S.Input
              type={"number"}
              {...register("month")}
              placeholder="월"
              style={{ width: "80px" }}
            />

            <S.Input
              type={"number"}
              {...register("day")}
              placeholder="일"
              style={{ width: "80px" }}
            />
          </S.InputBox>
        </div>
        <div>
          <S.P>생년월일</S.P>
          <S.InputBox>
            <input type={"date"} {...register("year")} />
          </S.InputBox>
        </div>
        <S.Hr />
        <div className="TermsDiv">
          <S.P>이용약관동의</S.P>
          <S.TermsInputBox>
            <div className="TermsInputBox_Container">
              <label>
                <input type={"radio"} {...register("termsOfService")} />
                전체 동의합니다.
              </label>
            </div>
            <div className="TermsInputBox_Container">
              <label>
                <input type={"radio"} {...register("termsOfService")} />
                개인정보 수집 및 이용 동의
              </label>
              <a href="">약관 보기</a>
            </div>
            <div className="TermsInputBox_Container">
              <label>
                <input type={"radio"} {...register("termsOfService")} />
                이용약관 동의(필수)
              </label>
              <a href="">약관 보기</a>
            </div>
            <div className="TermsInputBox_Container">
              <label>
                <input type={"radio"} {...register("termsOfService")} />
                본인은 만 14세 이상입니다.
              </label>
              <a href="">약관 보기</a>
            </div>
          </S.TermsInputBox>
        </div>

        <S.SignUpButton type="submit">Sign Up</S.SignUpButton>
      </form>
    </S.Container>
  );
};

export default SignUpPage;
