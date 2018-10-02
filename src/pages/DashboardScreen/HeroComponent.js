import React from "react";
import { ScrollView, ImageBackground, StyleSheet, Dimensions } from "react-native";
import { View, Text } from "native-base";

const { width, height } = Dimensions.get('window')

export default function (){
  return(
    <View style={{ height: 200, backgroundColor: '#34BEEF' }}>
      <View style={{ height: 150}}>
        <ScrollView horizontal indicatorStyle="default">
          <ImageBackground
            imageStyle={{ borderRadius: 5 }}
            style={styles.imgStyle}
            source={require("./img/1.png")}
            resizeMode='cover'>
            <View style={{ padding: 10, height: '100%' }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold', flex: 1 }}>COMMUNITY</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ color: 'white' }}>Trick or Treat</Text>
                <Text style={{ color: 'white', fontSize: 8 }}>OCTOBER 31, 2018 • FLAIR TOWER</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 8, alignSelf: 'flex-end', fontWeight: 'bold' }}>LEARN MORE</Text>
              </View>
            </View>
          </ImageBackground>
    
          <ImageBackground
            imageStyle={{ borderRadius: 5 }}
            style={styles.imgStyle}
            source={require("./img/2.png")}
            resizeMode='cover'>
            <View style={{ padding: 10, height: '100%' }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold', flex: 1 }}>BILLS PAYMENT</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ color: 'white' }}>Check out our</Text>
                <Text style={{ color: 'white' }}>Business Partners</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 8, alignSelf: 'flex-end', fontWeight: 'bold' }}>LEARN MORE</Text>
              </View>
            </View>
          </ImageBackground>
        
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imgStyle: {
    width: width-50,
    height: "auto",
    marginLeft: 20,
    borderRadius: 5
  }
});