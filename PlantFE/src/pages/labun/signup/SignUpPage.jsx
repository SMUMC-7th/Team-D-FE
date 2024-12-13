import * as S from "./SiginUpPage.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { PostSignup, GetDuplicateID } from "../../../api/labunAPI";
import emailjs from "emailjs-com";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [checks, setChecks] = useState({
    all: false,
    personalInfo: false,
    termsOfService: false,
    age: false,
  });

  //이메일 인증
  const sendVerificationEmail = () => {
    const email = watch("email");
    const templateParams = {
      to_email: email,
      from_name: "PLANTEAM",
      message: "인증되었습니다.",
    };
    emailjs
      .send(
        "service_PLANTEAM",
        "template_byfph8d",
        templateParams,
        "q6_H-nwCMUlkJt5hn"
        // process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        console.log("이메일이 성공적으로 보내졌습니다"), setIsEmailSent(true);
      })
      .catch((error) => {
        console.log("이메일 보내기 실패", error);
      });
  };
  const handleVerification = () => {
    sendVerificationEmail();
  };

  //이용약관 전체 선택
  const handleAllChange = (e) => {
    const isChecked = e.target.checked;
    setChecks({
      all: isChecked,
      personalInfo: isChecked,
      termsOfService: isChecked,
      age: isChecked,
    });
  };

  //이용약관 개별 선택
  const handleIndividualChange = (e, key) => {
    const isChecked = e.target.checked;
    const updatedChecks = {
      ...checks,
      [key]: isChecked,
    };
    updatedChecks.all =
      updatedChecks.personalInfo &&
      updatedChecks.termsOfService &&
      updatedChecks.age;

    setChecks(updatedChecks);
  };

  const schema = yup.object().shape({
    id: yup.string().required("아이디를 반드시 입력해주세요."),
    password: yup.string().required(),
    password_check: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required(),
    lastName: yup.string().required(),
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    gender: yup.string().required(),
    birth: yup.string().required().min(1900).max(new Date().getFullYear()),
    personalInfo: yup
      .boolean()
      .required()
      .oneOf([true], "개인정보 수집 및 이용 동의가 필요합니다."),
    termsOfService: yup
      .boolean()
      .required()
      .oneOf([true], "약관에 동의해야 합니다."),
    age: yup
      .boolean()
      .required()
      .oneOf([true], "만 14세 이상임을 확인해야 합니다."),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {
    mutate: PostSignUPMutation,
    isError,
    isPending,
  } = useMutation({
    mutationFn: PostSignup,
    onSuccess: (response) => {
      console.log("데이터 제출 성공");
      console.log("API 응답 : ", response);

      navigate("/login");
    },
  });

  //아이디 중복 확인
  const handleDuplicateCheck = () => {
    const idValue = watch("id");
    if (idValue?.trim()) {
      GetDuplicateID(idValue);
    } else {
      alert("아이디를 입력해주세요");
    }
  };

  const onSubmit = async (data) => {
    console.log("데이터 제출 : ", data);
    PostSignUPMutation(data);
  };

  if (isPending) {
    return <h1>로딩중</h1>;
  }
  if (isError) {
    return <h1>에러!!</h1>;
  }

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
            <S.Button onClick={handleDuplicateCheck}>중복 확인</S.Button>
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
            <S.Button onClick={handleVerification}>이메일 인증</S.Button>
            {isEmailSent ? (
              alert("인증 이메일이 발송되었습니다. 이메일을 확인해주세요.")
            ) : (
              <></>
            )}
          </S.InputBox>
        </div>
        <div>
          <S.P>성별</S.P>
          <S.InputBox>
            <label>
              <input type={"radio"} value="MALE" {...register("gender")} />남
            </label>
            <label>
              <input type={"radio"} value="FEMALE" {...register("gender")} />여
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
            <input
              className="InputBox_Input"
              type={"date"}
              {...register("birth")}
            />
          </S.InputBox>
        </div>
        <S.Hr />
        <div className="TermsDiv">
          <S.P>이용약관동의</S.P>
          <S.TermsInputBox>
            <div className="TermsInputBox_Container">
              <label>
                <input type={"checkbox"} onChange={handleAllChange} />
                전체 동의합니다.
              </label>
            </div>
            <div className="TermsInputBox_Container">
              <label>
                <input
                  type={"checkbox"}
                  {...register("personalInfo")}
                  checked={checks.personalInfo}
                  onChange={(e) => handleIndividualChange(e, "personalInfo")}
                />
                개인정보 수집 및 이용 동의
              </label>
              <a href="">약관 보기</a>
            </div>
            <div className="TermsInputBox_Container">
              <label>
                <input
                  type={"checkbox"}
                  {...register("termsOfService")}
                  checked={checks.termsOfService}
                  onChange={(e) => handleIndividualChange(e, "termsOfService")}
                />
                이용약관 동의(필수)
              </label>
              <a href="">약관 보기</a>
            </div>
            <div className="TermsInputBox_Container">
              <label>
                <input
                  type={"checkbox"}
                  {...register("age")}
                  checked={checks.age}
                  onChange={(e) => handleIndividualChange(e, "age")}
                />
                본인은 만 14세 이상입니다.
              </label>
              <a href="">약관 보기</a>
            </div>
          </S.TermsInputBox>
        </div>

        <S.SignUpButton
          type="submit"
          disabled={!isValid}
          style={{
            background: isValid
              ? "linear-gradient(to left top, rgba(150, 220, 199, 0.91), rgba(178, 231, 202, 0.91), rgba(234, 254, 231, 0.91), rgba(220, 243, 218, 0.91))"
              : "gray",
          }}
        >
          Sign Up
        </S.SignUpButton>
      </form>
    </S.Container>
  );
};

export default SignUpPage;
