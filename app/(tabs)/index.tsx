import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const index = () => {
  return (
    <ImageBackground
      style={styles.indexTab}
      source={require("@/assets/images/sky.png")}
    >
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView></SafeAreaView>
      <Carousel
        width={width}
        loop
        height={300}
        snapEnabled
        scrollAnimationDuration={3000}
        data={[...new Array(6).keys()]}
        renderItem={({ index }) => {
          return (
            <ScrollView horizontal>
              {" "}
              <View
                style={{ height: 200, width: 100, backgroundColor: "white" }}
              >
                <Text>Data</Text>
              </View>
              <View style={{width:10}}></View>
              <View
                style={{ height: 200, width: 100, backgroundColor: "white" }}
              >
                <Text>Data</Text>
              </View>
              <View style={{width:10}}></View>
              <View
                style={{ height: 200, width: 100, backgroundColor: "white" }}
              >
                <Text>Data</Text>
              </View> 
              <View style={{width:10}}></View>
              <View
                style={{ height: 200, width: 100, backgroundColor: "white" }}
              >
                <Text>Data</Text>
              </View>
              <View style={{width:10}}></View>
              <View
                style={{ height: 200, width: 100, backgroundColor: "white" }}
              >
                <Text>Data</Text>
              </View>
            </ScrollView>
          );
        }}
      />
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  indexTab: {
    height: height,
  },
});
