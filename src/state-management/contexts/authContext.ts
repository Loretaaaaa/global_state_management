import { Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";
import React from "react";

interface AuthContextProps {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
);

export default AuthContext;
