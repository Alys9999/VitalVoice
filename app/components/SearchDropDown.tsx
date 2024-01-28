import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"

interface SearchDropDownProps {
    onPress: () => void;
    dataSource: string[];
}

const SearchDropDown: React.FC<SearchDropDownProps> = (props) => {
    const { onPress, dataSource } = props;

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.subContainer}>
                {dataSource.length ? (
                    {
                        dataSource.map((item, index) => {
                            <View key={index} style={styles.itemView}>
                                <Text style={styles.itemText}>{item}</Text>
                            </View>
                        })
                    }
                ) : (
                    <View style={styles.noResultView}>
                        <Text style={styles.noResultText}>No results.</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    },
    subContainer: {
        backgroundColor: '#FFF'
    },
    itemView: {
        backgroundColor: '#EEE'
    },
    itemText: {
        color: '#EEE'
    },
    noResultView: {
        backgroundColor: '#000'
    },
    noResultText: {
        color: '#FFF'
    }
});

export default SearchDropDown;