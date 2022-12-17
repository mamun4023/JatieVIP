import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { theme } from '@/theme'; 
import { TextStyles } from '@/theme';
import { Icon } from '@/components';
import {
    faComment, 
    faEllipsis,
    faShareNodes,
    faCircleUp,
    faCircleDown,
  } from '@fortawesome/free-solid-svg-icons';
export default function MyActivity(){
    return(
        <View style = {styles.card}>
            <View style = {styles.postHeader}> 
                <View
                    style = {{
                      flexDirection : 'row',  
                    }}
                >
                    <Image 
                        style = {styles.Image}
                        source={{
                            uri : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                        }}
                    />
                    <View >
                        <Text style = {[TextStyles.header, {fontSize : 20}]} > Adam Voigt</Text>
                        <Text style = {[TextStyles.header, {fontSize : 15}]}> @adamvoigt</Text>
                    </View>
                </View>
                <View style = {{
                  flexDirection : 'row'
                }}> 
                    <Text> 10 min ago</Text>
                </View>
            </View>

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

        </View>
    )
}


const styles = StyleSheet.create({
    card : {
        backgroundColor : 'white',
        margin : 10,
        borderRadius : 10,
        elevation : 5,
      },
      postHeader: {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 10
      },
      Image : {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderRadius: 75
      },
      activity : {
        flexDirection : 'row',
        padding : 10
      }
})