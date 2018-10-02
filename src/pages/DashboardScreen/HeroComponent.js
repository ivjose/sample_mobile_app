import React from "react";
import { ScrollView, Image, StyleSheet, Dimensions } from "react-native";
import { View } from "native-base";

const { width, height } = Dimensions.get('window')

export default function (){
  return(
    <View style={{ height: 200, backgroundColor: '#34BEEF' }}>
      <View style={{ height: 150}}>
        <ScrollView horizontal indicatorStyle="default">
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.imgStyle}
            source={require("./img/1.png")}
            resizeMode='cover'
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.imgStyle}
            source={require("./img/2.png")}
            resizeMode='cover'
          />
        </View>
        
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