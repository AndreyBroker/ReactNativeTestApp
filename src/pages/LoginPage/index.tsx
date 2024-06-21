import { Button, TextInput, View } from "react-native";
import { DefaultPageType } from "../Types";
import useAuthentication from "@/service/AuthenticationService/modules";
import User from "@/models/User";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState } from "react";


const LoginPage: DefaultPageType = () => {

    const { setLogin } = useAuthentication();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const usernameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const login = () => {

        setErrorMessage("");
        if(!username || !password){
            setErrorMessage("Login e senha devem estar preenchidos.")
            return;
        }

        const user: User = {
            username: username,
            password: password
        }
        setLogin(user)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "2rem", gap: "0.5rem"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                    <input onChange={usernameOnChange} type="text" placeholder="username"  style={{ padding: "0.5rem",backgroundColor: "transparent", border: "1px solid rgb(33, 150, 243)", color: "#000", borderRadius: "0.2rem"}}/>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                    <input onChange={passwordOnChange} placeholder="password" type="password" style={{ padding: "0.5rem",backgroundColor: "transparent", border: "1px solid rgb(33, 150, 243)", color: "#000", borderRadius: "0.2rem"}}/>
                </div>
            </div>
            <Button 
                title="Login"
                onPress={login}
            />

            <div style={{marginTop: "1rem"}}>
                {errorMessage}
            </div>
        </View>
    )
};

export default LoginPage;