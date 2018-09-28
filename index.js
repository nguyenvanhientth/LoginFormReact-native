/** @format */

import React, { Component } from 'react';
import { AppRegistry,} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import {name as appName} from './app.json';


import MainPage from './component/MainPage';
 import SplashPage from './component/SplashPage';
 import LoginPage from './component/LoginPage';
 import ForgotPassPage from './component/ForgotPassPage';
 import SignUpPage from './component/SignUpPage';



const MyApp = StackNavigator({
  SplashPage: { screen: SplashPage },
  MainPage: { screen: MainPage },
  LoginPage: { screen: LoginPage },
  ForgotPassPage: { screen: ForgotPassPage },
  SignUpPage: {screen: SignUpPage}
});

AppRegistry.registerComponent(appName, () => MyApp);
