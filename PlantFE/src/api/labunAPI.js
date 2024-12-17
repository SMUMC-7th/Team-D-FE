import { authInstance, defaultInstance } from "./axiosInstance_labun";

const PostSignup = async (data) => {
  const response = await defaultInstance.post("/users/sign/up", {
    userId: data.id,
    userName: data.lastName + data.firstName,
    userPassword: data.password,
    userEmail: data.email,
    gender: data.gender,
    birth: data.birth,
  });

  return response;
};

const GetDuplicateID = async (data) => {
  const response = await authInstance.get(`/users/sign/up/duplicate/${data}`);
  return response.data;
};

const PostLogin = async (data) => {
  const response = await defaultInstance.post("/users/auth/login", {
    userId: data.id,
    userPassword: data.password,
  });
  console.log("로그인 API 응답 ", response);
  return response.data;
};

const PostProject = async (data) => {
  const response = await defaultInstance.post("/users/project/make", {
    projectName: data.projectName,
    startDate: data.startDate,
    endDate: data.endDate,
    teamMembers: data.teamMembers,
  });
  return response.data;
};

const GetPlantBook = async () => {
  const response = await defaultInstance.get("");
  return response.data;
};

export { PostSignup, GetDuplicateID, PostLogin, PostProject, GetPlantBook };
