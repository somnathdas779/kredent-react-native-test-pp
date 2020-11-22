import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerItemList
} from '@react-navigation/drawer';
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Dashboard , { screenOptions as DashbaordScreenOptions} from '../screens/Dashboard';
import { useDispatch } from 'react-redux';
import colors from '../constants/colors';
import * as authActions from '../store/actions/auth';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primary : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary
};

const ProductsStackNavigator = createStackNavigator();

export const DashboardNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ProductsStackNavigator.Screen
        name="Dashboard"
        component={Dashboard}
        options={DashbaordScreenOptions}
      />
    
    </ProductsStackNavigator.Navigator>
  );
};



const KredentDrawerNavigator = createDrawerNavigator();

export const RecidentNavigator = () => {
 
  const dispatch = useDispatch();
  return (
    <KredentDrawerNavigator.Navigator
      drawerContent={props => {
       
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
              <DrawerItemList {...props} />
              <Button
                title="Logout"
                color={colors.primary}
                onPress={() => {
                  dispatch(authActions.logout());
                  props.navigation.navigate('Login');
                }}
              />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: colors.primary
      }}
    >
      
      <KredentDrawerNavigator.Screen
        name="Dashboard"
        component={DashboardNavigator}
   
      />
      <KredentDrawerNavigator.Screen
        name="New Post"
        component={DashboardNavigator}
   
      />
      
     
    </KredentDrawerNavigator.Navigator>
  );
};

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  const myscreenOptions = {
    headerTitle: 'Authenticate'
  };
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen
        name="Login"
        component={Login}
        options={{headerShown:false}}
      />
     
       <AuthStackNavigator.Screen
        name="Signup"
        component={Signup}
        options={{headerShown:false}}
  
      />
      
    </AuthStackNavigator.Navigator>
  );
};


