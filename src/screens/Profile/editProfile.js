import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image, TextInput, ScrollView, Modal, TouchableWithoutFeedback, Touchable} from 'react-native';
import {theme, TextStyles} from '@/theme';
import {FontFamily} from '@/theme/Fonts';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faCalendar, faClose} from '@fortawesome/free-solid-svg-icons';
import { Icon, HorizontalLine, PopUp, Button } from '@/components';
import DatePicker from 'react-native-date-picker';
import Moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
import { CropView } from 'react-native-image-crop-tools';


export default function EditProfile({navigation}){
    const [date, setDate] = useState(new Date())
    const [openDatePicker, setOpenDatePicker] = useState(false)
    const [openPopUp, setOpenPopUp] = useState(false)
    const [openReplace, setReplace] = useState(false);
    const [genderListOpen, setGenderListOpen] = useState(false);
    const [genderValue, setGenderValue] = useState(null);
    const [gender, setGender] = useState([
      {label: 'Male', value: 'Male'},
      {label: 'Female', value: 'Female'}
    ]);

    
    return(
        <View style = {styles.container}>
            <View style ={styles.header}>
              <Icon 
                  icon={faArrowLeft}
                  size = {20}
                  onPress = {()=> navigation.goBack()}
                  style = {[styles.headerIcon]}
              />
              <Text style = {[styles.headerText, TextStyles.header]}>Edit Profile </Text>
            </View>
            <HorizontalLine color = {theme.light.colors.infoBgLight} />
            <ScrollView style = {{flex : 1, padding : 15}}>
                <Text style = {[styles.headerText, TextStyles.header, {fontSize : 20}]}>Profile Picture</Text>
                <View style = {{flexDirection : 'row', justifyContent : 'space-between', alignItems : "center"}}> 
                    <View>
                        <Image 
                            source={{
                                uri : 'https://t4.ftcdn.net/jpg/00/88/53/89/360_F_88538986_5Bi4eJ667pocsO3BIlbN4fHKz8yUFSuA.jpg'
                            }}
                            style = {styles.profileImage}
                        />
                    </View>
                    <View style = {{flexDirection : 'row'}} >
                        <TouchableOpacity onPress={()=> setReplace(true) }>  
                            <View style= {[styles.btn, {backgroundColor : theme.light.colors.primary, marginRight : 10, width : 120} ]}> 
                                <Text style = {[styles.btnTxt, {color : 'white'}]}> Replace </Text>
                            </View>           
                        </TouchableOpacity>
                        <TouchableOpacity>  
                            <View style= {[styles.btn, {width : 120}]}> 
                                <Text style = {[styles.btnTxt, {color : theme.light.colors.primary}]}> Save </Text>
                            </View>           
                        </TouchableOpacity>
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
                                locale = "fr"
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
                        />
                    </View>
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> Location </Text>
                        <TextInput
                            style={styles.textFiled}
                        />
                    </View>
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> User ID </Text>
                        <TextInput
                            style={styles.textFiled}
                        />
                    </View>
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> Login Phone </Text>
                        <TextInput
                            style={styles.textFiled}
                        />
                        <Text> You used this phone number to Login your account</Text>
                    </View>
                    <View style = {{marginTop : 20}} />            
                    <HorizontalLine color = "#eee" />
                    <TouchableOpacity>  
                        <View style= {[styles.btn, {backgroundColor : theme.light.colors.primary}]}> 
                            <Text style = {[styles.btnTxt, {color : 'white'}]}> Save</Text>
                        </View>           
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> setOpenPopUp(true)}>  
                        <View style= {styles.btn}> 
                            <Text style = {[styles.btnTxt, {color : theme.light.colors.primary}]}> Close My Account</Text>
                        </View>           
                    </TouchableOpacity>
                  
               </View>
               <View style = {{marginBottom : 50}} />
            </ScrollView>
          
          <PopUp
            open = {openPopUp}
            setOpen = {setOpenPopUp}
          >
            <> 
                <TouchableOpacity onPress={()=> setOpenPopUp(false)}  style = {{padding : 20}} > 
                    <FontAwesomeIcon 
                        icon={faClose}
                        size = {30}
                        color = {theme.light.colors.primary}
                    />
                </TouchableOpacity>
                <Text style = {TextStyles.label}> Are you sure want to close your Account? This action can't be undone.</Text>
                <TouchableOpacity>  
                    <View style= {[styles.btn, {backgroundColor : theme.light.colors.primary, width : 300}]}> 
                        <Text style = {[styles.btnTxt, {color : 'white'}]}> No</Text>
                    </View>           
                </TouchableOpacity>
                <TouchableOpacity>  
                    <View style= {[styles.btn, { width : 300}]}> 
                        <Text style = {[styles.btnTxt, {color : theme.light.colors.primary}]}> Yes</Text>
                    </View>           
                </TouchableOpacity>
            </>
            </PopUp>
            <Modal  
                visible = {openReplace}
                transparent = {true}
            >
                <TouchableWithoutFeedback onPress={()=>setReplace(false)}> 
                <View style = {styles.replaceContainer}>
                    <View  style  = {styles.replaceContent}> 
                        <Text style = {TextStyles.header}> Adjust Picture</Text>
                        <View
                            style = {{
                                height : 500,
                                backgroundColor : 'gray'
                            }}
                        />
                    {/* <View style = {{
                        width : "100%",
                        height : 500
                    }}> 
                        <Image 
                            source={{
                                uri : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                            }}
                            style = {{
                                width : 100,
                                height : 100
                            }}
                        />
                        <CropView
                        sourceUrl={"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"}
                        style={{ height: 100, width: 100}}
                        //   ref={cropViewRef}
                        onImageCrop={(res) => console.warn(res)}
                        keepAspectRatio
                        aspectRatio={{width: 16, height: 9}}
                        />
                    </View>
                    */}

                        <View style = {{alignItems : 'center'}}> 
                            <TouchableOpacity>  
                                <View style= {[styles.btn, {backgroundColor : theme.light.colors.primary, width : 300}]}> 
                                    <Text style = {[styles.btnTxt, {color : 'white'}]}> Crop & Close</Text>
                                </View>           
                            </TouchableOpacity>
                            <TouchableOpacity>  
                                <View style= {[styles.btn, { width : 300}]}> 
                                    <Text style = {[styles.btnTxt, {color : theme.light.colors.primary}]}> Replace</Text>
                                </View>           
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
        backgroundColor : theme.light.colors.white,
    },
    header : {
        padding : 15,
    },
    headerIcon: {
        color : theme.light.colors.info
    },
    headerText : {
        marginTop : 10,
        color : theme.light.colors.black
    },
    profileImage: {
        width : 100,
        height : 100,
        borderRadius : 100,
        borderWidth : 2,
        borderColor : theme.light.colors.primary,
        marginTop : 10
    },
    removeBtn : {
        color : 'red'
    },
    replaceBtn : {
        color : 'red'
    },
    formContainer : {
        marginTop : 20,
    },
    textFiledContainer : {

    },
    textFieldLebel : {
        color : theme.light.colors.black,
        fontFamily : FontFamily.BrandonGrotesque_bold,
        fontSize : 18
    },
    textFiled : {
        backgroundColor : "#eee",
        borderRadius : 10,
        borderWidth : 0,
        padding : 10,
        height : 45,
        fontFamily : FontFamily.BrandonGrotesque_regular,
        marginBottom : 15
    },
    btn : {
        marginTop : 10,
        borderWidth : 0,
        borderRadius : 10,
        padding : 8,
        alignItems : 'center',
        borderWidth : 2,
        borderColor : theme.light.colors.primary,
    },
    btnTxt : {
        fontFamily : FontFamily.BrandonGrotesque_bold,
        fontSize : 20
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
        padding : 10,
    }
})

