import * as S from "./LoginPage.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { PiPlant } from "react-icons/pi";

const LoginPage = () => {
  const schema = yup.object().shape({
    id: yup.string().required("아이디를 반드시 입력해주세요."),
    password: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  return (
    <S.Container>
      <PiPlant className="leaf" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Container_InputBox">
          <FaUser className="Container_InputIcon" />
          <S.Input {...register("id")} placeholder="아이디를 입력하세요." />
        </div>

        <div className="Container_InputBox">
          <CiLock className="Container_InputIcon" />
          <S.Input
            type={"password"}
            {...register("password")}
            placeholder="비밀번호를 입력하세요."
          />
        </div>

        <S.SearchID_PW>
          <p>아이디 찾기</p>
          <p> | </p>
          <p>비밀번호 찾기</p>
        </S.SearchID_PW>
        <S.Button>LOGIN</S.Button>
      </form>

      <S.Signup>
        <p>계정이 없으신가요?</p>
        <a href="/signup" className="Signup_text">
          회원가입
        </a>
      </S.Signup>
    </S.Container>
  );
};

export default LoginPage;
