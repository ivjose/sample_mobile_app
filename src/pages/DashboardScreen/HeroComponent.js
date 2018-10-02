import React from "react";
import { ScrollView, ImageBackground, StyleSheet, Dimensions,  TouchableOpacity} from "react-native";
import { View, Text } from "native-base";

const { width, height } = Dimensions.get('window')

export default function ({path}){
  return(
    <View style={{ height: 250, backgroundColor: '#34BEEF', paddingTop: 10 }}>
      <View style={{ height: 200}}>
        <ScrollView horizontal indicatorStyle="default">
          <ImageBackground
        
            imageStyle={{ borderRadius: 5 }}
            style={styles.imgStyle}
            source={require("./img/1.png")}
            resizeMode='cover'>
            <TouchableOpacity onPress={path}>

            
            <View style={{ padding: 10, height: '100%' }}   onPress={() => alert("test")}>
              <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', flex: 1 }}>COMMUNITY</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ color: 'white', fontSize: 21 }}>Trick or Treat</Text>
                <Text style={{ color: 'white', fontSize: 12 }}>OCTOBER 31, 2018 • FLAIR TOWER</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 12, alignSelf: 'flex-end', fontWeight: 'bold' }} >LEARN MORE</Text>
              </View>
            </View>
            </TouchableOpacity>
          </ImageBackground>
    
          <ImageBackground
            imageStyle={{ borderRadius: 5 }}
            style={styles.imgStyle}
            source={require("./img/2.png")}
            resizeMode='cover'>
            <TouchableOpacity onPress={path}>

            <View style={{ padding: 10, height: '100%' }}>
              <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', flex: 1 }}>BILLS PAYMENT</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ color: 'white' , fontSize: 21 }}>Check out our</Text>
                <Text style={{ color: 'white' , fontSize: 21 }}>Business Partners</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 12, alignSelf: 'flex-end', fontWeight: 'bold' }}>LEARN MORE</Text>
              </View>
            </View>
            </TouchableOpacity>
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