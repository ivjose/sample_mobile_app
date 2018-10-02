import React, { Component } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
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
const { height, width } = Dimensions.get("window");
class VideoScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <MainWrapper>
        <Container style={styles.container}>
          <Image
            source={require("../../assets/img/video-img.png")}
            style={{ height: "auto", width: "100%", flex: 1 }}
          />

          <Content style={{ padding: 20, paddingBottom: 50 }}>
            <Text>WATCH THIS</Text>
            <Text
              style={{
                color: "#B4C5E7",
                fontSize: 24,
                fontWeight: "bold",
                marginBottom: 10
              }}
            >
              WELCOME TO DMCI
            </Text>
            <Text style={{ marginBottom: 50 }}>
              Est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus.
            </Text>
            <Button
              block
              onPress={() => this.props.navigation.navigate("Login")}
              style={{ paddingTop: 30, paddingBottom: 30 }}
            >
              <Text style={{fontWeight: 'bold'}}>WATCH NOW</Text>
            </Button>
            <Button
              full
              transparent
              dark
              onPress={() => this.props.navigation.navigate("Login")}
              style={{ paddingTop: 30, paddingBottom: 30, }}
            >
              
              <Text  style={{fontWeight: 'bold'}}>SKIP THIS, I'LL WATCH LATER</Text>
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

export default VideoScreen;
