import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React = require("react");
import { Image, View, TouchableOpacity } from "react-native";

import GiveScreen from "../screens/giveScreen";
import TakeScreen from "../screens/takeScreen";
import Home from "../components/Home";
import HistoryScreen from "../screens/HistoryScreen";

const Tabs = ({ navigation }: any) => {
  const BottomTabNavigator = createBottomTabNavigator();
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        options={{
          tabBarHideOnKeyboard: true,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("PROFILE")}>
              <Image
                resizeMode="contain"
                resizeMethod="resize"
                style={{ width: 35, height: 35 }}
                source={require("../../assets/profileIcon.png")}
              />
            </TouchableOpacity>
          ),
          tabBarLabelStyle: {
            width: 45,
            bottom: "10%",
          },
          // headerShown: false,
          tabBarActiveTintColor: "teal",
          tabBarIcon: ({ focused }: any) => (
            <View>
              <Image
                resizeMode="contain"
                source={require("../../assets/homeIcon.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "teal" : "black",
                }}
              />
            </View>
          ),
        }}
        name="HOME"
        component={Home}
      />
      <BottomTabNavigator.Screen
        options={{
          tabBarActiveTintColor: "teal",

          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("PROFILE")}>
              <Image
                source={require("../../assets/profileIcon.png")}
                resizeMode="contain"
                resizeMethod="resize"
                style={{ width: 35, height: 35 }}
              />
            </TouchableOpacity>
          ),
          tabBarLabelStyle: {
            width: 45,
            bottom: "10%",
          },
          // headerShown: false,
          tabBarIcon: ({ focused }: any) => (
            <View>
              <Image
                resizeMode="contain"
                source={require("../../assets/giveIcon.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "teal" : "black",
                }}
              />
            </View>
          ),
        }}
        name="GIVE"
        component={GiveScreen}
      />
      <BottomTabNavigator.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("PROFILE")}>
              <Image
                resizeMode="contain"
                resizeMethod="resize"
                style={{ width: 35, height: 35 }}
                source={require("../../assets/profileIcon.png")}
              />
            </TouchableOpacity>
          ),
          tabBarLabelStyle: {
            width: 45,
            bottom: "10%",
          },
          // headerShown: false,
          tabBarIcon: ({ focused }: any) => (
            <View>
              <Image
                source={require("../../assets/takeIcon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "teal" : "black",
                }}
              />
            </View>
          ),
          tabBarActiveTintColor: "teal",
        }}
        name="TAKE"
        component={TakeScreen}
      />
      <BottomTabNavigator.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("PROFILE")}>
              <Image
                resizeMode="contain"
                resizeMethod="resize"
                style={{ width: 35, height: 35 }}
                source={require("../../assets/profileIcon.png")}
              />
            </TouchableOpacity>
          ),
          tabBarLabelStyle: {
            width: 45,
            bottom: "10%",
          },
          // headerShown: false,
          tabBarIcon: ({ focused }: any) => (
            <View>
              <Image
                source={require("../../assets/historyIcon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "teal" : "black",
                }}
              />
            </View>
          ),
          tabBarActiveTintColor: "teal",
        }}
        name="HISTORY"
        component={HistoryScreen}
      />
    </BottomTabNavigator.Navigator>
  );
};
export default Tabs;
