import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image, TextInput, ScrollView, Modal, TouchableWithoutFeedback, Touchable} from 'react-native';
import {theme, TextStyles} from '@/theme';
import {FontFamily} from '@/theme/Fonts';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faCalendar, faClose} from '@fortawesome/free-solid-svg-icons';
import { Icon, HorizontalLine, PopUp, Button } from '@/components';
import {EditViewModal} from '../../components/CropPictureModal';
import DatePicker from 'react-native-date-picker';
import Moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
import {TopBackButton} from '@/components'
import { ms, s, vs } from 'react-native-size-matters';
import {strings} from '@/localization';
import ImagePicker from 'react-native-image-crop-picker';

export default function EditProfile({navigation}){
    const [date, setDate] = useState(new Date())
    const [openDatePicker, setOpenDatePicker] = useState(false)
    const [openPopUp, setOpenPopUp] = useState(false)
    const [subscriptionPopup, setSubscriptionPopup] = useState(false)
    const [openReplace, setReplace] = useState(false);
    const [genderListOpen, setGenderListOpen] = useState(false);
    const [genderValue, setGenderValue] = useState(null);
    const [gender, setGender] = useState([
      {label: 'Male', value: 'Male'},
      {label: 'Female', value: 'Female'}
    ]);
    const [locationListOpen, setLocationListOpen] = useState(false);
    const [locationValue, setLocationValue] = useState(null);
    const [location, setLocation] = useState([
      {label: 'United State', value: 'United State'},
      {label: 'United kingdom', value: 'United kingdom'},
      {label: 'Australia', value: 'Australia'}
    ]);
    const[closeAccount, setCloseAccount] = useState(false);
    const [replageImage, setReplageImage] = useState('https://t4.ftcdn.net/jpg/00/88/53/89/360_F_88538986_5Bi4eJ667pocsO3BIlbN4fHKz8yUFSuA.jpg')

    const PickFromCamera = ()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            setReplace(image.path)
          });
    }

    const SelectFromGallery = ()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            freeStyleCropEnabled : true,
            cropperCircleOverlay : true
          }).then(image => {
            console.log(image);
          });
    }

    
    return(
        <View style = {styles.container}>
            <TopBackButton onPress = {()=> navigation.goBack()} />
            <Text style = {[styles.headerText, TextStyles.header]}>{strings.profile.editProfile} </Text>
            <HorizontalLine color = {theme.light.colors.infoBgLight} />
            
            <ScrollView style = {{flex : 1, padding : 8}}>
                <Text style = {styles.profileTxt}>{strings.profile.profilePic}</Text>
                <View style = {{flexDirection : 'row', justifyContent : 'space-between', alignItems : "center"}}> 
                    <View>
                        <Image 
                            source={{
                                uri : replageImage
                            }}
                            style = {styles.profileImage}
                        />
                    </View>
                    <View style = {{flexDirection : 'row'}} >
                        <Button 
                            title= "Replace"
                            style={styles.replaceBtn}
                            onPress = {()=> setReplace(true)}
                        />
                        <Button 
                            title= "Remove"
                            style={styles.removeBtn}
                            textStyle = {{
                              color : theme.light.colors.primary
                            }}
                        />
                    </View>
                </View>
                <View style = {styles.formContainer}>
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> Your Name </Text>
                        <TextInput 
                            style={styles.textFiled}
                        />
                    </View>
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> Email </Text>
                        <TextInput
                            style={styles.textFiled}
                        />
                    </View>
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> Date of Birth </Text>
                        <TextInput 
                            style={styles.textFiled}
                            selectTextOnFocus={false}
                            editable = {false}
                            value = {Moment(date).format('DD-MM-YYYY')}
                        />
                            
                            <View
                                style = {{
                                    position :'absolute',
                                    top : 42,
                                    right : 15
                                }}
                            > 
                                <Icon 
                                    icon = {faCalendar} 
                                    color = {theme.light.colors.info}
                                    onPress={() => setOpenDatePicker(true)}
                                />
                            </View>
                            <DatePicker
                                modal
                                mode='date'
                                open={openDatePicker}
                                // locale = "fr"
                                date={date}
                                onConfirm={(date) => {
                                    setOpenDatePicker(false)
                                setDate(date)
                                }}
                                onCancel={() => {
                                    setOpenDatePicker(false)
                                }}
                                style = {{
                                    borderColor : 'red'
                                }}
                            />      
                            
                    </View>
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> Gender </Text>
                        <DropDownPicker
                            placeholder='Prefer Not to Say'
                            open={genderListOpen}
                            value={genderValue}
                            items={gender}
                            setOpen={setGenderListOpen}
                            setValue={setGenderValue}
                            setItems={setGender}
                            style={styles.textFiled}
                            textStyle = {styles.dropListTxt}
                        />
                    </View>
                    
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> User ID </Text>
                        <TextInput
                            style={styles.textFiled}
                        />
                    </View>
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> Location </Text>
                        <DropDownPicker
                            placeholder='Select location'
                            open={locationListOpen}
                            value={locationValue}
                            items={location}
                            setOpen={setLocationListOpen}
                            setValue={setLocationValue}
                            setItems={setLocation}
                            style={styles.textFiled}
                            textStyle = {styles.dropListTxt}
                        />
                    </View>
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> Login Phone </Text>
                        <TextInput
                            style={styles.textFiled}
                        />
                        <Text style = {styles.dropListTxt}> You used this phone number to Login your account</Text>
                        
                    </View>
                    <View style = {{marginTop : 50}} />            
                    <HorizontalLine color = {theme.light.colors.infoBgLight} />
                    <View>
                        <Button 
                            title="Save"
                        />
                    </View>
                    <View style = {{marginTop : ms(10)}} > 
                        <Button 
                            title="Close My Account"
                            style={{
                                backgroundColor : 'white',
                                borderWidth : 2,
                                borderColor : theme.light.colors.primary
                            }}
                            textStyle = {{
                                color : theme.light.colors.primary
                            }}
                            onPress = {()=> setOpenPopUp(true)}
                        />
                    </View> 
               </View>
                {closeAccount &&  <View style = {styles.bottomTextContainer}> 
                        <Text style = {styles.bottomTextLebel}>You can't close your account while your subsription is still active.</Text>
                        <TouchableOpacity onPress={()=> setSubscriptionPopup(true)}> 
                            <Text style = {styles.bottomTextLink} > Manage your subscription</Text>
                        </TouchableOpacity>

                        {/* Pop up message */}
                        <PopUp
                            open = {subscriptionPopup}
                            setOpen = {setSubscriptionPopup}
                        >
                            <TouchableOpacity onPress={()=> setSubscriptionPopup(false)}  style = {{padding : 20}} > 
                                <FontAwesomeIcon 
                                    icon={faClose}
                                    size = {30}
                                    color = {theme.light.colors.primary}
                                />
                            </TouchableOpacity>
                            <Text style = {[styles.errorTxt, {color : 'black'}]} > How do i cancel my subscription?</Text>
                            <View style = {{alignItems : 'flex-start'}}> 
                                <Text style = {styles.errorTxt}>1. Login to www.jativip.com</Text>
                                <Text style = {styles.errorTxt} >2. Click 'Manage'</Text>
                                <Text style = {styles.errorTxt}>3. Click 'Cancel Renewal'</Text>
                            </View>
                            <Button 
                                title= "Ok"
                            />
                        </PopUp>
                    </View>  
                }    

               <View style = {{marginBottom : 50}} />
            </ScrollView>
          
            <PopUp
                open = {openPopUp}
                setOpen = {setOpenPopUp}
            >
                <TouchableOpacity onPress={()=> setOpenPopUp(false)}  style = {{padding : 20}} > 
                    <FontAwesomeIcon 
                        icon={faClose}
                        size = {30}
                        color = {theme.light.colors.primary}
                    />
                </TouchableOpacity>
                <Text style = {[TextStyles.label, {textAlign : 'center'}]}> Are you sure want to close your Account? This action can't be undone.</Text>
                <Button 
                    title= "No"
                    style={{
                        marginTop : 20
                    }}
                    onPress = {()=> setOpenPopUp(false)}
                />
                <Button 
                    title= "Yes"
                    style={{
                        marginTop : 10,
                        backgroundColor : 'white',
                        borderWidth : 2,
                        borderColor : theme.light.colors.primary
                    }}
                    textStyle = {{
                        color : theme.light.colors.primary
                    }}
                    onPress = {()=> {setCloseAccount(true); setOpenPopUp(false)}}
                />
            </PopUp>

        {/* Replace Popup */}
        {openReplace &&  
            <PopUp
                open = {openReplace}
                setOpen = {setReplace}
            >
                
                    <Button 
                        title= "Pickup From Camara"
                        style={{
                            margin : 5
                        }}
                        onPress = {PickFromCamera}
                    />
                    <Button 
                        title= "Select From Gallery"
                        style={{
                            margin : 5
                        }}
                        onPress = {SelectFromGallery}
                    />
                
                
            </PopUp>}
         
        
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : theme.light.colors.white,
    },
    header : {
        padding : ms(15),
    },
    headerIcon: {
        color : theme.light.colors.info
    },
    headerText : {
        marginTop : vs(10),
        color : theme.light.colors.black,
        paddingLeft : ms(8)
    },
    profileTxt : {
        fontFamily : FontFamily.Recoleta_bold,
        color : 'black'
    },
    profileImage: {
        width : s(100),
        height : s(100),
        borderRadius : 100,
        borderWidth : 2,
        borderColor : theme.light.colors.primary,
        marginTop : vs(10)
    },
    formContainer : {
        marginTop : vs(20),
    },
    textFiledContainer : {

    },
    textFieldLebel : {
        color : theme.light.colors.black,
        fontFamily : FontFamily.BrandonGrotesque_bold,
        fontSize : ms(18, 0.3)
    },
    textFiled : {
        backgroundColor : theme.light.colors.inputFiled,
        borderRadius : 10,
        borderWidth : 0,
        padding : ms(10),
        height : vs(45),
        fontFamily : FontFamily.BrandonGrotesque_regular,
        marginBottom : vs(15)
    },
    replaceBtn: {
        width : '38%',
        marginLeft : ms(10),
        elevation : 2
    },
    removeBtn : {
        width : '38%',
        marginLeft : ms(10),
        backgroundColor : 'white',
        borderWidth : 2,
        borderColor : theme.light.colors.primary,
        elevation : 2
    },
    replaceContainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : theme.light.colors.primaryBg
    },
    replaceContent: {
        backgroundColor : 'white',
        width : '100%',
        padding : ms(10),
    },

    dropListTxt : {
        fontFamily : FontFamily.BrandonGrotesque_medium
    },
    bottomTextContainer : {
        alignItems : 'center', 
        padding : 10,
    },
    bottomTextLebel : {
        textAlign : 'center',
        fontFamily : FontFamily.BrandonGrotesque_medium,
        fontSize : 16
    },
    bottomTextLink : {
        color : theme.light.colors.primary,
        textDecorationLine : 'underline',
        fontFamily : FontFamily.BrandonGrotesque_medium,
        fontSize : ms(20, 0.3)
    },
    errorTxt : {
        fontFamily : FontFamily.BrandonGrotesque_medium,
        fontSize : ms(20, 0.3)
    }
})

