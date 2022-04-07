import HomeFlow from "./HomeFlow";
import AuthFlow from "./AuthFlow";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function MainFlow() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AuthFlow" screenOptions={{animationEnabled: false, headerShown: false}}>
                <Stack.Screen name="AuthFlow" component={AuthFlow} />
                <Stack.Screen name="HomeFlow" component={HomeFlow} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default MainFlow;