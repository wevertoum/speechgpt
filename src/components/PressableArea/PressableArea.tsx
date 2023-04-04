import {useColorMode} from "native-base";
import React, {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

interface Props {
  onPress: () => void;
  customkey?: number | string;
  children: JSX.Element | JSX.Element[];
  style?: React.ViewStyle;
}

const PressableArea = ({
  onPress,
  customkey = "",
  children,
  style = {},
}: Props) => {
  const {colorMode} = useColorMode();

  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback key={customkey} onPress={onPress} style={style}>
        {children}
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableHighlight
        key={customkey}
        onPress={onPress}
        activeOpacity={0.8}
        underlayColor={colorMode === "light" ? "#e7eaf3" : "#161515"}
        style={style}>
        {children}
      </TouchableHighlight>
    );
  }
};

export default PressableArea;
