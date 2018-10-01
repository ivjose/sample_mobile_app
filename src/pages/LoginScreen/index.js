import React from 'react';
import { View, Text, Button } from 'react-native'; 



export default class VideoScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>VideoScreen</Text>
      <Button title="Dashboard"  onPress={() => this.props.navigation.navigate('Dashboard')}/>
    </View>
  }
}