import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { Audio } from 'expo-av';

interface mockingChat {
  sender: "string";
}

const ChatRoomScreen = () => {
    const mic = require("../../../assets/mic.png");
    const [recording, setRecording] = useState<any>();
    const [blobURL, setBlobUrl] = useState<string | null>(null);

    async function startListening() {
      try {
        console.log('Requesting permissions..');
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        console.log('Starting recording..');
        const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        setRecording(recording);
        console.log('Recording started');
      } catch (err) {
        console.error('Failed to start recording', err);
      }
    }

    async function stopListening() {
      console.log('Stopping recording..');
      setRecording(undefined);
      await recording.stopAndUnloadAsync();
      await Audio.setAudioModeAsync(
        {
          allowsRecordingIOS: false,
        }
      );
      const uri = recording.getURI();
      console.log('Recording stopped and stored at', uri);
      setBlobUrl(uri);      
    }
    
    return (
        <View style={styles.container}>
            <Pressable onPressIn={startListening} onPressOut={stopListening}>
                <View style={styles.audioButton}>
                <Image
                    style={styles.audioButton}
                    source={mic}
                    resizeMode="contain"
                ></Image>
                </View>
            </Pressable>
        </View>
    );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#DBE9EE",
  },
  audioButton: {
    width: 100, // Width of the round view
    height: 100, // Height of the round view (should be equal to width)
    borderRadius: 50, // Half of the width and height to make it round
    backgroundColor: "#fff",
  },
  audioImage: {
    width: 100,
    height: 100,
  },
});
