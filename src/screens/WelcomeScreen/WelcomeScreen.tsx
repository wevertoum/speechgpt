import {useNavigation} from "@react-navigation/native";
import {Button, View} from "native-base";
import React from "react-native";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";

interface Props {}
const WelcomeScreen = ({}: Props) => {
  const navigation = useNavigation();
  return (
    <ScreenContainer>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Button
          onPress={() => {
            navigation.navigate("Home" as never);
          }}>
          go to home
        </Button>
      </View>
    </ScreenContainer>
  );
};

export default WelcomeScreen;
