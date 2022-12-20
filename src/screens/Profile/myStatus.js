import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';

import {
  faComment, 
  faEllipsis,
  faShareNodes,
  faCircleUp,
  faCircleDown,
  faTrash,
  faPen
} from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@/components';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ModalDown, ModalList} from '@/components'

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
                          <Text style = {[TextStyles.header, {fontSize : 15, color : 'black'}]} > Adam Voigt</Text>
                          <Text style = {[TextStyles.header, {fontSize : 12}]}> @adamvoigt</Text>
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
              iconColor= {theme.light.colors.info}
            />
            </ModalDown>
        </View>
  );
}

const styles = StyleSheet.create({
  postContainer : {
    flex : 1,
    backgroundColor: theme.light.colors.primaryBgLight,
  },
  postCard : {
    backgroundColor : 'white',
    margin : 10,
    borderRadius : 10,
    elevation : 5
  },
  postHeader: {
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding : 10
  },
  Image : {
    width: 35,
    height: 35,
    borderWidth: 2,
    borderRadius: 75
  },
  postText : {
    fontFamily : FontFamily.BrandonGrotesque_medium,
    textAlign : 'justify'
  },
  icon : {
    margin : 5,
  },
  footer : {
    flexDirection : "row",
    justifyContent : 'space-between',
    backgroundColor : theme.light.colors.infoBgLight,
    padding : 8,
    borderRadius : 10
  },

  modalIconContainer: {
    flexDirection : 'row',
    margin : 10,
    alignItems : 'center'
  },

  modalIcon : {
    backgroundColor : theme.light.colors.infoBgLight,
    padding : 3,
    borderRadius : 100
  },

  editIcon : {
    margin : 10,
    color : theme.light.colors.info
  },
  removeIcon: {
    margin : 10,
    color : theme.light.colors.secondary
  },
  modalText : {
    fontFamily : FontFamily.Recoleta_bold,
    fontSize : 18,
    paddingLeft : 8,
    color : theme.light.colors.black
  }
});
