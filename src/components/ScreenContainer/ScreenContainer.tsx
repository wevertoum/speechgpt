import {Box, ScrollView, useColorMode} from "native-base";
import {ReactNode} from "react";
import React, {SafeAreaView, StatusBar} from "react-native";

interface Props {
  children: ReactNode | ReactNode[];
  scrollable?: boolean;
}
const ScreenContainer = ({children, scrollable = true}: Props) => {
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

      <Box
        flex={"1"}
        _dark={{backgroundColor: "#202020"}}
        _light={{bg: "blueGray.50"}}>
        {scrollable ? (
          <ScrollView
            style={{
              marginBottom: 10,
            }}>
            {children && children}
          </ScrollView>
        ) : (
          <Box style={{flex: 1}}>{children && children}</Box>
        )}
      </Box>
    </SafeAreaView>
  );
};

export default ScreenContainer;
