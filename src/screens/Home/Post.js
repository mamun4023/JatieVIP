import React, {useState} from "react"
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native"
import {AppSwitch, Button, HorizontalLine, Icon, TopBackButton, VerticalLine} from '@/components';
import { strings } from "@/localization";
import { TextStyles, theme } from "@/theme";
import { color } from "react-native-reanimated";
import { FontFamily } from "@/theme/Fonts";
import { ms } from "react-native-size-matters";
import { faImage, faVideo } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { NAVIGATION } from "@/constants";
import ImageCropPicker from "react-native-image-crop-picker";


export default function Post({navigation}){
    const userType = useSelector(state => state.userType);
    const [postTxt, setPostTxt] = useState("")
    const [vipOnly, setVipOnly] = useState(false);
    const [images, setImages] = useState([]);

    const OpenImagePicker = ()=>{
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
          }).then(image => {
            // setImages(image.)
            console.log(image);
          }).catch(err =>{
            console.log(err)
          })
    }
    
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
                           onPress = {OpenImagePicker}
                        />

                        {/* show only for VIP user */}
                        {userType.user == strings.userType.vip &&  
                            <> 
                                <View style = {styles.verticalBar} />
                                <Text style = {styles.onlyTxt}> {strings.home.shareToVipOnly} </Text>
                                <AppSwitch  
                                    value = {vipOnly}
                                    onChange = {()=> setVipOnly(prev => !prev)}
                                />
                            </>
                        }
                        {/* show only for admin */}
                        {userType.user == strings.userType.admin &&  
                            <> 
                                <View style = {styles.verticalBar} />
                                <Icon 
                                    icon = {faVideo}
                                    size = {ms(22)}
                                    color = {theme.light.colors.secondary}
                                    style = {{marginRight : ms(10)}}
                                />
                            </>
                        }

                    </View>
                </View> 
                <View style = {styles.right}>
                    {/* show only for Free and vip user */}
                    {userType.user == (strings.userType.free || strings.userType.vip) && 
                        <Button 
                            title= {strings.home.post}
                            style={ {
                                opacity : postTxt.length? 1 :  0.4,
                                width  : ms(100)
                            }}
                            disabled={postTxt.length? false : true }
                        />
                    }
                    {/* show only for Admin */}
                    {userType.user == strings.userType.admin && 
                        <Button 
                            title= {strings.home.next}
                            onPress = {()=> navigation.navigate(NAVIGATION.postOptions)}
                            style={ {
                                opacity : postTxt.length? 1 :  0.4,
                                width  : ms(100)
                            }}
                            disabled={postTxt.length? false : true }
                        />
                    }
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