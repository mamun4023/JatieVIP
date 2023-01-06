import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { theme } from '@/theme'; 
import { Card, CardHeader, Icon } from '@/components';
import {faCircleUp ,faCircleDown, faMessage} from '@fortawesome/free-solid-svg-icons';
import {ms} from 'react-native-size-matters';
import { FontFamily } from '@/theme/Fonts';
import { strings } from '@/localization';


export default function MyActivity(){
    return(
        <View>
            <FlatList 
                data={Data}
                key = {(item)=> item.id}
                renderItem = {({item})=>(
                    <View style = {{margin : ms(10)}} > 
                        <Card>
                            <CardHeader 
                                fullName = {item.fullName}
                                userName = {item.userName}
                                profilePic = {item.profilePic}
                                time = {item.time}
                            />
                              <View style = {styles.activity}>

                                {item.status == `${strings.profile.upvoted}`? 
                                    <Icon 
                                        icon={faCircleUp}
                                        size = {ms(15)}
                                        style = {[styles.icon, {
                                            color : theme.light.colors.success
                                        }]}
                                    /> : null
                                }
                                {item.status == `${strings.profile.downVoted}`? 
                                    <Icon 
                                        icon={faCircleDown}
                                        size = {ms(15)}
                                        style = {[styles.icon, {
                                            color : theme.light.colors.error
                                        }]}
                                    />: null
                                }
                                {item.status == `${strings.profile.commented}`? 
                                    <Icon 
                                        icon={faMessage}
                                        size = {ms(15)}
                                        style = {[styles.icon, {
                                            color : theme.light.colors.info
                                        }]}
                                    />: null
                                }
                                <View style ={styles.textContainer}> 
                                    <Text style = {styles.statsTxt}> {item.status} </Text>
                                    <Text style = {styles.reactOnTxt}> {`${item.reactOn}'s post`} </Text>
                                </View>
                            </View>
                        </Card>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    activity : {
        flexDirection : 'row',
        padding : ms(10),
        alignItems : 'center'
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
        
    }
})


const Data = [
    {
        id : 1,
        fullName : "Adam Voigt",
        userName : "@adam",
        profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
        status : 'Upvoted',
        reactOn : "Liza Su's",
        time : 10,
    },
    {
        id : 2,
        fullName : "Adam Voigt",
        userName : "@adam",
        profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
        status : 'Downvoted',
        reactOn : "Liza Su",
        time : 20,
    },
    {
        id : 3,
        fullName : "Adam Voigt",
        userName : "@adam",
        profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
        status : 'Commented',
        reactOn : "Adam Trin",
        time : 50,
    },
    {
        id : 4,
        fullName : "Adam Voigt",
        userName : "@adam",
        profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
        status : 'Commented',
        reactOn : "Peter Griffin",
        time : 5,
    },
    {
        id : 5,
        fullName : "Adam Voigt",
        userName : "@adam",
        profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
        status : 'Commented',
        reactOn : "Emma Stone",
        time : 33,
    }
]