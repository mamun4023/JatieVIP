import React, {useState} from "react";
import {
    View, 
    Text,
    Image, 
    StyleSheet,
    Alert,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import {theme, TextStyles} from '@/theme';
import {FontFamily} from '@/theme/Fonts';
import {HorizontalLine, ModalDown, ModalList, HeaderTab, Icon, TopBackButton, CardHeader, Card, CardBody, CardFooter, CommentCard} from '@/components'
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
    faTrash
} from '@fortawesome/free-solid-svg-icons';

import {faBell } from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { strings } from '@/localization';


export default function ManageReportOnMessage({navigation}){
    const [openMore, setOpenMore] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    return(
        <View style = {styles.container}>
            <TopBackButton onPress = {()=> navigation.goBack()} />
            <Text style = {[styles.headerText, TextStyles.header]}> {strings.profile.manageReports} </Text>
            <HorizontalLine color = {theme.light.colors.infoBgLight} />
            <CardHeader 
                fullName = {User.fullName}
                userName = {User.userName}
                profilePic = {User.profilePic}
                time = {User.time}
            />
            <View style = {styles.activity}>
                <View style ={styles.textContainer}> 
                    <Text style = {styles.statsTxt}> Reported </Text>
                    <Text style = {styles.reactOnTxt}> {`this Profile`} </Text>
                </View>
                <View style = {styles.reasonContainer}> 
                    <Text style = {styles.reasonTxt}>Reason : Explicit Content  </Text>
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
                            size={20}
                        />
                    </View>
                    <View>
                        <Text style = {[TextStyles.header, {color : theme.light.colors.text}]} > Adam Voigt</Text>
                        <Text style = {TextStyles.label}> @adamvoigt</Text>
                    </View>
                </View>
                <View style = {styles.iconContiner} > 
                    <Icon 
                        icon={faSearch} 
                        size = {20}
                        style={styles.icon}   
                    />
                    <Icon 
                        icon= {faBell} 
                        size={20}
                        style={styles.icon}
                    />
                </View>
            </View>
            <HeaderTab 
                title1 = "Followers"
                count1 = {10}
                onPress1 = {()=>Alert.alert('press 1')}
                title2 = "Following"
                count2 = {20}
                onPress2 = {()=>Alert.alert('press 2')}      
            />

            <View style = {styles.messageHeader}>
               <View style = {styles.messageLeft}>
                    <TouchableOpacity style = {[styles.IconBox, {backgroundColor : theme.light.colors.successBgLight}]}>
                        <FontAwesomeIcon 
                            icon = {faMessage}
                            color  = {theme.light.colors.success}
                        />
                        <Text style = {[TextStyles.label, {color : theme.light.colors.success}]} > Message </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.IconBox}> 
                        <FontAwesomeIcon 
                            icon = {faUserPlus}
                            color  = {theme.light.colors.primary}
                        />
                        <Text style = {[TextStyles.label, {color : theme.light.colors.primary}]} > {strings.profile.followers} </Text> 
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
                            likePress = {()=> Alert.alert("like")}
                            disLikeCount = {item.disLike}
                            disLikePress = {()=> Alert.alert("dislike")}
                            commentCount = {item.comment}
                            commentPress = {()=> Alert.alert("Comment")}
                            sharePress = {()=> Alert.alert("share")}
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
                    title= "Follow"
                    icon={faUserPlus}
                    iconColor = {theme.light.colors.primary}
                    iconBg = {theme.light.colors.primaryBgLight}
                    />
                    <ModalList 
                    title= "Send a Private  Message"
                    icon={faMessage}
                    iconColor = {theme.light.colors.success}
                    iconBg = {theme.light.colors.successBgLight}
                    onPress = {()=> Alert.alert("working")}
                    />
                    <ModalList 
                    title= "Report"
                    icon={faFlag}
                        iconColor = {theme.light.colors.secondary}
                        iconBg = {theme.light.colors.infoBgLight}
                        />
                        <ModalList 
                        title= "Block"
                        icon={faXmark}
                        iconColor = {theme.light.colors.secondary}
                        iconBg = {theme.light.colors.infoBgLight}
                        />
                        <ModalList 
                        title= "Ban"
                        icon={faFlag}
                        iconColor = {theme.light.colors.secondary}
                        iconBg = {theme.light.colors.infoBgLight}
                        />
                </ModalDown>
            }
            {openEdit && 
                <ModalDown 
                    open={openEdit}
                    setOpen = {setOpenEdit}
                > 
                <ModalList 
                    title='Edit'
                    icon={faPen}
                    iconBg = {theme.light.colors.infoBgLight}
                    iconColor= {theme.light.colors.info}
                />
                <ModalList 
                  title='Remove'
                  icon={faTrash}
                  iconBg = {theme.light.colors.infoBgLight}
                  iconColor= {theme.light.colors.secondary}
                />
              </ModalDown>
            }









                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : theme.light.colors.white
    },
    headerText :{
        color : theme.light.colors.black
    },
    activity : {
        flexDirection : 'row',
        padding : ms(10),
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
        paddingLeft : ms(5)
    },
    reactOnTxt: {
        color : theme.light.colors.info, 
        textDecorationLine : 'underline',
        fontFamily : FontFamily.BrandonGrotesque_medium,
        fontSize : ms(15, 0.3)
    },
    reasonContainer : {
        backgroundColor : "#eee",
        borderRadius : 10,
        padding : 3,
        marginLeft : 10
    },
    reasonTxt : {
        fontFamily : FontFamily.Recoleta_medium
    },
    body: {
        flex : 1,
        backgroundColor : theme.light.colors.primaryBgLight,
        elevation : 2,
        padding : ms(8)
    },

    headerContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 10
    },
    headerImageContainer : {
        flexDirection : 'row',
        position : 'relative'
    },
    headerImage : {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderRadius: 75
    },
    iconContiner: {
        flexDirection : 'row'
    },  
    icon : {
        margin : 10
    },
    profileLogoContainer : {
        height : 30,
        width : 30,
        backgroundColor : theme.light.colors.primaryBg,
        position : 'absolute',
        bottom : -18,
        left : 10,
        borderRadius : 100,
        justifyContent : 'center',
        alignItems : 'center'
    },
    messageHeader: {
        flexDirection : 'row',
        justifyContent :  'space-between',
        // backgroundColor : '#eee',
        padding : 10,
    },
    messageLeft : {
        flexDirection : 'row',
    },
    messageRight : {

    },
    IconBox : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        backgroundColor : theme.light.colors.primaryBgLight,
        padding : 10,
        borderRadius : 10
    },
    moreIconContainer: {
        backgroundColor : theme.light.colors.infoBg,
        padding : 10,
        borderRadius : 100,
        alignItems : 'center',
        justifyContent : 'center'
    },
    feedContainer : {
        flex : 1,
        backgroundColor : theme.light.colors.primaryBgLight,
        margin : 12
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