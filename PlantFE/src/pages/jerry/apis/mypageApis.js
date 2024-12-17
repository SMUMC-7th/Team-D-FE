import { authInstance } from "../../../api/jerry/axios.instance";

// 유저 정보 불러오기
export const apiGetUserData = async () => {
  const reqUrl = `/users/info/`;
  try {
    const apiRes = await authInstance.get(reqUrl);
    console.log(apiRes);
    // return mockProjectResponse?.data;
    return apiRes.data.data;
  } catch (error) {
    console.log(error);
  }
};
// project에 유즈이펙트로 찍어본 log확인하고 상태관리 필요한 변수들 각 상태에 맞게 변경해주기
// ===========================================
// 내 프로젝트 보기 (옵션 세개 - 진행중 완료 모두보기)
export const apiGetProjectListData = async (option = "all") => {
  const reqUrl = `/projects/info/${option}`;
  try {
    const apiRes = await authInstance.get(reqUrl);
    console.log(apiRes);
    // return mockProjectResponse?.data;
    return apiRes.data.data;
  } catch (error) {
    console.log(error);
  }
};
