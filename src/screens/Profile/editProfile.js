import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image, TextInput, ScrollView, Modal, TouchableWithoutFeedback, Touchable, SafeAreaView} from 'react-native';
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
import { string } from 'prop-types';

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

    
    const [name, setName] = useState('Adam Voigt');
    const [email, setEmail] = useState('adam@gmail.com')
    const [loginPhone, setLoginPhone] = useState ('84584566644')
    
    
    const PickFromCamera = ()=>{
        ImagePicker.openCamera({
            width: ms(300),
            height: ms(400),
            cropping: true,
          }).then(image => {
            console.log(image);
            setReplace(image.path)
          });
    }

    const SelectFromGallery = ()=>{
        ImagePicker.openPicker({
            width: ms(300),
            height: ms(400),
            cropping: true,
            freeStyleCropEnabled : true,
            cropperCircleOverlay : true
          }).then(image => {
            console.log(image);
          });
    }

    return(
        <SafeAreaView style = {styles.container}>
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
                            title= {strings.addYourProfilePicture.replace}
                            style={styles.replaceBtn}
                            onPress = {()=> setReplace(true)}
                        />
                        <Button 
                            title= {strings.addYourProfilePicture.remove}
                            style={styles.removeBtn}
                            textStyle = {{
                              color : theme.light.colors.primary
                            }}
                        />
                    </View>
                </View>
                <View style = {styles.formContainer}>
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> {strings.SignUp.yourName} </Text>
                        <TextInput 
                            style={styles.textFiled}
                            value = {name}
                            onChangeText={(val)=> setName(val) }
                        />
                    </View>
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> {strings.SignUp.email} </Text>
                        <TextInput
                            style={styles.textFiled}
                            value = {email}
                            onChangeText = {(val)=> setEmail(val)}
                        />
                    </View>
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> {strings.SignUp.birthday} </Text>
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
                            />      
                            
                    </View>
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> {strings.SignUp.gender} </Text>
                        <DropDownPicker
                            placeholder= {strings.SignUp.genderPlaceHolder}
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
                        <Text style = {[styles.textFieldLebel]}> {strings.SignUp.country} </Text>
                        <DropDownPicker
                            placeholder= {strings.SignUp.countryPlaceHolder}
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
                        <Text style = {[styles.textFieldLebel]}> {strings.SignUp.loginPhone} </Text>
                        <TextInput
                            style={styles.textFiled}
                            value = {loginPhone}
                            onChangeText = {(val)=> setLoginPhone(val)}
                        />
                        <Text style = {styles.dropListTxt}> {strings.SignUp.loginFormBottomTxt}</Text>
                        
                    </View>
                    <View style = {{marginTop : vs(50)}} />            
                    <HorizontalLine color = {theme.light.colors.infoBgLight} />
                    <View>
                        <Button 
                            title= {strings.operations.save}
                        />
                    </View>
                    <View style = {{marginTop : ms(10)}} > 
                        <Button 
                            title = {strings.profile.closeMyAccount}
                            style={{
                                backgroundColor : theme.light.colors.white,
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
                        <Text style = {styles.bottomTextLebel}> {strings.profile.closeWarning} </Text>
                        <TouchableOpacity onPress={()=> setSubscriptionPopup(true)}> 
                            <Text style = {styles.bottomTextLink} > {strings.profile.manageSubscription} </Text>
                        </TouchableOpacity>

                        {/* Pop up message */}
                        <PopUp
                            open = {subscriptionPopup}
                            setOpen = {setSubscriptionPopup}
                        >
                            <TouchableOpacity onPress={()=> setSubscriptionPopup(false)}  style = {{padding : ms(20)}} > 
                                <FontAwesomeIcon 
                                    icon={faClose}
                                    size = {ms(30)}
                                    color = {theme.light.colors.primary}
                                />
                            </TouchableOpacity>
                            <Text style = {[styles.errorTxt, {color : theme.light.colors.black}]} > {strings.profile.cancelSubscription} </Text>
                            <View style = {{alignItems : 'flex-start'}}> 
                                <Text style = {styles.errorTxt}>{strings.profile.rule1}</Text>
                                <Text style = {styles.errorTxt} >{strings.profile.rule2} </Text>
                                <Text style = {styles.errorTxt}>{strings.profile.rule3} </Text>
                            </View>
                            <Button 
                                title= {strings.operations.ok}
                            />
                        </PopUp>
                    </View>  
                }    

               <View style = {{marginBottom : ms(50)}} />
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
                <Text style = {[TextStyles.label, {textAlign : 'center'}]}> {strings.profile.closeConfirm} </Text>
                <Button 
                    title= {strings.operations.no}
                    style={{
                        marginTop : vs(20)
                    }}
                    onPress = {()=> setOpenPopUp(false)}
                />
                <Button 
                    title= {strings.operations.yes}
                    style={{
                        marginTop : vs(10),
                        backgroundColor : theme.light.colors.white,
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
                        title = {strings.operations.imageFromCamera}
                        style={{
                            margin : ms(5)
                        }}
                        onPress = {PickFromCamera}
                    />
                    <Button 
                        title = {strings.operations.imageFromGallery}
                        style={{
                            margin : ms(5)
                        }}
                        onPress = {SelectFromGallery}
                    />
                </PopUp>
            }
        </SafeAreaView>
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
        color : theme.light.colors.black,
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
        backgroundColor : theme.light.colors.white,
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
        backgroundColor : theme.light.colors.white,
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

