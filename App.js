import React from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import DashboardScreen from './src/pages/DashboardScreen'
import AuthLoadingScreen from './src/pages/AuthLoadingScreen'



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Dashboard');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}


class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}



const AppStack = createStackNavigator({ Home: HomeScreen, Dashboard: DashboardScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen});

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',

  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}