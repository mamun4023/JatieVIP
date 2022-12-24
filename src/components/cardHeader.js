import React from "react"
import { View, Text, Image, StyleSheet} from "react-native"
import {TextStyles} from '@/theme';
import PropsType from 'prop-types';
import {ms} from 'react-native-size-matters'

export const CardHeader = ({fullName, userName, profilePic, time})=>{
    return(
        <View style = {styles.postHeader}> 
            <View style = {{flexDirection : 'row'}}>
                <Image 
                    style = {styles.Image}
                    source={{
                        uri : profilePic
                    }}
                />
                <View>
                    <Text style = {[TextStyles.header, {fontSize : ms(15, 0.3), color : 'black'}]} > {fullName} </Text>
                    <Text style = {[TextStyles.header, {fontSize : ms(12, 0.3)}]}> {userName} </Text>
                </View>
            </View>
            <View style = {{ flexDirection : 'row' }}> 
                <Text> {time} mins ago</Text>
            </View>
        </View>
    )
}


CardHeader.prototype = {
    fullName : PropsType.string.isRequired,
    userName : PropsType.string.isRequired,
    profilePic : PropsType.string.isRequired,
    time : PropsType.string.isRequired
}

const styles = StyleSheet.create({
    postHeader: {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : ms(10)
    },
    Image : {
        width: ms(35),
        height: ms(35),
        borderWidth: 2,
        borderRadius: 100
    },
})