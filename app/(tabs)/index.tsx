import {
  Dimensions,
  FlatList,
  Image,
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

const Data = [
  {
    id: 1,
    num: "Number 1",
  },
  {
    id: 2,
    num: "Number 2",
  },
  {
    id: 3,
    num: "Number 3",
  },
];

const index = () => {
  return (
    <ImageBackground
      style={styles.indexTab}
      source={require("@/assets/images/sky.png")}
    >
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView></SafeAreaView>
      <View style={{display:'flex', alignItems:'center', top:80
      }}>
        <Image
          source={require("@/assets/images/weather2.gif")}
          style={{ height: 200, width: 350}}
        />
      </View>

      <Carousel
        loop
        autoPlay
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: 300,
        }}
        width={width}
        height={height - 700}
        data={[...new Array(1)]}
        scrollAnimationDuration={5000}
        renderItem={({ index }) => (
          <FlatList
            data={Data}
            horizontal
            key={index}
            renderItem={({ item }) => (
              <View
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  marginLeft: 6,
                }}
              >
                <View
                  style={{
                    height: 150,
                    width: 200,
                    backgroundColor: "rgba(250, 250, 250, 0.7)",
                    borderRadius: 20,
                    alignItems: "center",
                  }}
                  key={item.id}
                >
                  <Text>{item.num}</Text>
                </View>
              </View>
            )}
          />
        )}
      ></Carousel>
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  indexTab: {
    height: height,
  },
});
