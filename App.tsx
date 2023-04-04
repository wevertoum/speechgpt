import React from "react";

import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {extendTheme, NativeBaseProvider, Text, useColorMode} from "native-base";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import ScreenTitle from "./src/components/ScreenTitle/ScreenTitle";

const Stack = createNativeStackNavigator();

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const customTheme = extendTheme({config});

function App(): JSX.Element {
  const {colorMode} = useColorMode();
  return (
    <NativeBaseProvider theme={customTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#202020",
            },
            gestureEnabled: false,
          }}>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
