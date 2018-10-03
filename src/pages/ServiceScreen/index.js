import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MainWrapper from "../../components/MainWrapper";
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

const datas = ["INQUIRIES", "COMPLAINTS", "REQUESTS", "WARRANTY"];

class ServiceScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <MainWrapper>
        <Container style={styles.container}>
          <Header style={{ backgroundColor: "#34BEEF" }}>
            <Left style={{flex: 1}}>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="ios-arrow-back" />
              </Button>
            </Left>
            <Body  style={{flex: 5}}>
              <Title style={{alignSelf: 'center', fontWeight: 'bold' }}>SERVICE REQUESTS</Title>
            </Body>
              <Right style={{flex: 1}}/>
          </Header>

          <Content>
            <List>
              {datas.map((data, i) => (
                <ListItem style={{paddingTop: 25, paddingBottom: 25}} key={i} onPress={() => this.props.navigation.navigate("Inquiries")}>
                  <Left>
                    <Text style={{fontWeight: 'bold'}}>{data}</Text>
                  </Left>
                  <Right>
                    <Icon name="ios-arrow-forward"  style={{color: '#244958' }} />
                  </Right>
                </ListItem>
              ))}


              
            </List>
          </Content>
        </Container>
      </MainWrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  }
});

export default ServiceScreen;
