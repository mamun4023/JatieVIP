import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, FlatList, Modal, TouchableOpacity, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { Config } from 'react-native-config';
import { getUser } from '@/selectors/UserSelectors';
import { strings } from '@/localization';
import {theme, TextStyles} from  '@/theme';
import {ms, vs} from 'react-native-size-matters';
import { AppSwitch, Card, CardBody, CardFooter, CardHeader, HorizontalLine, Icon, ModalDown, ModalList, ShareFeed, StatusNavigatorBar } from '@/components';
import {faCheck, faChevronDown, faFlag, faMessage, faPen, faPersonCirclePlus, faSearch, faUserPlus, faXmark} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import {useSelector, useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FontFamily } from '@/theme/Fonts';

export function Home({navigation}) {
  const userType = useSelector(state => state.userType);
  const [vipArea, setVipArea] = useState('news_feed')
  const [open, setOpen] = useState(false)
  const [recentFilterOpen, setRecentFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('recent')
  const [follwingSwitch, setFollowingSwtich] = useState(false)

  return (
    <View style={styles.container}>
      <StatusBar  barStyle= 'dark-content' backgroundColor= 'transparent'  />
      <View  style = {styles.header}>
        <View style = {styles.left}>
          <View>
             <Image 
              source={{
                uri : 'data:image/jpeg;base64,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'
              }}
              style ={styles.userPic}
             />
          </View>
          <View>
              <Text style = {styles.nameTxt}> News Feeds</Text>
              <View style = {styles.filterContainer}> 
                <View style = {styles.recent}> 
                  <Text> Recent </Text>
                  <Icon 
                    icon = {faChevronDown}
                    onPress = {()=> setRecentFilterOpen(true)}
                  />
                </View>
                <View style = {styles.recent}> 
                  <Text> Following Only </Text>
                  <AppSwitch 
                    value = {follwingSwitch}
                    onChange = {setFollowingSwtich}
                  />
                </View>
              </View>
          </View>
        </View>
        <View style = {styles.right}>
          <Icon 
            icon = {faSearch}
            size = {ms(20)}
          />
          <Icon 
            icon = {faBell}
            size = {ms(20)}
            style = {{marginLeft : ms(10)}}
          />
        </View>
      </View>

      {/* recent filter list */}
      <Modal
        visible = {recentFilterOpen}
        transparent = {true}
        animationType = "fade"
      >
        <TouchableWithoutFeedback onPress = {()=> setRecentFilterOpen(false)}> 
        
        <View style = {{
          flex : 1,
          backgroundColor : theme.light.colors.primaryBgLight
        }}>
        
        <View  style = {{
          backgroundColor : 'white',
          padding : ms(20),
          marginTop : vs(60),
          elevation : 8
        }}>

          <View>
            <Text style = {TextStyles.label}>Sort by Feed </Text>
          </View>
          
          <TouchableOpacity style = {styles.recentList}>
             {sortBy == 'recent'? <FontAwesomeIcon 
                icon={faCheck}
              /> : <Text> {"   "}</Text>
             } 
            <Text style = {styles.recentListTxt}> Recent </Text> 
          </TouchableOpacity>  

          <TouchableOpacity style = {styles.recentList}> 
            {sortBy == 'today'? <FontAwesomeIcon 
                icon={faCheck}
              /> : <Text> {"   "}</Text>
             } 
            <Text style = {styles.recentListTxt}> Popular Today </Text>  
          </TouchableOpacity> 
          <TouchableOpacity style = {styles.recentList}> 
            {sortBy == 'week'? <FontAwesomeIcon 
                icon={faCheck}
              /> : <Text> {"   "}</Text>
             } 
            <Text style = {styles.recentListTxt}> Popular This Week </Text>
          </TouchableOpacity>  
          <TouchableOpacity style = {styles.recentList}>
            {sortBy == 'month'? <FontAwesomeIcon 
                icon={faCheck}
              /> : <Text> {"   "}</Text>
             }  
            <Text style = {styles.recentListTxt}> Popular this Month </Text>
          </TouchableOpacity>   
        </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>


      <StatusNavigatorBar 
          title1 = "News Feed"
          title2 = "VIP Area"
          key1 = "vip_area"
          key2 = "news_feed"
          status = {vipArea}
          setStatus = {setVipArea}
          showLock = {true}
      />
      <HorizontalLine />
      <ShareFeed />

      {/* feed list */}
      <View style = {styles.feedContainer}>
        <FlatList 
          data={Data}
          keyExtractor = {(item)=> item.id}
          renderItem = {({item})=>(
              <View style = {{margin : 8}}>
                  <Card>
                     <CardHeader 
                        fullName = {item.name}
                        userName = {item.userName}
                        profilePic = {item.image}
                        time = {10}
                        isOfficial = {true}
                        showPin = {true}
                     />
                     <CardBody text = {item.text} />
                     <CardFooter 
                        likeCount={10}
                        disLikeCount = {1}
                        commentCount = {5}
                        morePress = {()=> setOpen(true)}  
                     />
                  </Card>
              </View>
          )}
        /> 
      </View>

      {/*  Slide up for follow, edit , review  */}
      <ModalDown
        open = {open}
        setOpen = {setOpen}
      >
        <ModalList 
          title= {strings.profile.follow}
          icon={faUserPlus}
          iconColor = {theme.light.colors.primary}
          iconBg = {theme.light.colors.primaryBgLight}           
        />
        <ModalList 
          title= {strings.profile.sendPrivateMessage}
          icon={faMessage}
          iconColor = {theme.light.colors.success}
          iconBg = {theme.light.colors.successBgLight}   
        />
        <HorizontalLine color = {theme.light.colors.infoBgLight} />
        <ModalList 
          title= {strings.profile.report}
          icon={faFlag}
          iconColor = {theme.light.colors.secondary}
          iconBg = {theme.light.colors.infoBgLight}          
        />
        <ModalList 
          title= {strings.profile.block}
          icon={faXmark}
          iconColor = {theme.light.colors.secondary}
          iconBg = {theme.light.colors.infoBgLight}
        />
      </ModalDown>

      {/* Recent filter list */}
     

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : theme.light.colors.white
  },
  header : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginBottom :  vs(10)
  },
  left: {
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    alignItems : 'center'
  },
  right : {
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    alignItems : 'center',
    padding : ms(10)
  },
  nameTxt : [
    TextStyles.header, {
      color : theme.light.colors.black
    }
  ],
  userPic : {
    width : ms(50), 
    height : ms(50),
    borderRadius : 100
  },
  filterContainer : {
    flexDirection : 'row',
    position : 'absolute',
    top : ms(25)
  },
  recent :{
    flexDirection : 'row',
    alignItems : 'center'
  },
  feedContainer : {
    flex : 1,
    backgroundColor : theme.light.colors.primaryBgLight
  },
  recentList :{
    padding : 5,
    flexDirection : 'row',
    alignItems : 'center',
  },
  recentListTxt : {
    marginLeft : ms(10),
    fontFamily : FontFamily.Recoleta_medium
  }
});



const Data = [
  {
    id : 1,
    name : "Adam Halt",
    userName : "@adam",
    image : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    time : '2',
    text : "We hope you love the products we recommend! All of them were independently seelcted by our editors. Some may have been sent as samples, but all opinions and reviews are our own. Just so you know"
  },
  {
    id : 2,
    name : "Suli Keya",
    userName : "@suli",
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogJpc_o9afOD0CxRPp4t3xRVAvMeu06_e3H9yZ-t--w&s',
    time : '2',
    text : "We hope you love the products we recommend! All of them were independently seelcted by our editors. Some may have been sent as samples, but all opinions and reviews are our own. Just so you know"
  },
  {
    id : 3,
    name : "Neail Noa",
    userName : "@neail",
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZYM5Jpcc7j3fxx_KjA6gHwKP5CbGHPk2ZYMixN5KYQ&s',
    time : '2',
    text : "We hope you love the products we recommend! All of them were independently seelcted by our editors. Some may have been sent as samples, but all opinions and reviews are our own. Just so you know"
  }
]
