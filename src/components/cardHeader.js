import React from "react"
import {
    View,
    Text,
    Image,
    StyleSheet 
} from "react-native"
import {TextStyles, theme} from '@/theme';
import PropsType from 'prop-types';

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
                    <Text style = {[TextStyles.header, {fontSize : 15, color : 'black'}]} > {fullName} </Text>
                    <Text style = {[TextStyles.header, {fontSize : 12}]}> {userName} </Text>
                </View>
            </View>
            <View style = {{ flexDirection : 'row' }}> 
                <Text> {time} min ago</Text>
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
        padding : 10
    },
    Image : {
        width: 35,
        height: 35,
        borderWidth: 2,
        borderRadius: 75
    },
})