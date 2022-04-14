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
                options={{headerTitle: "Sign Up", cardStyle: {backgroundColor: "#111111"}}}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerTitle: "Login", cardStyle: {backgroundColor: "#111111"}}}
            />
        </Stack.Navigator>
    );
}

export default AuthFlow;