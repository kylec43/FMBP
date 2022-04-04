import React from 'react';
import "./firebase";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{headerTitle: "Home Screen"}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerTitle: "Signup"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


export default App;
