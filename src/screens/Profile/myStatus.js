import React, {useState} from 'react';
import { View, Alert, FlatList } from 'react-native';
import { theme } from '@/theme';
import {faTrash, faPen} from '@fortawesome/free-solid-svg-icons';
import {
  ModalDown, 
  ModalList, 
  Card, 
  CardHeader, 
  CardFooter, 
  CardBody
} from '@/components';
import {ms} from 'react-native-size-matters';

export default function MyStatus() {
  const [open, setOpen] = useState(false)
  return (
        <View>
          <FlatList 
              data={Data}
              key = {(props)=> props.id}
              renderItem = {({item})=> (
                <View style = {{margin : ms(10)}}> 
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
        </View>
  );
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
    text : "Initiated by IEEE President Toshio Fukuda and the IEEE 2020 IEEE Board Ad Hoc Committee on Lifelong Learning and Continuing Education, the IEEE Academies are designed to teach in-demand technical concepts in a new way to IEEE members working in industry. The IEEE Academies are a new learning format at IEEE that will help members understand",
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