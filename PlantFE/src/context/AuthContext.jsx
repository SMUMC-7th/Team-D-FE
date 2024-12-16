import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        userName,
        setUserName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context == null) {
    throw new Error("AuthProvider를 찾을 수 없습니다.");
  }

  return context;
}
