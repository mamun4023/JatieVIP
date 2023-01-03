import React, {useState} from "react"
import { View, Text, StyleSheet } from "react-native"
import Video from "react-native-video";
import VideoPlayer from "react-native-video-controls"

export const AppVideoPlayer = ({url})=>{
    return (
        <View >
            <VideoPlayer 
                source={{uri: 'https://media.istockphoto.com/id/951326868/video/woman-kayaking-in-halong-bay.mp4?s=mp4-640x640-is&k=20&c=9Aq68HcOGvc_Ce80p0DyfIcj3y55hUojTTrC0l4MHPw='}}   // Can be a URL or a local file.
                      // controls = {true}
                      // poster = "https://img.freepik.com/free-icon/rounded-play-button_318-9366.jpg?w=2000"
                      // paused = {true}
                      

                      // style={{
                      //   height : 300,
                      //   width : '100%',
                      //   position : 'absolute'
                      // }} 
                />

                <Text> Vide play</Text>
        </View>
    )
}

