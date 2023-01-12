import React, {useState} from "react";
import {
    View, 
    Text,
    Image, 
    StyleSheet,
    Alert,
    TouchableOpacity,
    FlatList,
    SafeAreaView
} from 'react-native';
import {theme, TextStyles} from '@/theme';
import {FontFamily} from '@/theme/Fonts';
import {HorizontalLine, ModalDown, ModalList, HeaderTab, Icon, TopBackButton, CardHeader, Card, CardBody, CardFooter, CommentCard, PopUp, Button} from '@/components'
import {ms, vs} from 'react-native-size-matters'
import {
    faSearch, 
    faCrown, 
    faMessage, 
    faUserPlus, 
    faEllipsis,
    faFlag,
    faXmark,
    faPen,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';

import {faBell } from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { strings } from '@/localization';

export default function ManageReportOnMessage({navigation}){
    const [openMore, setOpenMore] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [openBan, setOpenBan] = useState(false);

    return(
        <SafeAreaView style = {styles.container}>
            <TopBackButton onPress = {()=> navigation.goBack()} />
            <Text style = {[styles.headerText, TextStyles.header]}>{strings.profile.manageReports} </Text>
            <HorizontalLine color = {theme.light.colors.infoBgLight} />
            <CardHeader 
                fullName = {User.fullName}
                userName = {User.userName}
                profilePic = {User.profilePic}
                time = {User.time}
            />
            <View style = {styles.activity}>
                <View style ={styles.textContainer}> 
                    <Text style = {styles.statsTxt}> {strings.profile.reported} </Text>
                    <Text style = {styles.reactOnTxt}> {`this Profile`} </Text>
                </View>
                <View style = {styles.reasonContainer}> 
                    <Text style = {styles.reasonTxt}>{strings.profile.reason} </Text>
                </View>
            </View>
            <View style = {styles.body}>

            <View style = {styles.headerContainer}> 
                <View style = {styles.headerImageContainer} >
                    <Image 
                        style = {styles.headerImage}
                        source={{
                        uri : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                        }}
                    />
                    <View style = {styles.profileLogoContainer}>
                        <FontAwesomeIcon 
                            icon = {faCrown}
                            color = {theme.light.colors.primary}
                            size={ms(20)}
                        />
                    </View>
                    <View>
                        <Text style = {styles.fullNameTxt} > {User.fullName}</Text>
                        <Text style = {styles.userNameTxt}> {User.userName} </Text>
                    </View>
                </View>
                <View style = {styles.iconContiner} > 
                    <Icon 
                        icon={faSearch} 
                        size = {ms(20)}
                        style={styles.searchIcon}   
                    />
                    <Icon 
                        icon= {faBell} 
                        size={ms(20)}
                        style={styles.bellIcon}
                    />
                </View>
            </View>
            <HeaderTab 
                title1 = {strings.profile.followers}
                count1 = {10}
                // onPress1 = {()=>Alert.alert('press 1')}
                title2 = {strings.profile.following}
                count2 = {20}
                // onPress2 = {()=>Alert.alert('press 2')}      
            />

            <View style = {styles.messageHeader}>
               <View style = {styles.messageLeft}>
                    <TouchableOpacity style = {[styles.IconBox, {backgroundColor : theme.light.colors.successBgLight}]}>
                        <FontAwesomeIcon 
                            icon = {faMessage}
                            size = {ms(13)}
                            color  = {theme.light.colors.success}
                        />
                        <Text style = {styles.messageBtnTxt} > {strings.profile.message} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[styles.IconBox, {marginLeft : ms(10)}]}> 
                        <FontAwesomeIcon 
                            icon = {faUserPlus}
                            size = {ms(13)}
                            color  = {theme.light.colors.primary}
                        />
                        <Text style = {styles.followersBtnTxt} > {strings.profile.follow} </Text> 
                    </TouchableOpacity>
               </View>
               <TouchableOpacity onPress={()=>setOpenMore(true)} style = {styles.moreIconContainer}> 
                 <FontAwesomeIcon 
                    icon = {faEllipsis}
                 />
               </TouchableOpacity>
            </View>
            <HorizontalLine />
            <FlatList 
                data={Data}
                key = {(props)=> props.id}
                renderItem = {({item})=> (
                    <View style = {{margin : 10}}> 
                    <Card>
                        <CardHeader 
                        fullName = {item.fullName}
                        userName = {item.userName}
                        profilePic =  {item.profilePic}
                        time = {item.time}
                        />
                        <CardBody 
                            text = {item.text}
                        />
                        <CardFooter 
                            likeCount= {item.like}
                            // likePress = {()=> Alert.alert("like")}
                            disLikeCount = {item.disLike}
                            // disLikePress = {()=> Alert.alert("dislike")}
                            commentCount = {item.comment}
                            // commentPress = {()=> Alert.alert("Comment")}
                            // sharePress = {()=> Alert.alert("share")}
                            morePress = {()=>setOpenEdit(true)}
                        />
                    </Card>
                    </View>
                )}
             />
            {openMore && 
                <ModalDown 
                    open={openMore} 
                    setOpen = {setOpenMore}
                > 
                    <ModalList 
                        title=  {strings.operations.follow}
                        icon={faUserPlus}
                        iconColor = {theme.light.colors.primary}
                        iconBg = {theme.light.colors.primaryBgLight}
                    />
                    <ModalList 
                        title= {strings.profile.sendPrivateMessage}
                        icon={faMessage}
                        iconColor = {theme.light.colors.success}
                        iconBg = {theme.light.colors.successBgLight}
                        // onPress = {()=> Alert.alert("working")}
                    />
                    <HorizontalLine color = {theme.light.colors.infoBgLight} />
                    <ModalList 
                        title= {strings.operations.remove}
                        icon={faTrash}
                        iconColor = {theme.light.colors.secondary}
                        iconBg = {theme.light.colors.infoBgLight}
                    />
                    <ModalList 
                        title= {strings.operations.block}
                        icon={faXmark}
                        iconColor = {theme.light.colors.secondary}
                        iconBg = {theme.light.colors.infoBgLight}
                    />
                    <ModalList 
                        title= {strings.operations.ban}
                        icon={faFlag}
                        iconColor = {theme.light.colors.secondary}
                        iconBg = {theme.light.colors.infoBgLight}
                        onPress = {()=> {
                            setOpenBan(true),
                            setOpenMore(false)
                        }}
                    />
                </ModalDown>
            }
            {openEdit && 
                <ModalDown 
                    open={openEdit}
                    setOpen = {setOpenEdit}
                > 
                <ModalList 
                    title= {strings.operations.edit}
                    icon={faPen}
                    iconBg = {theme.light.colors.infoBgLight}
                    iconColor= {theme.light.colors.info}
                />
                <ModalList 
                    title= {strings.operations.remove}
                    icon={faTrash}
                    iconBg = {theme.light.colors.infoBgLight}
                    iconColor= {theme.light.colors.secondary}
                />
              </ModalDown>
            }

            <PopUp
                open = {openBan}
                setOpen = {setOpenBan}
            >
                <View>
                    <Text style = {[TextStyles.header,{color : theme.light.colors.black}]} >{strings.profile.areYouSureWantToBan}</Text>
                    <View style ={{flexDirection : 'row'}}>
                        <Image 
                            source={{
                                uri : "https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0="
                            }}
                            style = {{
                                height : ms(40),
                                width : ms(40),
                                borderRadius : 100
                            }}
                        />
                        <View> 
                            <Text style = {[TextStyles.header, {color : theme.light.colors.black, fontSize : ms(18, 0.3)}]} >{User.fullName} </Text>
                            <Text>{User.userName}</Text>
                            <Text style = {{backgroundColor : theme.light.colors.inputFiled, borderRadius : 10, padding : 2}} > {strings.profile.freeMember} </Text> 
                        </View>
                    </View>
                    <View> 
                        <Button 
                            title= {strings.profile.yesBan}
                            style={{
                                marginTop : 10,
                                backgroundColor : theme.light.colors.white,
                                borderWidth : 2,
                                borderColor : theme.light.colors.primary
                            }}
                            textStyle = {{
                                color : theme.light.colors.primary
                            }}
                        />
                        <Button 
                            title= {strings.profile.DoNotBan}
                            style={{
                                marginTop : 10
                            }}
                        />
                    </View>
                </View>
            </PopUp>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : theme.light.colors.white
    },
    headerText :{
        color : theme.light.colors.black,
        paddingLeft : ms(9)
    },
    activity : {
        flexDirection : 'row',
        padding : ms(9),
        alignItems : 'center',
        justifyContent : 'space-between',  
    },
    textContainer : {
        flexDirection : 'row',
        alignItems : "center",
        justifyContent : "center"
    },
    statsTxt: {
        fontFamily : FontFamily.BrandonGrotesque_medium,
        fontSize : ms(15, 0.3),
    },
    reactOnTxt: {
        color : theme.light.colors.info, 
        textDecorationLine : 'underline',
        fontFamily : FontFamily.BrandonGrotesque_medium,
        fontSize : ms(15, 0.3)
    },
    reasonContainer : {
        backgroundColor : theme.light.colors.inputFiled,
        borderRadius : 10,
        padding : ms(3),
        marginLeft : ms(10)
    },
    reasonTxt : {
        fontFamily : FontFamily.BrandonGrotesque_bold,
        fontSize : ms(11, 0.3)
    },
    body: {
        flex : 1,
        backgroundColor : theme.light.colors.primaryBgLight,
        elevation : 2,
        // padding : ms(8)
    },

    headerContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : ms(10)
    },
    headerImageContainer : {
        flexDirection : 'row',
        position : 'relative'
    },
    headerImage : {
        width: ms(50),
        height: ms(50),
        borderWidth: 2,
        borderRadius: 75
    },
    fullNameTxt : [
        TextStyles.header,{
            color : theme.light.colors.text,
            fontSize : ms(24)
        }
    ],
    userNameTxt : {
        fontFamily : FontFamily.Recoleta_regular,
        fontSize : ms(14, 0.3),
        position : 'absolute',
        bottom : ms(5)
    },
    iconContiner: {
        flexDirection : 'row',
        marginTop : ms(8)
    },  
    searchIcon : {
        marginRight : ms(12)
    },
    bellIcon : {
        // marginRight : ms(20),
    },
    profileLogoContainer : {
        height : ms(30),
        width : ms(30),
        backgroundColor : theme.light.colors.primaryBg,
        opacity : 1,
        position : 'absolute',
        bottom : vs(-10),
        left : ms(10),
        borderRadius : 100,
        justifyContent : 'center',
        alignItems : 'center'
    },
    messageHeader: {
        flexDirection : 'row',
        justifyContent :  'space-between',
        padding : ms(10),
    },
    messageLeft : {
        flexDirection : 'row',
    },
    messageRight : {

    },
    messageBtnTxt :{
        fontFamily : FontFamily.Recoleta_bold,
        fontSize : ms(13),
        color : theme.light.colors.success,
        paddingLeft : ms(5)
    },
    followersBtnTxt :{
        fontFamily : FontFamily.Recoleta_bold,
        fontSize : ms(13),
        color : theme.light.colors.primary,
        paddingLeft : ms(5)
    },
    IconBox : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        backgroundColor : theme.light.colors.primaryBgLight,
        padding : ms(5),
        width : ms(100),
        borderRadius : 10
    },
    moreIconContainer: {
        backgroundColor : theme.light.colors.infoBg,
        padding : ms(10),
        borderRadius : 100,
        alignItems : 'center',
        justifyContent : 'center'
    },
    feedContainer : {
        flex : 1,
        backgroundColor : theme.light.colors.primaryBgLight,
        margin : ms(12)
    }
   
})


const User = {
    fullName : "Adam",
    userName : '@adam',
    profilePic : 'https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=',
    time : 10
}











const Data = [
    {
      id : 1,
      fullName : "Adam Voigt",
      userName : "@adam",
      profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
      like : 100,
      disLike : 30,
      comment : 20,
      text : "Initiated by 2020 IEEE President Toshio Fukuda and the IEEE 2020 IEEE Board Ad Hoc Committee on Lifelong Learning and Continuing Education, the IEEE Academies are designed to teach in-demand technical concepts in a new way to IEEE members working in industry. The IEEE Academies are a new learning format at IEEE that will help members understand",
      time : '10'
    },
    {
      id : 2,
      fullName : "Adam Voigt",
      userName : "@adam",
      profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
      like : 100,
      disLike : 30,
      comment : 20,
      text : "Initiated by 2020 IEEE President Toshio Fukuda and the IEEE 2020 IEEE Board Ad Hoc Committee on Lifelong Learning and Continuing Education, the IEEE Academies are designed to teach in-demand technical concepts in a new way to IEEE members working in industry. The IEEE Academies are a new learning format at IEEE that will help members understand",
      time : '10'
    }
  ]