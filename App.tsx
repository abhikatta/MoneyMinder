import React, { useEffect, useState } from "react";
import { View, Image, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { onAuthStateChanged } from "firebase/auth";

import LOGINMAIN from "./src/authentication/login";
import SIGNUPMAIN from "./src/authentication/signUp";
import { auth } from "./src/firebase/firebase";
import Tabs from "./src/navigation/Tabs";
import ProfileScreen from "./src/screens/ProfileScreen";

interface DarkTheme {
  backgroundColor: string;
  color: string;
}

const App = (): React.ReactElement => {
  const isDarkMode = useColorScheme() === "dark";
  const BottomTabNavigator = createBottomTabNavigator();
  const backgroundStyle: DarkTheme = {
    backgroundColor: isDarkMode ? "#22222d" : "#ddddaa",
    color: isDarkMode ? "#ddddaa" : "#22222d",
  };

  const Stack = createNativeStackNavigator();

  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserID(user);
        console.log(user);
      } else {
        setUserID(null);
      }
    });
    return unsubscribe;
  }, []);

  return userID ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          children={Tabs}
          name="TABS"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen component={ProfileScreen} name="PROFILE" />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <BottomTabNavigator.Navigator>
        <BottomTabNavigator.Screen
          options={{
            tabBarLabelStyle: {
              width: 45,
              bottom: "10%",
            },

            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("./assets/login.png")}
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
          name="LOGIN"
          children={LOGINMAIN}
        />
        <BottomTabNavigator.Screen
          options={{
            tabBarLabelStyle: {
              width: 45,
              bottom: "10%",
            },
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("./assets/signup.png")}
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
          name="SIGNUP"
          children={SIGNUPMAIN}
        />
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
