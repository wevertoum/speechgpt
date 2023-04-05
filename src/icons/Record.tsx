import React from "react";
import {Circle, Svg} from "react-native-svg";

function Record({size = 512}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <Circle cx="16" cy="16" r="14" fill="#eee" data-original="#eeeeee" />
      <Circle cx="16" cy="16" r="5" fill="#f44336" data-original="#f44336" />
    </Svg>
  );
}

export default Record;
