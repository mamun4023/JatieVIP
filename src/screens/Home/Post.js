import React, {useState} from "react"
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native"
import {AppSwitch, Button, HorizontalLine, Icon, TopBackButton, VerticalLine} from '@/components';
import { strings } from "@/localization";
import { TextStyles, theme } from "@/theme";
import { color } from "react-native-reanimated";
import { FontFamily } from "@/theme/Fonts";
import { ms } from "react-native-size-matters";
import { faImage } from "@fortawesome/free-solid-svg-icons";


export default function Post({navigation}){
    const [postTxt, setPostTxt] = useState("")
    const [vipOnly, setVipOnly] = useState(false)
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.headerContainer}> 
                <TopBackButton onPress = {()=> navigation.goBack() }/>
                <Text style = {styles.headerTxt}>{strings.home.shareToFeed} </Text>
            </View>
            <HorizontalLine 
                color = {theme.light.colors.primaryBg}
            />

            <View style = {styles.txtInputContainer}>
                <TextInput 
                    placeholder = {strings.home.whatOnYourMind}
                    onChangeText = {(val)=> setPostTxt(val)}
                    editable
                    multiline
                    numberOfLines={6}
                    style = {styles.txtInput}
                
                />
            </View>
            <HorizontalLine 
                color = {theme.light.colors.primaryBg}
            />

            <View style = {styles.bttomBox}>
                <View>
                    <View style = {styles.left}>
                        <Icon 
                           icon = {faImage}
                           size = {ms(22)}
                           color = {theme.light.colors.secondary}
                           style = {{marginRight : ms(10)}}
                        
                        />
                        <View style = {styles.verticalBar} />
                        <Text style = {styles.onlyTxt}> {strings.home.shareToVipOnly} </Text>
                        <AppSwitch  
                            value = {vipOnly}
                            onChange = {()=> setVipOnly(prev => !prev)}
                        />
                    </View>
                </View> 
                <View style = {styles.right}>
                    <Button 
                        title= {strings.home.post}
                        style={ {
                            opacity : postTxt.length? 1 :  0.4,
                            width  : ms(100)
                        }}
                        disabled={postTxt.length? false : true }
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : theme.light.colors.white,
    },
    headerContainer : {
        
    },
    headerTxt: [
        TextStyles.header, {
            color : theme.light.colors.black,
            paddingLeft : ms(9)
        }
    ],
    txtInputContainer : {
        padding : 10
    },
    txtInput : {
        fontFamily : FontFamily.BrandonGrotesque_regular,
        fontSize : ms(18, 0.3),
        lineHeight : ms(22),
        textAlignVertical : 'top',
    },
    bttomBox : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : ms(9),
        alignItems : 'center',
    },
    left : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    verticalBar : {
        height : 25,
        width : 1,
        backgroundColor : theme.light.colors.infoBg,
        marginRight : ms(10)
    },
    onlyTxt : {
        fontFamily : FontFamily.Recoleta_medium,
        fontSize : ms(12, 0.3),
        marginRight : ms(10)
    }
})