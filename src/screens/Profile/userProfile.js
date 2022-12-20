import React, {useState} from 'react';
import {
    View, 
    Text,
    Image, 
    StyleSheet,
    Alert,
    TouchableOpacity,
    FlatList
} from 'react-native';
import {
    faSearch, 
    faCrown, 
    faMessage, 
    faUserPlus, 
    faEllipsis,
    faFlag,
    faXmark
} from '@fortawesome/free-solid-svg-icons';
import {TextStyles, theme} from '@/theme'

import {faBell } from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Card, CardHeader, CardBody, CardFooter, HeaderTab, Icon, ModalDown, ModalList} from '@/components'
import { strings } from '@/localization';
import {HorizontalLine} from '@/components';


export default function UserProfile(){
    const [open, setOpen] = useState(false)
    return(
        <View style = {styles.container}>
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
               <TouchableOpacity onPress={()=>setOpen(true)} style = {styles.moreIconContainer}> 
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
                            morePress = {()=>setOpen(true)}
                        />
                    </Card>
                    </View>
                )}
             />

            <ModalDown 
              open={open} 
              setOpen = {setOpen}
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
            </ModalDown>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : theme.light.colors.white
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