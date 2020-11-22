import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { AuthNavigator, RecidentNavigator } from './UserNavigator';



const AppNavigator = props => {
  
  const isAuth = useSelector(state => !!state.auth.token);
  return (
    
    <NavigationContainer>
      
      {isAuth && <RecidentNavigator />}
      {!isAuth && <AuthNavigator />}
    </NavigationContainer>
      
     
     
    
  );
};

export default AppNavigator;
