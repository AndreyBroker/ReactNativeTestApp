import { createContext, useContext } from "react";
import { AuthenticationContextType } from "./types";
import User from "@/models/User";


const AuthenticationContext = createContext<AuthenticationContextType>({
    isAuthenticated: false,
    userData: null,
    setLogin: (user: User) => {},
    logout: () => {}
});
const useAuthentication = () => useContext(AuthenticationContext);

export {
    AuthenticationContext
};
export default useAuthentication;