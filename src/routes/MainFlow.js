import HomeFlow from "./HomeFlow";
import AuthFlow from "./AuthFlow";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import useMainFlow from "../hooks/useMainFlow";

const Stack = createStackNavigator();

function MainFlow() {

    const { isLoggedIn } = useMainFlow();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{animationEnabled: false, headerShown: false}}>
                {isLoggedIn ? <Stack.Screen name="HomeFlow" component={HomeFlow} />
                            : <Stack.Screen name="AuthFlow" component={AuthFlow} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default MainFlow;