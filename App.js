import React from 'react';
import "./firebase";
import { NavigationContainer } from '@react-navigation/native';
import MainFlow from './src/routes/MainFlow';
import AuthFlow from './src/routes/AuthFlow';
import { Provider as AuthProvider } from './src/context/authContext';


function App() {

  return (
    <AuthProvider>
      <MainFlow />
    </AuthProvider>
  );

}


export default App;
