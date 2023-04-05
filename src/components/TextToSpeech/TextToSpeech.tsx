import React, {useEffect, useState} from "react";
import {View, Button, TextArea} from "native-base";
import Tts from "react-native-tts";
import {Platform} from "react-native";

const TextToSpeech = () => {
  const [text, setText] = useState("");

  const handleSpeak = () => {
    if (Platform.OS === "android") {
      Tts.speak(text, {
        iosVoiceId: "com.apple.ttsbundle.Samantha-compact",
        rate: 0.5,
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 100,
          KEY_PARAM_STREAM: "STREAM_MUSIC",
        },
      });
    } else {
    }
  };

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <TextArea value={text} onChangeText={setText} autoCompleteType="on" />
      <Button onPress={handleSpeak}>Speak</Button>
    </View>
  );
};

export default TextToSpeech;
