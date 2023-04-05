import {Text, View} from "native-base";
import React from "react-native";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import SpeechToText from "../../components/SpeechToText/SpeechToText";
import TextToSpeech from "../../components/TextToSpeech/TextToSpeech";

interface Props {}
const HomeScreen = ({}: Props) => {
  return (
    <ScreenContainer>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <TextToSpeech />
        <Text>-----------</Text>
        <SpeechToText
          speechStart={() => console.log("start gravacao")}
          speechEnd={values => console.log(values)}
        />
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
