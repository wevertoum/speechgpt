import {Text} from "native-base";
import React from "react-native";

interface Props {
  title: string;
}
const ScreenTitle = ({title}: Props) => {
  return (
    <Text
      fontWeight="bold"
      style={{
        color: "#fff",
      }}>
      {title}
    </Text>
  );
};

export default ScreenTitle;
