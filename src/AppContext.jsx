import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Value, setValue] = useState();

  const setValues = (Values) => {
    setValue(Values);
  };

  return (
    <AuthContext.Provider
      value={{
        Value,
        setValues,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
