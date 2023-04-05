import React, {useEffect, useState} from "react";
import {View, Text} from "native-base";
import {TouchableOpacity} from "react-native";
import Record from "../../icons/Record";
import Voice from "@react-native-community/voice";

type Props = {
  speechStart: () => void;
  speechEnd: (result: any[]) => void;
};

const SpeechToText = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const speechStartHandler = e => {
    console.log("speechStart successful", e);
  };

  const speechEndHandler = e => {
    setLoading(false);
    console.log("stop handler", e);
  };

  const speechResultsHandler = e => {
    const text = e.value[0];
    setResult(text);
  };

  const startRecording = async () => {
    setLoading(true);
    try {
      await Voice.start("en-Us");
    } catch (error) {
      console.log("error", error);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const clear = () => {
    setResult("");
  };

  useEffect(() => {
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      {result ? (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text>{result}</Text>
          <TouchableOpacity onPress={clear}>
            <Text>Clear</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text>
            Press and hold the button to start recording. Release to stop
          </Text>
        </>
      )}

      <TouchableOpacity
        onPressIn={startRecording}
        onPressOut={stopRecording}
        style={{
          backgroundColor: loading ? "gray" : "lightgray",
          borderRadius: 100,
        }}>
        <Record size={180} />
      </TouchableOpacity>
    </View>
  );
};

export default SpeechToText;
