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
  CheckBox,
  Grid,
  Col,
  Radio
} from "native-base";

const datas = [
  {
    id: 1,
    label: "ASSOCIATION DUES",
    amount: "P 3,525.00",
    checked: true
  },
  {
    id: 2,
    label: "UTILITIES",
    amount: "P 500.00",
    checked: true
  },
  {
    id: 3,
    label: "PARKING FEE",
    amount: "P 2,000.00",
    checked: false
  }
];

const paymentData = [
  {
    id: 1,
    label: "GCASH",
    text: "You will receive 5% rebate on your next transaction and a chance to win an iPad until promo last.",
    checked: true
  },
  {
    id: 2,
    label: "Credit Card", 
    checked: false
  },
  {
    id: 3,
    label: "Paypal", 
    checked: false
  }
]

class BillsPaymentScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <MainWrapper>
        <Container style={styles.container} >
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
              <Title style={{alignSelf: 'center', fontWeight: 'bold' }}>BILLS PAYMENT</Title>
            </Body>
               <Right style={{flex: 1}}/>
          </Header>

          <Content>
            <Grid>
              <Col>
                <Body style={{ paddingTop: 30, paddingBottom: 30 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    PAYMENT DUE
                  </Text>
                  <Text style={{ fontSize: 32 }}>P16,756.00</Text>
                  <Text note>For December 20, 2018</Text>
                </Body>
              </Col>
            </Grid>
            <List>
              {datas.map((data, i) => (
                <ListItem
                  key={data.id}
                  style={{
                    borderTopWidth: i === 0 ? 0.5 : 0,
                    marginLeft: 0,
                    paddingLeft: 0,
                    borderColor: "#a9a9a9",
            
                  }}
                >
                  <Left style={{paddingLeft: 15}}>
                    <Body>
                      <Text note numberOfLines={1} style={{ fontSize: 12 }}>
                        {data.label}
                      </Text>
                      <Text>{data.amount}</Text>
                    </Body>
                  </Left>
                  <Right style={{paddingRight: 15}}>
                    <Body style={{ flex: 1, flexDirection: "row" }}>
                      <CheckBox
                        checked={data.checked}
                        style={{ marginRight: 20 }}
                      />
                      <Text>Pay now</Text>
                    </Body>
                  </Right>
                </ListItem>
              ))}
            </List>
            <Grid style={{ backgroundColor: "#34BEEF" }}>
              <Col>
                <Body style={{ paddingTop: 30, paddingBottom: 30 }}>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}
                  >
                    TOTAL AMOUNT TO PAY
                  </Text>
                  <Text style={{ fontSize: 32, color: "#fff" }}>
                    P20,777.00
                  </Text>
                </Body>
              </Col>
            </Grid>
              <List>
            {
              paymentData.map(payment => (
              <ListItem  key={payment.id} style={{alignItems: 'flex-start', borderTopWidth: 0, borderBottomWidth: 0}}>
                <Radio
                
                    selectedColor={"#34BEEF"}
                    selected={payment.checked}
                  />
                  <Body>
                  <Text style={{ fontWeight: "bold"}}>
                    {payment.label}
                  </Text>
                  {
                    payment.text && <Text>
                      {payment.text}
                    </Text>
                  } 
                </Body>
              </ListItem>
              ))
            }
          </List>
            
         
           
           <Button block style={{marginLeft: 20, marginRight: 20, marginBottom: 20, paddingTop: 30, paddingBottom: 30}}>
            <Text style={{fontWeight: 'bold'}}>PAY NOW</Text>
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

export default BillsPaymentScreen;
