import * as S from "./LoginPage.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
      <img className="Leaf" src="../Images/login_leaf.png" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <img src="../Images/login_userID.png" />
          <S.Input {...register("id")} placeholder=" 아이디를 입력하세요." />
        </div>

        <S.Hr />
        <div>
          <img src="../Images/login_password.png" />
          <S.Input
            type={"password"}
            {...register("password")}
            placeholder="  비밀번호를 입력하세요."
          />
        </div>

        <S.Hr />
        <S.SearchID_PW>
          <p>아이디 찾기</p>
          <p> | </p>
          <p>비밀번호 찾기</p>
        </S.SearchID_PW>
        <S.Button>LOGIN</S.Button>
      </form>

      <S.Signup>
        <p>계정이 없으신가요?</p>
        <p className="Signup_text">회원가입</p>
      </S.Signup>
    </S.Container>
  );
};

export default LoginPage;
