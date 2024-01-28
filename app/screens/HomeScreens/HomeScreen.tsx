import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native'; // Import useNavigation hook
import { MaterialCommunityIcons } from '@expo/vector-icons';


interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const HomeScreen = ({navigation}: RouterProps, ) => {

  const renderItem=({ item, index }: { item: ItemType, index: number }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity key={index} onPress={() => navigation.navigate("theChatRoom")} style={[styles.userInfoContainer, index % 2 !== 0 ? styles.oddBackground: null]}>
          <View style={styles.userImageContainer}>
            <MaterialCommunityIcons name="face-woman-profile" size={35} color="#4A6FA5" />
            {/* <Image source={image} resizeMode="contain" style={styles.userImage}></Image> */}
          </View>

          <View style={{flexDirection: "row", width: 100, height:'auto'}}>
            <Text>{item.fullName}</Text>
            <Text>{item.lastMessage}</Text>
          </View> 

        </TouchableOpacity>
      </View>
    );
  };

  return (    
    <View style={styles.container}>
        <Text>{"Home"}</Text>
        {mockData.map((item, index) => renderItem({ item, index }))}

        <AntDesign name="pluscircle" size={50} color="#4A6FA5" />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        backgroundColor: '#DBE9EE',
    },
    box: {
      borderWidth: 1,
      padding: 50,
      backgroundColor: '#FFFFFF',
    },
    doctorName: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 5,
    },
    userInfoContainer: {  // individual chat box
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
    },
    userImageContainer: {
      height: 50,
      width: 50,
      borderRadius: 7,
      position: "absolute",
      top: 14,
      right: 2,
      zIndex: 999,
    },
    oddBackground: {
      backgroundColor: "#F2F2F2"
    },
    userImage: {
      height: 50,
      width: 50,
      borderRadius: 25
    },
    lastSeen: {
      fontSize: 14,
    },
  });

export default HomeScreen;


interface ItemType {
  fullName: string;
  userImg: string;
  lastMessage: string;
}

const mockData: ItemType[] = [
{
  fullName: "Dr. Panageas",
  userImg: "../../assets/pfp1.png",
  lastMessage: "What is the shortest distance to..."
},
{
  fullName: "Dr. Shindler",
  userImg: "../../assets/pfp2.png",
  lastMessage: "I love data structures!"
},
{
  fullName: "Mary Roth",
  userImg: "../../assets/pfp3.png",
  lastMessage: "My neighbor was Jeffrey Dahmer..."
},
{
  fullName: "Therapist Wongma",
  userImg: "../../assets/pfp4.png",
  lastMessage: "We love segmentation faults!!!"
},
{
  fullName: "Nurse Ahmed",
  userImg: "../../assets/pfp5.png",
  lastMessage: "<3>"
},
{
  fullName: "Dr. Baldwin",
  userImg: "../../assets/pfp6.png",
  lastMessage: "Angular is the best framework..."
},
{
  fullName: "Dr. Ibhrahim",
  userImg: "../../assets/pfp7.png",
  lastMessage: "=)"
}
];