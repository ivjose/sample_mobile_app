import React, { Component } from "react";
import { StyleSheet } from 'react-native'

import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';
import {StyleProvider
} from "native-base";



class MainWrapper extends Component {
  render() {
    return (
       <StyleProvider style={getTheme(platform)}>
        {this.props.children}
      </StyleProvider>
    );
  }
}

export default MainWrapper;