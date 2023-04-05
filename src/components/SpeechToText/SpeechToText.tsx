import React, {useEffect, useState} from "react";
import {View, Text} from "native-base";
import {TouchableOpacity} from "react-native";
import Record from "../../icons/Record";

type Props = {
  speechStart: () => void;
  speechEnd: (result: any[]) => void;
};

const SpeechToText = (props: Props) => {
  const [isRecording, setIsRecording] = useState(false);
  const startRecognizing = () => {
    setIsRecording(true);
  };
  const stopRecognizing = () => {
    setIsRecording(false);
  };
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <TouchableOpacity
        onPressIn={startRecognizing}
        onPressOut={stopRecognizing}
        style={{
          backgroundColor: isRecording ? "gray" : "lightgray",
          borderRadius: 100,
        }}>
        <Record size={180} />
      </TouchableOpacity>
    </View>
  );
};

export default SpeechToText;
