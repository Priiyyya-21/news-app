import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'


const SingleNews = ({ item, index }) => {

    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    return (
        <View style={{
            height: windowHeight,
            width: windowWidth,
            transform: [{ scaleY: -1 }],
        }}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )
}

export default SingleNews

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop:60,
        marginLeft:7,
        paddingBottom: 10,
        color: "white",
    },
});