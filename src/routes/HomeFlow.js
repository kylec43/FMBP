import HomeScreen from '../screens/HomeScreen'
import AccountScreen from '../screens/AccountScreen';
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
            <Tab.Screen 
                name="Account" 
                component={AccountScreen}
                options={{headerTitle: "Account Screen"}}
            />
        </Tab.Navigator>
    );
}

export default HomeFlow;