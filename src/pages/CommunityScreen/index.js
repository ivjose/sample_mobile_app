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
  StyleProvider,
  Input,
  Label,
  Form,
  Item,
  Textarea,
  Footer,
  View
} from "native-base";

const datas = ["INQUERIES", "COMPLAINS", "REQUEST", "WARRANTY"];

class CommunityScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <MainWrapper>
        <Container style={styles.container}>
          <Header noShadow transparent>
            <Left style={{ flex: 1 }}>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="ios-arrow-back" style={{color: '#000'}} />
              </Button>
            </Left>
            <Body style={{ flex: 5 }}>
              <Title style={{ alignSelf: "center", color: '#000' }}>INQUERIES</Title>
            </Body>
            <Right style={{ flex: 1 }} />
          </Header>

          <Content>
            
          </Content>
          <Button
            block
            large 
            style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}
          >
            <Text>JOIN NOW</Text>
          </Button>
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

export default CommunityScreen;
