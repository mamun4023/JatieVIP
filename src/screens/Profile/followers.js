import { Button, Icon } from '@/components';
import React, {useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    StatusBar, 
    Image, 
    Modal,
    TouchableWithoutFeedback,
    TouchableOpacity 
} from 'react-native';
import {
    faComment, 
    faEllipsis,
    faShareNodes,
    faCircleUp,
    faCircleDown,
    faArrowLeft,
    faUserMinus,
    faMessage,
    faFlag,
    faXmark,
    faUserPlus
  } from '@fortawesome/free-solid-svg-icons';
  import { theme } from '@/theme'; 
  import { TextStyles } from '@/theme';


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
    },
    {
        id : 9,
        name : "Teng Hu",
        userName : "@teng",
        image : 'https://image.shutterstock.com/image-photo/portrait-mature-businessman-wearing-glasses-260nw-738242395.jpg',
    },
    {
        id : 10,
        name : "Lacara jones",
        userName : "@jones",
        image : 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=',
    },
    {
        id : 11,
        name : "Dusana Semanov",
        userName : "@dusana",
        image : 'https://image.shutterstock.com/image-photo/portrait-mature-businessman-wearing-glasses-260nw-738242395.jpg',
    }
]

export default function Followers({navigation}){
    const [open, setOpen] = useState(false);

    return(
        <View style = {styles.container}>
            <StatusBar barStyle= 'dark-content' backgroundColor= 'transparent' />
            <View style ={{
                padding : 5
            }} >
                <Icon 
                    icon={faArrowLeft}
                    size = {20}
                    onPress = {()=> navigation.goBack()}
                />
            </View>
            <View style = {{
                paddingTop : 5,
                paddingBottom : 5,
                flexDirection : 'row',
                alignItems : 'center'
            }}> 
                <Text style = {TextStyles.header}> Followers </Text>
                <Text style = {[TextStyles.title, {
                    backgroundColor : "#eee",
                    padding : 3,
                    borderRadius : 100
                }]}>  24 </Text>
            
            </View>
            <View>
                <FlatList 
                    data={Data}
                    key = {(props)=>props.id}
                    initialNumToRender ={10}
                    renderItem = {({item})=> {
                        return (
                            <View 
                                style = {{
                                    padding  : 2,
                                    flexDirection : 'row',
                                    justifyContent : 'space-between',
                                    margin : 5,
                                    alignItems : 'center'
                                }}
                            >   
                                <View style = {{
                                    flexDirection : "row",
                                    alignItems : "center"
                                }}> 
                                    <Image 
                                        source={{
                                            uri : item.image
                                        }}
                                        style = {{
                                            height : 50,
                                            width : 50,
                                            borderRadius : 100,
                                            borderWidth : 1,
                                            borderColor : 'gray'
                                        }}
                                    />
                                    <View> 
                                        <Text style = {TextStyles.label}> {item.name} { " "} </Text> 
                                        <Text> {item.userName}  </Text>
                                    
                                    </View>
                                </View>
                                <Icon 
                                    icon={faEllipsis}
                                    size = {20}
                                    onPress = {()=> setOpen(true)}
                                />
                            </View>
                        )
                    } }
                />
            </View>

            {/* modal start */}
            <Modal
              visible = {open}
              transparent = {true}
              animationType = "slide"
            
            >
              <TouchableWithoutFeedback 
                onPress={()=> setOpen(false)}
              >
              <View 
                style = {{
                  flex : 1,
                  backgroundColor: 'rgba(232, 174, 11, 0.2)',
            
                }}
              > 
                <View
                  style = {{
                    height : 200,
                    width : '100%',
                    backgroundColor : 'rgba(255,255,255,1)',
                    position : 'absolute',
                    bottom : 0,
                  }}
                >

                
                  <View style = {{

                  }}>
                    <TouchableOpacity style = {{
                      flexDirection : 'row',
                      padding : 10,
                      alignItems : 'center'
                    }}>
                      
                      <Icon 
                        icon={faUserPlus}
                        size = {20}
                        style = {styles.icon}
                      />
                      <Text> Follow </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style = {{
                        flexDirection : 'row',
                        padding : 10,
                        alignItems : 'center'
                      }}
                    > 
                        <Icon 
                          icon={faMessage}
                          size = {20}
                        />
                        <Text> Send private message </Text>
                       
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style = {{
                        flexDirection : 'row',
                        padding : 10,
                        alignItems : 'center'
                      }}
                    > 
                        <Icon 
                          icon={faFlag}
                          size = {20}
                        />
                        <Text> Report User </Text>
                       
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style = {{
                        flexDirection : 'row',
                        padding : 10,
                        alignItems : 'center'
                      }}
                    > 
                        <Icon 
                          icon={faXmark}
                          size = {20}
                        />
                        <Text> Block </Text>
                       
                    </TouchableOpacity>

                  </View>
                  
                  
                  </View>
              </View>
              </TouchableWithoutFeedback>
            </Modal>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 15,
        backgroundColor : "white"
    }
})