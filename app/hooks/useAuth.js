import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  return { user, setUser };
};
