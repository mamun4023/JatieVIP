import React, {useState} from 'react';
import { Config } from 'react-native-config';
import { getUser } from '@/selectors/UserSelectors';
import { strings } from '@/localization';
import {theme, TextStyles} from  '@/theme';
import {ms, vs} from 'react-native-size-matters';
import {faCheck, faChevronDown, faFlag, faMessage, faSearch, faUserPlus, faXmark} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import {useSelector, useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FontFamily } from '@/theme/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context';
import VideoPlayer from 'react-native-video-controls';
import { NAVIGATION } from '@/constants';
import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  FlatList, 
  Modal, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  StatusBar,
} from 'react-native';
import { 
  AppImageViewer,
  AppSwitch, 
  AppVideoPlayer, 
  Card, 
  CardBody, 
  CardFooter, 
  CardHeader, 
  CommentCard, 
  CommentContainer, 
  HorizontalLine, 
  Icon, 
  ModalDown,
  ModalList, 
  ShareFeed, 
  StatusNavigatorBar, 
  VerticalLine 
} from '@/components';


export function Home({navigation}) {
  const userType = useSelector(state => state.userType);
  const [vipArea, setVipArea] = useState('news_feed')
  const [open, setOpen] = useState(false)
  const [recentFilterOpen, setRecentFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('recent')
  const [follwingSwitch, setFollowingSwtich] = useState(false);
  const [showImageView, setShowImageView] = useState(false);
  const [feedImages, setFeedImages] = useState([])

  return (
    <SafeAreaView style={styles.container}>
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
              <Text style = {styles.nameTxt}> {strings.home.newFeed}</Text>
              <View style = {styles.filterContainer}> 
                <TouchableOpacity 
                  style = {styles.recent}
                  onPress = {()=> setRecentFilterOpen(true)}
                > 
                  <Text style = {styles.recentTxt} > {strings.home.recent} </Text>
                  <FontAwesomeIcon 
                    icon = {faChevronDown}
                    size = {ms(14)}
                    color = {theme.light.colors.secondary}
                  />
                </TouchableOpacity>
                <VerticalLine />
                <View style = {styles.recent}> 
                  <Text style = {styles.recentTxt}> {strings.home.followingOnly} </Text>
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
            size = {ms(22)}
          />
          <Icon 
            icon = {faBell}
            size = {ms(22)}
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
          <View style = {styles.sortModalContainer}>
            <View  style = {styles.sortByContainer}>
              <View>
                <Text style = {styles.sortByTxt}> {strings.home.sortByFeed} </Text>
              </View>
              <TouchableOpacity 
                style = {styles.recentList}
                onPress = {()=> setSortBy('recent')}  
              >
                {sortBy == 'recent'? CheckIcon : <Text> {"   "}</Text>} 
                <Text style = {styles.recentListTxt}> {strings.home.recent} </Text> 
              </TouchableOpacity>  
              <TouchableOpacity 
                style = {styles.recentList}
                onPress = {()=> setSortBy('today')} 
              > 
                {sortBy == 'today'? CheckIcon : <Text> {"   "}</Text>} 
                <Text style = {styles.recentListTxt}> {strings.home.popularToday} </Text>  
              </TouchableOpacity> 
              <TouchableOpacity 
                style = {styles.recentList}
                onPress = {()=> setSortBy('week')}
              > 
                {sortBy == 'week'? CheckIcon : <Text> {"   "}</Text>} 
                <Text style = {styles.recentListTxt}> {strings.home.popularThisWeek} </Text>
              </TouchableOpacity>  
              <TouchableOpacity 
                style = {styles.recentList}
                onPress = {()=> setSortBy('month')}
              >
                {sortBy == 'month'? CheckIcon : <Text> {"   "}</Text>}  
                <Text style = {styles.recentListTxt}> {strings.home.popularThisMonth} </Text>
              </TouchableOpacity>   
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <StatusNavigatorBar 
          title1 = {strings.home.newFeed}
          title2 = {strings.home.vipArea}
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
          data={FeedData}
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
                     <CardBody text = {item.feedText} />

                     {/* comments  */}
                     {item.comments?   
                     <CommentContainer
                        seeAllPress = {()=>navigation.navigate(NAVIGATION.comments)}
                      > 
                        <CommentCard
                          commentTxt = {item.comments.commentTxt}
                          name  = {item.comments.name}
                          userName = {item.comments.userName}
                          imageUrl = {item.comments.profilePic} 
                          time = {item.comments.time}
                          likeCount = {10}
                          disLikeCount = {3}
                        />
                     </CommentContainer>
                     : null }
                
                      {item.video? 
                        <AppVideoPlayer 
                          url={item.video}
                        /> : null
                      }
                        <TouchableOpacity 
                          style = {{flexDirection : 'row', justifyContent : 'center'}}
                          onPress = {()=> {setShowImageView(true), setFeedImages(item.feedImages)}}  
                        > 
                          {
                            item.feedImages.map(data =>
                              <View 
                                key={data.id}
                                style = {{flex : 1}}
                              >
                                <Image 
                                  source={{
                                    uri : data.url
                                  }}
                                  style = {{
                                    height : 200,
                                    width : '100%',
                                  }}
                                />
                              </View>
                              )
                          }
                        </TouchableOpacity>
            
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

      {/*  image view modal */}
      <AppImageViewer 
          visible={showImageView}
          setVisible = {()=>setShowImageView(false)}
          images = {feedImages}             
      />

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
    </SafeAreaView>
  );
}

const CheckIcon = (
  <FontAwesomeIcon 
    icon={faCheck}
    color = {theme.light.colors.primary}
  /> 
)

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
      color : theme.light.colors.black,
    }
  ],
  recentTxt :{
    fontFamily : FontFamily.Recoleta_medium,
    fontSize : ms(12, 0.3)
  },
  userPic : {
    width : ms(61), 
    height : ms(66),
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
  sortModalContainer : {
    flex : 1,
    backgroundColor : theme.light.colors.primaryBg
  },
  sortByContainer :{
    backgroundColor : theme.light.colors.white,
    padding : ms(20),
    marginTop : vs(60),
    elevation : 8
  },
  sortByTxt : {
    fontFamily : FontFamily.Recoleta_semibold,
    fontSize : ms(16, 0.3),
    color : theme.light.colors.secondary
  },
  recentList :{
    padding : 5,
    flexDirection : 'row',
    alignItems : 'center',
  },
  recentListTxt : {
    marginLeft : ms(10),
    fontFamily : FontFamily.Recoleta_semibold,
    color : theme.light.colors.black
  }

});



const FeedData = [
  {
    id : 1,
    name : "Adam Halt",
    userName : "@adam",
    image : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    time : '2',
    feedText : "We hope you love the products we recommend! All of them were independently seelcted by our editors. Some may have been sent as samples, but all opinions and reviews are our own. Just so you know",
    video : null,
    comments : {
        id : 1,
        name : 'halt',
        userName : '@halt',
        profilePic : 'data:image/jpeg;base64,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',
        time : '10',
        commentTxt : "This is beautiful"
      },
    feedImages : []
  },
  {
    id : 2,
    name : "Suli Keya",
    userName : "@suli",
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogJpc_o9afOD0CxRPp4t3xRVAvMeu06_e3H9yZ-t--w&s',
    time : '2',
    video: 'https://media.istockphoto.com/id/951326868/video/woman-kayaking-in-halong-bay.mp4?s=mp4-640x640-is&k=20&c=9Aq68HcOGvc_Ce80p0DyfIcj3y55hUojTTrC0l4MHPw=',
    feedText : "We hope you love the products we recommend! All of them were independently seelcted by our editors. Some may have been sent as samples, but all opinions and reviews are our own. Just so you know",
    feedImages : []
  },
  {
    id : 3,
    name : "Neail Noa",
    userName : "@neail",
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZYM5Jpcc7j3fxx_KjA6gHwKP5CbGHPk2ZYMixN5KYQ&s',
    time : '2',
    video: null,
    feedText : "We hope you love the products we recommend! All of them were independently seelcted by our editors. Some may have been sent as samples, but all opinions and reviews are our own. Just so you know",
    feedImages : [
      {
        id : 1,
        url : "https://media.istockphoto.com/photos/beautiful-woman-smiling-with-crossed-arms-picture-id1289220545?b=1&k=20&m=1289220545&s=612x612&w=0&h=K2EYdNGQdcg8YVa9JICMTQbNwNSAcnSCWUrTClGEiO0=",
      },     
    ]
  },
  {
    id : 4,
    name : "Neail Noa",
    userName : "@neail",
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZYM5Jpcc7j3fxx_KjA6gHwKP5CbGHPk2ZYMixN5KYQ&s',
    time : '2',
    video: null,
    feedText : "We hope you love the products we recommend! All of them were independently seelcted by our editors. Some may have been sent as samples, but all opinions and reviews are our own. Just so you know",
    feedImages : [
      {
        id : 1,
        url : "https://media.istockphoto.com/photos/beautiful-woman-smiling-with-crossed-arms-picture-id1289220545?b=1&k=20&m=1289220545&s=612x612&w=0&h=K2EYdNGQdcg8YVa9JICMTQbNwNSAcnSCWUrTClGEiO0=",
      },
      {
        id : 2,
        url : "data:image/jpeg;base64,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"
      },
            
    ]
  }
]
