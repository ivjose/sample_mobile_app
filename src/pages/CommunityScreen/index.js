import React, { Component } from "react";
import { StyleSheet, Image, Dimensions, ImageBackground } from "react-native"; 
import LinearGradient from 'react-native-linear-gradient';
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

const datas = ["INQUERIES", "COMPLAINTS", "REQUEST", "WARRANTY"];
const { height, width } = Dimensions.get("window");
class CommunityScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <MainWrapper>
        <Container style={styles.container}>
        
            <ImageBackground
              source={require("../../assets/img/community-img.png")}
              style={{
                flex: 1, 
                  height: 'auto',
              width: '100%'
              }}
              resizeMode="cover"
            >
             {/* <View style={styles.overlay} /> */}
             {/* <LinearGradient  colors={['rgba(33, 189, 117,0.8)', 'rgba(33, 189, 117,0.2)']} style={styles.overlay} /> */}
              <Header noShadow transparent>
                <Left style={{ flex: 1 }}>
                  <Button
                    transparent
                    onPress={() => this.props.navigation.goBack()}
                  >
                    <Icon name="ios-arrow-back"  />
                  </Button>
                </Left>
                <Body style={{ flex: 5 }}>
                  <Title style={{ alignSelf: "center", fontWeight: 'bold' }}>
                    COMMUNITY
                  </Title>
                </Body>
                <Right style={{ flex: 1 }} />
              </Header>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding:20
                }}
              >
               <Text style={{fontSize: 48, lineHeight: 48, color: '#fff'}}>
                  Trick
                </Text>
                 <Text style={{fontSize: 48, lineHeight: 48, color: '#fff'}}>
                  or Treat
                </Text>
                <Text style={{fontSize: 12, color: '#fff'}}>
                  October 31, 2018 - FlAIR TOWER
                </Text>
              </View>
            </ImageBackground>
 

          <Content style={{ padding: 20}} >
            <Text style={{ marginBottom: 20}}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat Et harum quidem rerum facilis est et expedita
              distinctio. Nam libero tempore, cum soluta nobis est eligendi
              optio cumque nihil impedit quo minus id quod maxime placeat facere
              possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae. Itaque earum rerum hic tenetur a
              sapiente delectus, ut aut reiciendis voluptatibus maiores alias
              consequatur aut perferendis doloribus asperiores repellat At vero
              eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores et
              quas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus, omnis voluptas assumenda est, omnis dolor
              repellendus. Temporibus autem quibusdam et aut officiis debitis
              aut rerum necessitatibus saepe eveniet ut et voluptates
              repudiandae sint et molestiae non recusandae. Itaque earum rerum
              hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
              maiores alias consequatur aut perferendis doloribus asperiores
              repellat
            </Text>
            <Text style={{ marginBottom: 20}}>
               Et harum quidem rerum facilis est et expedita distinctio.
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut
              aut reiciendis voluptatibus maiores alias consequatur aut
              perferendis doloribus asperiores repellat
            </Text>
          </Content>
          <Button
            block
        
            style={{ marginLeft: 20, marginRight: 20, marginBottom: 20,  marginTop: 20 , paddingTop: 30, paddingBottom: 30 }}
            
           onPress={() => this.props.navigation.navigate('Dashboard')}
          >
            <Text         style={{fontWeight: 'bold'}}>JOIN NOW</Text>
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
    ...StyleSheet.absoluteFillObject,
  }
});

export default CommunityScreen;
