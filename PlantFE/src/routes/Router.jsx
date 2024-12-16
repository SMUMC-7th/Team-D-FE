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
        element: <TeamMakePage />,
      },
      {
        path: "/mypage/:userId",
        element: <MyPage />,
      },
      {
        path: "/team/current/:teamId",
        element: <CurrentPage />,
      },
      {
        path: "/team/plant/:teamId",
        element: <PlantPage />,
      },
      {
        path: "/mypage/:userId/plantbook",
        element: <PlantBookPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default Router;
