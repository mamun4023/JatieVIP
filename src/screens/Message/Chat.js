import React from "react";
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { theme } from "@/theme";


export default function Chat(){
    return(
        <SafeAreaView>
            <Text>From Chat Screen </Text> 
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : theme.light.colors.white
    }
})