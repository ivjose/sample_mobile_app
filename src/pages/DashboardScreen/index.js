import React from 'react';; 
import MainWrapper from "../../components/MainWrapper";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  StyleProvider
} from "native-base";


export default class DashboardScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  
  render() {
    return <MainWrapper>
        <Container style={styles.container}>
          <Header style={{ backgroundColor: "#34BEEF" }}>
            
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="arrow-back" />
              </Button>
            
            <Body  style={{ backgroundColor: "red" }}>
              <Title>Dashboard</Title>
            </Body>
          </Header>

          <Content>
         <Button onPress={() => this.props.navigation.navigate('Community')}>
            <Text>Community</Text>
          </Button>

       <Button onPress={() => this.props.navigation.navigate('Service')}>
            <Text>Service</Text>
          </Button>

          <Button onPress={() => this.props.navigation.navigate('BillsPayment')}>
            <Text>Bills Payment</Text>
          </Button>

             <Button onPress={() => this.props.navigation.navigate('Inquiries')}>
            <Text>Inquiries</Text>
          </Button> 
  
          </Content>
        </Container>
      </MainWrapper>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  }
});