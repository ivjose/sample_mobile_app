import React from "react";
import MainWrapper from "../../components/MainWrapper";
import { StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import {
  Container,
  View,
  Header,
  Badge,
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
import HeroComponent from "./HeroComponent";

const { width, height } = Dimensions.get("window");

export default class DashboardScreen extends React.Component {
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
                <Icon name="md-menu" style={{fontSize: 28}} />
              </Button>
            </Left>

            <Body
              style={{
                flex: 5,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <Image
                style={{ height: 40, width: 40, borderRadius: 40, borderWidth: 1, borderColor: '#fff' }}
                source={require("../../assets/img/user-profile-img.png")}
              />
              <Text style={{ color: "#fff", marginLeft: 10 }}>John Doe</Text>
            </Body>

            <Right>
              <View style={{ position: "relative" }}>
                <Badge
                  style={{
                    width: 21,
                    height: 20,
                    position: "absolute",
                    right: 30,
                    marginTop: -5,
                    zIndex: 2,
                    backgroundColor: "#FF7800"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      lineHeight: 18,
                      position: "relative",
                      zIndex: 4
                    }}
                  >
                    5
                  </Text>
                </Badge>
                <Icon
                  name="md-mail"
                  style={{ color: "#fff", marginRight: 10 }}
                />
              </View>
            </Right>
          </Header>

          <Content>
            <HeroComponent
              path={() => this.props.navigation.navigate("Community")}
            />

            <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: -40 }}>
              <Card style={{ padding: 10 }}>
                <CardItem
                  header
                  button
                 
                  style={{
                    backgroundColor: "#0EB159",
                    borderRadius: 3,
                    padding: 5
                  }}
                >
                  <Left style={{ flex: 4 }}>
                    <Body style={{ padding: 0 }}>
                      <Text
                        note
                        numberOfLines={1}
                        style={{ fontSize: 12, color: "#f9f9f9" }}
                      >
                        Flair Tower, South
                      </Text>
                      <Text style={{ color: "#fff" }}>MANDALUYONG</Text>
                    </Body>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Text
                      note
                      numberOfLines={1}
                      style={{ fontSize: 12, color: "#f9f9f9" }}
                    >
                      RM: 9017
                    </Text>
                  </Body>
                  <Right style={{ flex: 1 }}>
                    <Icon name="ios-arrow-down" style={{ color: "#f9f9f9" }} />
                  </Right>
                </CardItem>
                <CardItem>
                  <Body
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: 25,
                      paddingBottom: 25
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
                  onPress={() => this.props.navigation.navigate("BillsPayment")}
                  style={{
                    backgroundColor: "#34BEEF",
                    borderRadius: 3,
                    position: "relative"
                  }}
                >
                  <Image
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      width: 100
                    }}
                    source={require("../../assets/img/btn-icon.png")}
                  />
                  <Text
                    style={{
                      color: "#fff",
                      padding: 15,
                      textAlign: "center",
                      width: "100%"
                    }}
                  >
                    PAYNOW
                  </Text>
                </CardItem>
              </Card>

              <Card>
                <CardItem
                  button
                  onPress={() => this.props.navigation.navigate("BillsPayment")}
                >
                  <Image
                    style={{ width: 50, marginRight: 10 }}
                    source={require("../../assets/img/bills-payment-icon.png")}
                  />
                  <Body style={{ flex: 6 }}>
                    <Text>Bills Payment</Text>
                    <Text note>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui{" "}
                    </Text>
                  </Body>
                  <Right style={{ flex: 1, width: 20 }}>
                    <Icon
                      name="ios-arrow-forward"
                      style={{ color: "#244958", fontSize: 28 }}
                    />
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem
                  button
                  onPress={() => this.props.navigation.navigate("Service")}
                >
                  <Image
                    style={{ width: 50, marginRight: 10 }}
                    source={require("../../assets/img/service-request-icon.png")}
                  />
                  <Body style={{ flex: 6 }}>
                    <Text>Service Request</Text>
                    <Text note>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui
                    </Text>
                  </Body>
                  <Right style={{ flex: 1, width: 20 }}>
                    <Icon
                      name="ios-arrow-forward"
                      style={{ color: "#244958", fontSize: 28 }}
                    />
                  </Right>
                </CardItem>
              </Card>

              <Card style={{ marginBottom: 40 }}>
                <CardItem button>
                  <Image
                    style={{ width: 50, marginRight: 10 }}
                    source={require("../../assets/img/sample-form-icon.png")}
                  />
                  <Body style={{ flex: 6 }}>
                    <Text>Sample Forms</Text>
                    <Text note>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui{" "}
                    </Text>
                  </Body>
                  <Right style={{ flex: 1, width: 20 }}>
                    <Icon
                      name="ios-arrow-forward"
                      style={{ color: "#244958", fontSize: 28 }}
                    />
                  </Right>
                </CardItem>
              </Card>

              {/* <Button onPress={() => this.props.navigation.navigate("Community")}>
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
              </Button> */}
            </View>
          </Content>
        </Container>
      </MainWrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  imgStyle: {
    width: width - 50,
    height: "auto",
    marginLeft: 20,
    borderRadius: 5
  }
});
