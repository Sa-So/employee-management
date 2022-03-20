import { useContext } from "react";
// import { AuthContext } from "../context/AuthProvider";
import AuthContext from "../context/AuthProvider";
const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);
  return { auth, setAuth };
};
