import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import { theme } from '@/theme'; 
import { TextStyles } from '@/theme';
import { Card, CardHeader, Icon } from '@/components';
import {
    faComment, 
    faEllipsis,
    faShareNodes,
    faCircleUp,
    faCircleDown,
  } from '@fortawesome/free-solid-svg-icons';
export default function MyActivity(){
    return(
        <View>
            <FlatList 
                data={Data}
                key = {(item)=> item.id}
                renderItem = {({item})=>(
                    <View style = {{margin : 10}} > 
                        <Card>
                            <CardHeader 
                                fullName = {item.fullName}
                                userName = {item.userName}
                                profilePic = {item.profilePic}
                                time = {10}
                            />
                              <View style = {styles.activity}>
                                <Icon 
                                    icon={faCircleUp}
                                    size = {15}
                                    style = {[styles.icon, {
                                    color : 'green'
                                    }]}
                                />
                                <Text> Upvoted on Lisa post</Text>
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
        padding : 10,
        alignItems : 'center'
    }
})


const Data = [
    {
        id : 1,
        fullName : "Adam Voigt",
        userName : "@adam",
        profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
        status : 'Upvoted',
        time : 10,
    },
    {
        id : 2,
        fullName : "Adam Voigt",
        userName : "@adam",
        profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
        status : 'Downvoted',
        time : 10,
    },
    {
        id : 3,
        fullName : "Adam Voigt",
        userName : "@adam",
        profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
        status : 'Commented',
        time : 10,
    },
    {
        id : 4,
        fullName : "Adam Voigt",
        userName : "@adam",
        profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
        status : 'Commented',
        time : 10,
    },
    {
        id : 5,
        fullName : "Adam Voigt",
        userName : "@adam",
        profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
        status : 'Commented',
        time : 10,
    }
]