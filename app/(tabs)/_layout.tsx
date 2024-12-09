import { Tabs } from "expo-router";
import React from "react";

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from "@/hooks/useColorScheme";
import { Icon } from "react-native-elements";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#5D3FD3",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fafafa",
          height:80
        }
        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={"home-variant-outline"}
              type="material-community"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color}) => (
            <Icon
              name={"bell-outline"}
              type="material-community"
              color={color}
              size={28}
            />
          ),
        }}
      />
       <Tabs.Screen
        name="AddNote"
        options={{
          title: "Add",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={"plus"}
              type="material-community"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="hourly"
        options={{
          title: "Humidity",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={"weather-cloudy-clock"}
              type="material-community"
              color={color}
              size={28}
            />
          ),
        }}
      />
     
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={"cog-outline"}
              type="material-community"
              color={color}
              size={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}
