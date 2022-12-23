import React from 'react';
import {
    View, 
    Text,
    TouchableOpacity, 
    StyleSheet
} from 'react-native';
import {TextStyles, theme} from '@/theme'
import PropsType from 'prop-types';

export const HeaderTab = ({title1, title2, count1, count2, onPress1, onPress2 })=>{
    return(
            <View style ={styles.headerTab}>
                <TouchableOpacity style = {styles.tab} onPress = {onPress1} >
                    <Text style = {[TextStyles.title]} > {title1}</Text>
                    <Text  style = {styles.count} > {count1}</Text>
                </TouchableOpacity> 
                <TouchableOpacity style = {styles.tab} onPress = {onPress2}>
                    <Text style = {[TextStyles.title]}>{title2}</Text>
                    <Text style = {styles.count} > {count2}</Text>
                </TouchableOpacity>       
            </View>
    )
}

HeaderTab.prototype = {
    title1 : PropsType.string.isRequired,
    title2 : PropsType.string.isRequired,
    count1 : PropsType.string.isRequired,
    count2 : PropsType.string.isRequired,
    onPress1 : PropsType.func,
    onPress2 : PropsType.func
}

HeaderTab.defaultProps = {
    title1 : "No title",
    title2 : "No title",
    count1 : 0,
    count2 : 0
}

const styles = StyleSheet.create({
    headerTab : {
        flexDirection : 'row',
        justifyContent : 'center'
    },
    tab: {
        flexDirection : 'row',
        backgroundColor : theme.light.colors.infoBgLight,
        padding : 10,
        borderRadius : 20,
        margin : 2,
        alignItems : 'center'
    },
    count : {
        fontWeight : 'bold',
        fontSize : 20
    }
})

