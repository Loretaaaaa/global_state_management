import { Dispatch } from "react";
import { AuthAction } from "./AuthProvider";
import React from "react";

interface AuthContextProps {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
);

export default AuthContext;
