import { authInstance, defaultInstance } from "./axiosInstance_labun";

const PostSignup = async (data) => {
  const response = await defaultInstance.post("/users/signup", {
    userId: data.userId,
    userName: data.userName,
    userPassword: data.userPassword,
    uerEmail: data.userEmail,
    gender: data.gender,
    birth: data.birth,
  });
  return response.data;
};

const GetDuplicateID = async (data) => {
  const response = await authInstance.get("/users/signup/duplicate", {
    duplicate: data.userId,
  });
  return response.data;
};

const PostLogin = async (data) => {
  const response = await defaultInstance.post("/users/login", data);
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

export { PostSignup, GetDuplicateID, PostLogin, PostProject };
