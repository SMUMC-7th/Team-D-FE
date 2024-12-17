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


export const apiGetProjectData = async (projectKey) => {
  const reqUrl = `/projects/info/specify/${projectKey}`;
  try {
    const apiRes = await authInstance.get(reqUrl);
    console.log(apiRes);
    // return mockProjectResponse?.data;
    return apiRes.data.data;
  } catch (error) {
    console.log(error);
  }
};

// 유저 정보 불러오기
export const apiGetUserData = async () => {
  const reqUrl = `/users/info`;
  try {
    const apiRes = await authInstance.get(reqUrl);
    console.log(apiRes);
    // return mockProjectResponse?.data;
    return apiRes.data.data;
  } catch (error) {
    console.log(error);
  }
};

// 내 프로젝트 보기 (옵션 세개 - 진행중 완료 모두보기)
export const apiGetProjectListData = async (option = "all") => {
  const reqUrl = `/users/info/${option}`;
  try {
    const apiRes = await defaultInstance.get(reqUrl);
    console.log(apiRes);
    // return mockProjectResponse?.data;
    return apiRes.data.data;
  } catch (error) {
    console.log(error);
  }
};
