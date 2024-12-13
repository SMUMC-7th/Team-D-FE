import * as S from "./LoginPage.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { PiPlant } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { PostLogin } from "../../../api/labunAPI";
import { useAuthContext } from "../../../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setIsLogin } = useAuthContext();

  const schema = yup.object().shape({
    id: yup.string().required("아이디를 반드시 입력해주세요."),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {
    mutate: PostLoginMutation,
    isError,
    isPending,
  } = useMutation({
    mutationFn: PostLogin,
    onSuccess: () => {
      console.log("데이터 제출 성공");
      setIsLogin(true);

      navigate("/");
    },
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출", data);
    PostLoginMutation(data);
  };

  if (isPending) {
    return <h1>로딩중</h1>;
  }
  if (isError) {
    return <h1>에러!!</h1>;
  }

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
        <S.Button
          disabled={!isValid}
          style={{
            background: isValid
              ? "linear-gradient(to left top, rgba(150, 220, 199, 0.91), rgba(178, 231, 202, 0.91), rgba(234, 254, 231, 0.91), rgba(220, 243, 218, 0.91))"
              : "gray",
          }}
        >
          LOGIN
        </S.Button>
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
