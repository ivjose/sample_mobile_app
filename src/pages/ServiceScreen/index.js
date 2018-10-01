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

const datas = ["INQUERIES", "COMPLAINS", "REQUEST", "WARRANTY"];

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
              <Title style={{alignSelf: 'center' }}>SERVICE REQUESTS</Title>
            </Body>
              <Right style={{flex: 1}}/>
          </Header>

          <Content>
            <List>
              {datas.map((data, i) => (
                <ListItem key={i}>
                  <Left>
                    <Text>{data}</Text>
                  </Left>
                  <Right>
                    <Icon name="ios-arrow-forward" />
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
