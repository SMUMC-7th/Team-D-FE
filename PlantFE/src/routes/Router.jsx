import AppLayout from "../layout/AppLayout";
import {
  LandingPage,
  LoginPage,
  SignUpPage,
  TeamMakePage,
  MyPage,
  CurrentPage,
  PlantPage,
  ErrorPage,
  PlantBookPage,
} from "../pages/index";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const UserRoute = ({ children }) => {
  const { isLogin } = useAuthContext();
  if (isLogin === false) {
    alert("로그인을 해주세요.");
    return <Navigate to="/login" replace />;
  }
  return children;
};

const Router = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/register",
        element: (
          <UserRoute>
            <TeamMakePage />
          </UserRoute>
        ),
      },
      {
        path: "/mypage/:userId",
        element: (
          <UserRoute>
            <MyPage />
          </UserRoute>
        ),
      },
      {
        path: "/team/current/:teamId",
        element: (
          <UserRoute>
            <CurrentPage />
          </UserRoute>
        ),
      },
      {
        path: "/team/plant/:teamId",
        element: (
          <UserRoute>
            <PlantPage />
          </UserRoute>
        ),
      },
      {
        path: "/mypage/:userId/plantbook",
        element: (
          <UserRoute>
            <PlantBookPage />
          </UserRoute>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default Router;
