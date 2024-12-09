import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import oldNotes from "./oldNotes";
import notifications from './notifications'
import { SafeAreaView } from "react-native-safe-area-context";

const width=Dimensions.get('screen').width


const Top = createMaterialTopTabNavigator();

export default function TopLayout() {
  return (
    <Top.Navigator
    keyboardDismissMode="auto"
    tabBarPosition="top"
    screenOptions={{
      swipeEnabled:true,
      animationEnabled:true,
      tabBarIndicatorStyle:{
        backgroundColor:'#5D3FD3',
        height:5
      },
      tabBarStyle:{
        backgroundColor:'#fafafa',
        width:width,
        height:100,
        display:'flex',
        justifyContent:'flex-end'
      },
    }}>
      <Top.Screen name="New" component={notifications} />
      <Top.Screen name="Old" component={oldNotes} />
    </Top.Navigator>
  );
}

const styles = StyleSheet.create({});
