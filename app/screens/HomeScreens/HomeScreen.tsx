import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { COLORS } from '../constants';

const HomeScreen = ({data}) => {

  interface ItemType {
    fullName: string;
    userImg: string;
    lastMessage: string;
  }

  const navigation = useNavigation();

  const renderItem=({ item, index }: { item: ItemType, index: number }) => {
  
    return (
      <TouchableOpacity key={index} onPress={() => navigation.navigate("Chat", { doctorName: item.fullName})} style={[styles.userInfoContainer, index % 2 !== 0 ? styles.oddBackground: null]}>
        <View style={styles.userImageContainer}>
          <Image source={item.userImg} resizeMode='contain' style={styles.userImage}/>
        </View>

        <View style={{flexDirection: "row", width: 100}}>
        </View>

      </TouchableOpacity>
    );
  };

  return (    
    <View style={styles.container}>
        <Text>{"Home"}</Text>
        <View style={styles.userInfoContainer}>
            <Text style={styles.doctorName}>{item.fullName}</Text>
            <Text style={styles.lastSeen}>{item.lastMessage}</Text>
        </View>

        <AntDesign name="pluscircle" size={24} color="black" />
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
      borderColor: 'black',
      padding: 20,
      backgroundColor: '#F2F2F2',
    },
    doctorName: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 5,
    },
    userInfoContainer: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      borderBottomColor: "#F2F2F2",
      borderBottomWidth: 1
    },
    userImageContainer: {
      height: 14,
      width: 14,
      borderRadius: 7,
      backgroundColor: COLORS.primary,
      position: "absolute",
      top: 14,
      right: 2,
      zIndex: 999,
      borderWidth: 2,
      borderColor: COLORS.white
    },
    oddBackground: {
      backgroundColor: COLORS.white
    },
    userImage: {
      height: 50,
      width: 50,
      borderRadius: 25
    },
    lastSeen: {
      fontSize: 14,
      color: COLORS.secondaryGray
    },
  });

export default HomeScreen;