import React from "react";
import { StyleSheet, View , Text } from "react-native";


export default function Settings(){
    return(
        <View style = {styles.contianer}>
                <Text> Settings</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    contianer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})