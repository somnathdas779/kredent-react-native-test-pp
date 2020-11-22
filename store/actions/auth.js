import { AsyncStorage } from 'react-native';
import Config from '../../constants/appconfig';
import { Alert } from 'react-native';
// export const SIGNUP = 'SIGNUP';
// export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

let timer;

export const authenticate = (userId, token, expiryTime) => {
  return dispatch => {
    dispatch(setLogoutTimer(100000));
    dispatch({ type: AUTHENTICATE, userId: userId, token: token });
  };
};


export const signup = (name, email, password) => {
  return async dispatch => {
    const response = await fetch(
      Config.apiEndPoint+'users/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name
        })
      }
    );
    const resData = await response.json();
    if(resData.error){
      const errorId = resData.error;
      throw new Error(errorId);
    }else{
      Alert.alert('Signup', "You have been successfully registered", [{ text: 'Okay' }]);
    }
  };
};


export const login = (email, password) => {
  
  return async dispatch => {
    const response = await fetch(
      Config.apiEndPoint+'auth',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      }
    );
    
  
    

    const resData = await response.json();
    if(resData.error){
      const errorId = resData.error;
      throw new Error(errorId);
    }
    dispatch(
      authenticate(
        resData.name,
        resData.jwttoken,
        parseInt(resData.expiresIn) * 1000
      )
    );
    const expirationDate = new Date(
      new Date().getTime() + 10000 * 1000
    );
    saveDataToStorage(resData.jwttoken, resData.name, expirationDate);
  };
};

export const logout = () => {
  clearLogoutTimer();
  AsyncStorage.removeItem('userData');
  return { type: LOGOUT };
};

const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = expirationTime => {
  return dispatch => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

const saveDataToStorage = (token, userId, expirationDate) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: userId,
      expiryDate: expirationDate.toISOString()
    })
  );
};
