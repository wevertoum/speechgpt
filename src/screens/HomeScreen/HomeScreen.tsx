import {Text} from "native-base";
import React from "react-native";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";

interface Props {}
const HomeScreen = ({}: Props) => {
  return (
    <ScreenContainer>
      <>
        <Text>Home Screen</Text>
      </>
    </ScreenContainer>
  );
};

export default HomeScreen;
