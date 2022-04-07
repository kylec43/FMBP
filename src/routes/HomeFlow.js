import HomeScreen from '../screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

function HomeFlow() {

    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{headerTitle: "Home Screen"}}
            />
        </Tab.Navigator>
    );
}

export default HomeFlow;