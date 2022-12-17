
import React from 'react';
import { Text, View, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import { theme } from '@/theme'; 
import { styles } from '@/screens/Profile/myStutus.style';
import { TextStyles } from '@/theme';
import {
  faComment, 
  faEllipsis,
  faShareNodes,
  faCircleUp,
  faCircleDown,
  faRemove,
  faEdit,
  faTrash,
  faPen
} from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@/components';
import { useState } from 'react';

export default function MyStatus() {
  const [open, setOpen] = useState(false)

  return (
        <View style = {styles.postContainer}>
            <View style = {styles.postCard}> 
              <View>
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
                   {/* post body */}
                   <View style = {{padding : 10}}> 
                      <Text style = {styles.postText} >This is post body where you can post your feed  This is post body where you can post your feed  This is post body where you can post your feed  This is post body where you can post your feed This is post body where you can post your feedThis is post body where you can post your feed</Text>
                    </View> 
                   {/* footer  */}
                   <View style = {styles.footer} >
                      <View style ={{
                        flexDirection : 'row',
                        alignItems : 'center',
                        justifyContent : 'space-around' 
                      }}>
                        <Icon 
                          icon={faCircleUp}
                          size = {15}
                          style = {[styles.icon, {
                            color : 'green'
                          }]}
                        /><Text>32</Text>
                        <Icon 
                          icon={faCircleDown}
                          size = {15}
                          style = {[styles.icon, {
                            color : 'red'
                          }]}
                        /><Text>5 </Text>
                        <Icon 
                          icon={faComment}
                          size = {15}
                          style = {[styles.icon, {
                            color : 'gray'
                          }]}
                        /> 
                        <Text>10 </Text>
                      </View>
                      <View style = {{
                        flexDirection : 'row'
                      }}> 
                        <Icon 
                          icon={faShareNodes}
                          size = {15}
                          style = {[styles.icon, {
                            color : 'gray'
                          }]}
                        />

                        <Icon 
                          icon={faEllipsis}
                          size = {15}
                          style = {[styles.icon, {
                            color : 'gray'
                          }]}
                          onPress = {()=> setOpen(true)}
                        />
                      
                      </View>
                   </View>
                </View>
            </View>

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
                    <View style = {{
                      flexDirection : 'row',
                      padding : 10,
                      alignItems : 'center'
                    }}>
                      
                      <Icon 
                        icon={faPen}
                        size = {20}
                        style = {styles.icon}
                      />
                      <Text> Edit post</Text>
                    </View>

                    <View 
                      style = {{
                        flexDirection : 'row',
                        padding : 10,
                        alignItems : 'center'
                      }}
                    > 
                        <Icon 
                          icon={faTrash}
                          size = {20}
                        />
                        <Text> Delete post </Text>
                       
                    </View>

                  </View>
                  
                  
                  </View>
              </View>
              </TouchableWithoutFeedback>
            </Modal>
        </View>
  );
}

