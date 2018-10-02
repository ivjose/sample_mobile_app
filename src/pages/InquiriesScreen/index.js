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

class InquiriesScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <MainWrapper>
        <Container style={styles.container}>
          <Header style={{ backgroundColor: "#34BEEF" }}>
            <Left style={{ flex: 1 }}>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="ios-arrow-back" />
              </Button>
            </Left>
            <Body style={{ flex: 5 }}>
              <Title style={{ alignSelf: "center" }}>INQUERIES</Title>
            </Body>
            <Right style={{ flex: 1 }} />
          </Header>

          <Content>
            <Form>
              <Item stackedLabel>
                <Label>PROPERTY</Label>
                <Input
                  placeholderTextColor="#D5C9C9"
                  placeholder="e.g. Flair Tower"
                />
              </Item>
              <Item stackedLabel>
                <Label>UNIT NUMBER</Label>
                <Input placeholderTextColor="#D5C9C9" placeholder="e.g. 1809" />
              </Item>
              <Item stackedLabel>
                <Label>SUBJECT</Label>
                <Input
                  placeholderTextColor="#D5C9C9"
                  placeholder="e.g. parking"
                />
              </Item>
              <Item
                stackedLabel
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "flex-start"
                }}
              >
                <Label>MESSAGE</Label>
                <Textarea
                  rowSpan={6}
                  placeholderTextColor="#D5C9C9"
                  placeholder="type concern here..."
                />
              </Item>
            </Form>
          </Content>
          <Button
            block 
            
            style={{ marginLeft: 20, marginRight: 20, marginBottom: 20, paddingTop: 30, paddingBottom: 30, backgroundColor: '#DDDDDD' }}
          >
            <Text style={{fontWeight: 'bold', color: '#fff'}}>SEND</Text>
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

export default InquiriesScreen;
