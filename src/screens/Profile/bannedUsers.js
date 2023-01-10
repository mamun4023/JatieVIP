import React, {useState} from 'react';
import { TextStyles, theme } from '@/theme';
import {FontFamily} from '@/theme/Fonts';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';
import {faSearch, faEllipsis, faCheck} from '@fortawesome/free-solid-svg-icons';
import { HorizontalLine, Icon, TextField, TopBackButton, Badge, ModalDown, ModalList } from '@/components';
import { ms, vs } from 'react-native-size-matters';
import {strings} from '@/localization';


export default function Notification({navigation}){
    const [open, setOpen]= useState(false)
 
    return(
        <SafeAreaView style = {styles.container}>
            <TopBackButton onPress = {()=> navigation.goBack()} />
            <View style = {styles.listHeader}> 
                <Text style = {styles.headerTxt}>{strings.profile.bannedUsers}</Text>
                <Badge count={23} size = {ms(16)} />
            </View>

            <View style = {styles.searchBox}> 
                <TextField 
                    style={{
                        paddingLeft : ms(40)
                    }}
                    placeholder = {strings.profile.searchUser}
                />
                <View style = {styles.moreIcon}> 
                    <Icon 
                        icon = {faSearch}
                        color = {theme.light.colors.secondary}
                    />
                </View>
            </View>
            <HorizontalLine />

            <View style = {styles.searchList}> 
                <View>
                <FlatList 
                    data={Data}
                    key = {(props)=>props.id}
                    initialNumToRender ={10}
                    contentContainerStyle={{ paddingBottom: ms(100) }}
                    renderItem = {({item})=> {
                        return (
                            <View style = {styles.listContainer}>   
                                <TouchableOpacity style = {styles.list}> 
                                    <Image source={{uri : item.image}} style = {styles.profileImage} />
                                    <View style = {styles.nameContainer}> 
                                        <Text style = {styles.nameTxt}> {item.name} </Text> 
                                        <Text style = {styles.userNameTxt}> {item.userName} </Text>
                                    </View>
                                </TouchableOpacity>
                                <Icon 
                                    icon={faEllipsis}
                                    size = {ms(15)}
                                    color = {theme.light.colors.secondary}
                                    onPress = {()=> setOpen(true)}
                                />
                            </View>
                        )
                    } }
                />
                </View>
            </View>

           {open &&  
                <ModalDown 
                    open = {open}
                    setOpen = {setOpen}
                >
                    <ModalList 
                        title= {strings.profile.unban} 
                        icon={faCheck}
                        iconColor = {theme.light.colors.info}
                        iconBg = {theme.light.colors.infoBgLight}
                    />
                </ModalDown>
            }
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : theme.light.colors.white
    },
    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : ms(10),
    },
    headerTxt: [
        TextStyles.header,{
            color : theme.light.colors.black,
            paddingLeft : ms(9)
        }
    ],
    left:{
        flexDirection : 'row',
        alignItems : 'center'
    },
    right : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    switchContainer : {
        position : 'absolute',
        top : ms(45),
        left : ms(60),
        flexDirection : 'row',
        alignItems : 'center',
    },
    searchBox : {
        marginTop : vs(-15),
        marginBottom : vs(-10)
    },
    moreIcon : {
        position : 'absolute',
        left : ms(10),
        top : ms(30)
    },
    searchBody :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : theme.light.colors.primaryBgLight,
    },
    searchTxt :{
        fontFamily : FontFamily.BrandonGrotesque_medium
    },
    searchList : {
        padding : ms(10),
    },
    listHeader : {
        paddingTop : ms(5),
        paddingBottom : ms(5),         
        flexDirection : 'row',
        alignItems : 'center'
    },
    listContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : ms(8),
        marginRight : ms(8),
        alignItems : 'center'
    },
    list : {
        flexDirection : "row",
        alignItems : "center"
    },
    profileImage : {
        height : ms(40),
        width : ms(40),
        borderRadius : 100,
        borderWidth : 1,
        borderColor : theme.light.colors.secondary
    },
    nameContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    },
    nameTxt : {
        fontFamily : FontFamily.Recoleta_bold,
        fontSize : ms(14, 0.3),
        color : theme.light.colors.black,
    },
    userNameTxt : {
        fontFamily : FontFamily.Recoleta_regular,
        fontSize : ms(14, 0.3)
    }
})


const Data = [
    {
        id : 1,
        name : "Harinder Bharwal",
        userName : "@harinder",
        image : 'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg'
    },
    {
        id : 2,
        name : "Peter Taylor",
        userName : '@peter',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAgieDfVf6AX0Ox5zuIgW78Laf6YxS37M1byexctLnQ&s'
    },
    {
        id : 3,
        name : "Danna Koprivoan",
        userName : "@dana",
        image : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id : 4,
        name : "Mayke Sehurs",
        userName : "@mayke",
        image : 'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=612x612&w=0&h=c9Z3DyUg-YvgOQnL_ykTIgVTWXjF-GNo4FUQ7i5fyyk=',
    },
    {
        id : 5,
        name : "Anatoly Shcherbatykh",
        userName : "@anatoly",
        image : 'https://image.shutterstock.com/image-photo/portrait-mature-businessman-wearing-glasses-260nw-738242395.jpg',
    },
    {
        id : 6,
        name : "Otmar Dolezal",
        userName : "@otmar",
        image : 'https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=2000',
    },
    {
        id : 7,
        name : "Siri Jakobsson",
        userName : "@mayke",
        image : 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000',
    },
    {
        id : 8,
        name : "Bansilal Brata ",
        userName : "@brata",
        image : 'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    }
]
