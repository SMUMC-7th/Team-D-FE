import { authInstance, defaultInstance } from "./axiosInstance";

export const mockProjectResponse = {
  data: [
    {
      endDate: "2024-06-01T00:00:00.000Z",
      projectKey: 1,
      projectName: "Green Initiative",
      startDate: "2024-01-01T00:00:00.000Z",
      totalProgress: 50,
    },
  ],
  success: true,
};

export const apiGetProjectData = () => {
  const reqUrl = "/project/info";
  try {
    // const apiRes = await authInstance.get(reqUrl);
    return mockProjectResponse?.data;
  } catch (error) {
    console.log(error);
  }
};
