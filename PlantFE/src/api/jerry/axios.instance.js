import axios from "axios";
const BASE_URL = "http://umc-d.kro.kr:3000";

// 단순 get요청으로 인증값이 필요없는 경우
const axiosApi = (url) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
    },
    // withCredentials: true,
  });
  return instance;
};

// 새로운 AccessToken을 발급받는 함수
// const refreshAccessToken = async () => {
//   const refreshToken = cookies.get("refreshToken");
//   console.log(refreshToken);
//   try {
//     // 알아서 리프레시토큰으로 요청보내면 응답을 쿠키로 써줌
//     const response = await axios.post(`${BASE_URL}/v1/auth/refresh`, {
//       headers: {
//         Authorization: `Bearer ${refreshToken}`,
//       },
//       withCredentials: true,
//     });

//     // const { accessToken: newAccessToken } = response.data.data;
//     // setAccessToken(newAccessToken);
//     // return newAccessToken;
//   } catch (error) {
//     console.error(error);
//   }
// };

// post, delete등 api요청 시 인증값이 필요한 경우
const axiosAuthApi = (url) => {
  // const accessToken = cookies.get("accessToken");
  const instance = axios.create({
    baseURL: url,
    // withCredentials: true,
  });
  // 응답 오류 -> 401 에러가 발생했을 때만 refreshToken으로 접근
  // instance.interceptors.response.use(
  //   (response) => response,
  //   async (error) => {
  //     const originalRequest = error.config;
  //     // AccessToken이 만료되었을 경우
  //     if (error.response.status === 401 && !originalRequest._retry) {
  //       originalRequest._retry = true;
  //       // 새로운 AccessToken을 발급받습니다.
  //       const newAccessToken = await refreshAccessToken();
  //       // 발급받은 AccessToken으로 요청을 다시 시도합니다.
  //       originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
  //       return instance(originalRequest); // 현재 axios instance로 원래 요청 재호출
  //     }
  //     return Promise.reject(error);
  //   }
  // );
  // axios.interceptors.request를 통해 headers에 액세스 토큰 설정
  instance.interceptors.request.use(
    //리퀘스트 보낼때 인터셉트해버림
    async (config) => {
      const accessToken = localStorage.getItem("accessToken");
      // console.log("accessToken:", accessToken);
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return instance;
};

export const authInstance = axiosAuthApi(BASE_URL);
export const defaultInstance = axiosApi(BASE_URL);

//authInstance에서 받아온 accessToken으로 api이용
//api이용해서 각 상태들 log찍어서 각 상태들 적용/관리하기
