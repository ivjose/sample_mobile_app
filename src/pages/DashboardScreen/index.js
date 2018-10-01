import React from "react";
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
  StyleProvider,
  Card,
  CardItem
} from "native-base";

export default class DashboardScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <MainWrapper>
        <Container style={styles.container}>
          <Header style={{ backgroundColor: "#34BEEF" }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>

            <Body style={{ backgroundColor: "red" }}>
              <Title>Dashboard</Title>
            </Body>
          </Header>

          <Content style={{ padding: 20 }}>
            <Card style={{ padding: 10 }}>
              <CardItem
                header
                button
                onPress={() => alert("This is Card Header")}
                style={{backgroundColor: '#0EB159', borderRadius: 3, padding: 5 }}
              >
                <Left style={{ flex: 4 }}>
                  <Body  style={{padding: 0 }}>
                    <Text note numberOfLines={1} style={{ fontSize: 12, color: '#f9f9f9' }}>
                     Flair Tower, South
                    </Text>
                    <Text style={{color: '#fff'}}>MANDALUYONG</Text>
                  </Body>
                </Left>
                <Body style={{ flex: 3 }}>
                  <Text note numberOfLines={1} style={{ fontSize: 12 , color: '#f9f9f9'}}>
                    RM: 9017
                  </Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="ios-arrow-down" style={{ color: '#f9f9f9'}}/>
                </Right>
              </CardItem>
              <CardItem>
                <Body
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    PAYMENT DUE
                  </Text>
                  <Text style={{ fontSize: 32 }}>P16,756.00</Text>
                  <Text note>For December 20, 2018</Text>
                </Body>
              </CardItem>
              <CardItem
                footer
                button
                onPress={() => alert("This is Card Footer")}
              >
                <Text>paynow</Text>
              </CardItem>
            </Card>

            <Card>
              <CardItem button>
                <Icon active name="logo-googleplus" />
                <Text>Google Plus</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>

            <Card>
              <CardItem button>
                <Icon active name="logo-googleplus" />
                <Text>Google Plus</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
            <Button onPress={() => this.props.navigation.navigate("Community")}>
              <Text>Community</Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate("Service")}>
              <Text>Service</Text>
            </Button>

            <Button
              onPress={() => this.props.navigation.navigate("BillsPayment")}
            >
              <Text>Bills Payment</Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate("Inquiries")}>
              <Text>Inquiries</Text>
            </Button>
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
