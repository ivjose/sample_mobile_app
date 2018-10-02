import React, { Component, Fragment } from 'react'
import {
  View,
  Image,
  Dimensions,
  Text
} from 'react-native'
import Swiper from 'react-native-swiper';
import MainWrapper from "../../components/MainWrapper";
import { Button, Container, Content } from "native-base";


const { width, height } = Dimensions.get('window')

const styles = {
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height,
  }
}

export default class extends Component {
  static navigationOptions = {
    header: null
  };

  state={
    index: 0,
    images: [
      {
        id: "1",
        url: require("./img/1.png"),
        title: "USE GCASH AS PAYMENT",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        id: "1",
        url: require("./img/2.png"),
        title: "BILLS MONITORING",
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is not simply random text. Lorem Ipsum is not simply random text not simply random text."
      },
      {
        id: "1",
        url: require("./img/3.png"),
        title: "SERVICE REQUEST",
        content: "There are many variations of passages of Lorem Ipsum  LoremIpsuma, but the majority have suffered alteration in some form, by injected humour."
      },
      
    ]
  }

  handleNext = () => {
    let { index } = this.state;
    if(index !== 2){
      let prevData = this.state.images;
      let first = this.state.images[0];
      console.log(first)
      prevData.shift();
      prevData.push(first);
      this.setState({ index: index+1 })
    }else {
      this.props.navigation.navigate('Terms')
    }
  }

  render () {
    
    return (
      <MainWrapper>
         <Container style={styles.container}> 
        <Swiper
          index={this.state.index}
          style={styles.wrapper}
          scrollEnabled={false}
          dot={
          <View style={{backgroundColor: 'rgba(255,255,255,.7)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />
          }
          activeDot={
            <View style={{
              borderWidth: 1.5,
              borderColor: 'rgba(255,255,255,.7)',
              width: 18, height: 18,
              borderRadius: 9,
              marginLeft: 7,
              marginRight: 7}}
              />
          }
          paginationStyle={{
            bottom: 20
          }}
          loop={false}
          showsButtons={false}
          prevButton={<Text></Text>}
          >
          
          {
            this.state.images.map( image => <View key={ image.id } style={styles.slide}>
              <Image
                style={styles.image}
                source={image.url}
                resizeMode='cover'
              />
              <View style={{
                position: 'absolute',
                alignItems: 'center',
                width,
                height: 170,
                paddingLeft: 15,
                paddingRight: 15,
                bottom: 0 }}>
                  <View style={{ width: 150, alignSelf: 'center',}}>
                    <Text style={{
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: "center",
                      fontSize: 16 }}>
                      {image.title}
                    </Text>
                  </View>

                <Text style={{ color: 'white', fontSize: 12, textAlign: 'center', marginTop: 15 }}>
                  {image.content}
                </Text>
              </View>

            </View>)
          }

        </Swiper>
        <Button full large onPress={this.handleNext}>
          <Text style={{ color: "white", fontWeight: 'bold' }}>Next</Text>
        </Button>

      </Container>
      </MainWrapper>
    )
  }
}