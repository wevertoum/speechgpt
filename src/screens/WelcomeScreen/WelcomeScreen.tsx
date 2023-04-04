import {useNavigation} from "@react-navigation/native";
import {Button, Text} from "native-base";
import React from "react-native";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";

interface Props {}
const WelcomeScreen = ({}: Props) => {
  const navigation = useNavigation();
  return (
    <ScreenContainer>
      <>
        <Text>Welcome Screen</Text>
        <Button
          onPress={() => {
            navigation.navigate("Home" as never);
          }}>
          go to home
        </Button>
      </>
    </ScreenContainer>
  );
};

export default WelcomeScreen;
