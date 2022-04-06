import HomeScreen from '../screens/HomeScreen'
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AuthFlow() {

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{headerTitle: "Signup"}}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerTitle: "Login"}}
            />
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{headerTitle: "Home Screen"}}
            />
        </Stack.Navigator>
    );
}

export default AuthFlow;