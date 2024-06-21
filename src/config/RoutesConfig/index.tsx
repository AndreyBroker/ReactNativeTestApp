import pages from '@/pages';
import useAuthentication from '@/service/AuthenticationService/modules';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const PublicRoutes = () => {

    const { LoginPage} = pages;

    return (
        
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const ProtectedRoutes = () => {
    const { HomePage, AboutPage } = pages;

    return (
        
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="About" component={AboutPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const RoutesProvider = () => {

    const { isAuthenticated } = useAuthentication();

    return isAuthenticated ? <ProtectedRoutes /> : <PublicRoutes />
}

export default RoutesProvider;