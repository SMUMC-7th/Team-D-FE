import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
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
