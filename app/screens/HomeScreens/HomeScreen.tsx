import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType, ScrollView, Dimensions } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native'; // Import useNavigation hook
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Search from '../../components/Search';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const { height, width } = Dimensions.get('window');


const HomeScreen = ({ navigation }: RouterProps,) => {

  const renderItem = ({ item, index }: { item: ItemType, index: number }) => {
    return (
      <View style={styles.container} key={index}>
        <TouchableOpacity key={index} onPress={() => navigation.navigate("theChatRoom")} style={styles.userInfoContainer}>
          {/* <View style={styles.userImageContainer}>
            <Image source={image} resizeMode="contain" style={styles.userImage}></Image>
          </View> */}

          <MaterialCommunityIcons style={styles.profile} name="face-woman-profile" size={45} color="#4A6FA5" />


          <View style={styles.textContainer}>
            <Text style={styles.fullName}>{item.fullName}</Text>
            <Text style={styles.lastMessage}>{item.lastMessage}</Text>
          </View>

        </TouchableOpacity>
      </View>
    );
  };

  const [chatSearch, onChangeChatSearch] = React.useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Channels</Text>

        <View style={styles.search}>
          <Search name='' value={chatSearch} onChangeText={onChangeChatSearch} placeholder=''></Search>
        </View>

        {mockData.map((item, index) => renderItem({ item, index }))}

        <TouchableOpacity onPress={() => { }} style={styles.add}>
          <AntDesign name="pluscircle" size={65} color="#4A6FA5" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#DBE9EE',
  },
  userInfoContainer: {  // individual chat box
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: '100%',
    backgroundColor: '#F2F2F2',
    borderTopWidth: 0.5,
    borderTopColor: '#CDCDCD',
  },
  userImage: {
    height: 50,
    width: 50,
  },
  lastSeen: {
    fontSize: 14,
  },
  textContainer: {
    flex: 1,
  },
  fullName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lastMessage: {
    fontSize: 14,
    color: '#666666',
  },
  profile: {
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: 'bold',
  },
  add: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  search: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  }
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
    lastMessage: "<3"
  },
  {
    fullName: "Dr. Baldwin",
    userImg: "../../assets/pfp6.png",
    lastMessage: "Angular is the best framework..."
  },
  {
    fullName: "Dr. Ibrahim",
    userImg: "../../assets/pfp7.png",
    lastMessage: "=)"
  }
];