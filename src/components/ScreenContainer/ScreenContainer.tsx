import {Box, ScrollView, useColorMode, View} from "native-base";
import {ReactNode} from "react";
import React, {SafeAreaView, StatusBar} from "react-native";

interface Props {
  children: ReactNode | ReactNode[];
  scrollable?: boolean;
}
const ScreenContainer = ({children, scrollable = false}: Props) => {
  const {colorMode} = useColorMode();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colorMode === "light" ? "gray.200" : "#272727",
      }}>
      <StatusBar
        barStyle={colorMode === "light" ? "dark-content" : "light-content"}
      />

      {scrollable ? (
        <ScrollView
          style={{
            marginBottom: 10,
            flex: 1,
          }}>
          {children && children}
        </ScrollView>
      ) : (
        <View style={{flex: 1}}>{children && children}</View>
      )}
    </SafeAreaView>
  );
};

export default ScreenContainer;
