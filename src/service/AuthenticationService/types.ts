import User, { UserData } from "@/models/User"
import React from "react";

type AuthenticationStateProviderPropsType = {
    children: React.ReactNode
};
type AuthenticationStateProviderType = React.FC<AuthenticationStateProviderPropsType>;

type AuthenticationContextType = {
    isAuthenticated: boolean,
    userData: UserData | null,
    setLogin: (user: User) => void
    logout: () => void
}

export {
    AuthenticationContextType,
    AuthenticationStateProviderType
};