import React from 'react';
import "./firebase";
import { NavigationContainer } from '@react-navigation/native';
import AuthFlow from './src/routes/AuthFlow';
import { Provider as AuthProvider } from './src/context/authContext';


function App() {

  return (
      <NavigationContainer>
        <AuthProvider>
          <AuthFlow />
        </AuthProvider>
      </NavigationContainer>
  );

}


export default App;
