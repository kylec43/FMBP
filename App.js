import React from 'react';
import "./firebase";
import MainFlow from './src/routes/MainFlow';
import { Provider as AuthProvider } from './src/context/authContext';


function App() {

  return (
    <AuthProvider>
      <MainFlow />
    </AuthProvider>
  );

}


export default App;
