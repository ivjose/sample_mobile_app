import React, { Component } from "react";
import { StyleSheet, Image, Dimensions, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
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
class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <MainWrapper>
        <Container style={styles.container}>
          

          <Content>
          <Image
            source={require("../../assets/img/login-bg.png")}
            style={{
              height: width,
              width: '100%'
            }}
         
          /> 
           <Form>
            <Item   last >
            
              <Input style={{height: 100,  fontSize: 18}} placeholder="Username"/>
              <Icon active name="person" style={{paddingRight: 30, fontSize: 32}} />
            </Item>
            <Item style={{borderBottomWidth: 0}}> 
              <Input style={{height: 100, fontSize: 18, borderBottomWidth: 0}} placeholder="Password"/>
              <Icon active name="md-unlock" style={{paddingRight: 30, fontSize: 32}} />
            </Item>
            </Form>
            <Form>
        
            
          </Form>
          </Content>
          <Button
            full
                   style={{ paddingTop: 40, paddingBottom: 40 }}

            onPress={() => this.props.navigation.navigate("Dashboard")}
          >
            <Text         style={{fontWeight: 'bold'}}>SIGN IN</Text>
          </Button>
        </Container>
      </MainWrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject
  }
});

export default LoginScreen;
