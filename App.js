import React, { Fragment } from "react";
import SplashScreen from 'react-native-splash-screen'
import { createStackNavigator } from "react-navigation";
import DashboardScreen from "./src/pages/DashboardScreen";
import AuthLoadingScreen from "./src/pages/AuthLoadingScreen";
import BillsPaymentScreen from "./src/pages/BillsPaymentScreen";
import CommunityScreen from "./src/pages/CommunityScreen";
import InquiriesScreen from "./src/pages/InquiriesScreen";

import LoginScreen from "./src/pages/LoginScreen";

import ServiceScreen from "./src/pages/ServiceScreen";
import TermsScreen from "./src/pages/TermsScreen";

import VideoScreen from "./src/pages/VideoScreen";
import WalkthroughScreen from "./src/pages/WalkthroughScreen";

const AppStack = createStackNavigator(
  {
    Walkthrough: WalkthroughScreen,
    Terms: TermsScreen,
    Video: VideoScreen,
    Login: LoginScreen,
    Dashboard: DashboardScreen,
    Community: CommunityScreen,

    BillsPayment: BillsPaymentScreen,
    Inquiries: InquiriesScreen,
    Service: ServiceScreen
  },
  {
    initialRouteName: "Dashboard",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default class App extends React.Component {

  componentDidMount(){
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }

  render() {
    return <AppStack />
  }
}
