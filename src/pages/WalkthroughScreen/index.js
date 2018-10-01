import React from 'react';
import { View, Text, Button } from 'react-native'; 



export default class WalkthroughScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>WalkthroughScreen</Text>
      <Button title="Terms"  onPress={() => this.props.navigation.navigate('Terms')}/>

       
    </View>
  }
}