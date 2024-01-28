import { useState } from "react";
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, View, Text } from "react-native";
import { Audio } from 'expo-av';

const {height, width} = Dimensions.get('window');

type Message = {
    senderid: string,
    timestamp: string,
    ogaudiourl: string,
    transaudiourl: string,
    transcroption: string,
    translation: string,
}

type Messages = {
    doctor_name: string,
    channel_status: boolean,
    messages: Message[]
}

const mockingMessagesList: Message[] = [
    { senderid: '0', timestamp: '2021-01-01T00:00:00Z', ogaudiourl: 'url1', transaudiourl: 'url2', transcroption: 'transcription1', translation: 'translation1' },
    { senderid: '1', timestamp: '2021-01-02T00:00:00Z', ogaudiourl: 'url3', transaudiourl: 'url4', transcroption: 'transcription2', translation: 'translation2' },
    { senderid: '0', timestamp: '2021-01-03T00:00:00Z', ogaudiourl: 'url5', transaudiourl: 'url6', transcroption: 'transcription3', translation: 'translation3' },
    { senderid: '1', timestamp: '2021-01-04T00:00:00Z', ogaudiourl: 'url7', transaudiourl: 'url8', transcroption: 'transcription4', translation: 'translation4' },
    { senderid: '0', timestamp: '2021-01-05T00:00:00Z', ogaudiourl: 'url9', transaudiourl: 'url10', transcroption: 'transcription5', translation: 'translation5' },
    { senderid: '1', timestamp: '2021-01-06T00:00:00Z', ogaudiourl: 'url11', transaudiourl: 'url12', transcroption: 'transcription6', translation: 'translation6' },
    { senderid: '0', timestamp: '2021-01-07T00:00:00Z', ogaudiourl: 'url13', transaudiourl: 'url14', transcroption: 'transcription7', translation: 'translation7' }
];

const mockingMessages: Messages = {
    doctor_name: '1',
    channel_status: true,
    messages: mockingMessagesList
};

const currentUserID = '0';

type ChatRoomProps = {
    name: string,


}


const ChatRoomScreen = () => {
    const mic = require("../../../assets/mic.png");
    const play = require('../../../assets/play.png');
    const wave = require('../../../assets/wave.png');
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
            <Text style={{alignSelf:'flex-start', fontSize:24, fontWeight: '500', marginLeft:10, marginTop:20}}>{mockingMessages.doctor_name}</Text>
            <ScrollView>
                {mockingMessages.messages.map((theMessage, index) => {
                    if (theMessage.senderid == currentUserID) {
                        return (
                            <View key={index} style={{ minWidth: '100%', maxHeight: '20%', minHeight: '19%', flexDirection: 'row-reverse' }}>
                                <View style={[styles.messageBox, { flexDirection: 'column', }]}>
                                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                        <Image source={play} style={styles.playS}></Image>
                                        <Image source={wave} style={styles.playW}></Image>
                                        <Image source={wave} style={styles.playW}></Image>
                                        <Image source={wave} style={styles.playW}></Image>
                                        <Image source={wave} style={styles.playW}></Image>
                                        <Image source={wave} style={styles.playW}></Image>
                                    </View>
                                    <Text style={{ textAlign: 'center' }}>{theMessage.translation}</Text>


                                </View>
                            </View>
                        )
                    } else {
                        return (
                            <View key={index} style={{alignItems:'center', minWidth: '100%', maxHeight: '20%', minHeight: '19%', flexDirection: 'row' }}>
                                <Image source={wave} style={{marginRight:10}}></Image>
                                <View style={styles.arrow}></View>
                                <View style={[styles.messageBox, { flexDirection: 'column' }]}>
                                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                        <Image source={play} style={styles.playS}></Image>
                                        <Image source={wave} style={styles.playW}></Image>
                                        <Image source={wave} style={styles.playW}></Image>
                                        <Image source={wave} style={styles.playW}></Image>
                                        <Image source={wave} style={styles.playW}></Image>
                                        <Image source={wave} style={styles.playW}></Image>
                                    </View>
                                    <Text style={{ textAlign: 'center' }}>{theMessage.translation}</Text>
                                </View>
                            </View>
                        )
                    }

                })}
            </ScrollView>
            {mockingMessages.channel_status ? (
                <View style={styles.audioButton}>
                    <Pressable onPressIn={startListening} onPressOut={stopListening} >
                        <Image style={styles.audioImage} source={mic} resizeMode="contain" ></Image>
                    </Pressable>
                </View>) : (<View style={styles.audioButton}></View>)}
        </View>
    )
}

export default ChatRoomScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height:'100%',
        backgroundColor: '#DBE9EE',
    },
    audioButton: {
        position:'absolute',
        bottom:20,
        width: 100, // Width of the round view
        height: 100, // Height of the round view (should be equal to width)
        borderRadius: 50, // Half of the width and height to make it round
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    audioImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    messageBox: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
        borderRadius: 50,
        // elevation:5,
        maxWidth: "60%",
        maxHeight:100
    },
    arrow: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 20, // Adjust the size of the arrow
        borderTopWidth: 20, // Adjust the size of the arrow
        borderBottomWidth: 20, // Adjust the size of the arrow
        borderRightColor: '#F2F2F2', // Match messageBox background color
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        marginRight: -10, // Adjust based on arrow size
        transform: [{ rotate: '110deg' }], // Rotate to point to the left
      },
    playS: {
        maxHeight: 50,
        resizeMode: 'contain'
    },
    playW: {
        maxHeight: 30,
        resizeMode: 'contain'
    }

})