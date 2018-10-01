import React from 'react';
import { View, Text, Button } from 'react-native'; 



export default class TermsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TermsScreen</Text>
        <Button title="Login"  onPress={() => this.props.navigation.navigate('Login')}/>
    </View>
  }
}