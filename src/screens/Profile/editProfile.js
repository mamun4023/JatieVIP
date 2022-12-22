import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {theme, TextStyles} from '@/theme';
import {FontFamily} from '@/theme/Fonts';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { Icon, HorizontalLine, Button, TextField } from '@/components';
import DatePicker from 'react-native-date-picker';
import Moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
import { CropView } from 'react-native-image-crop-tools';

export default function EditProfile({navigation}){
    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)
    // console.log(Moment(date).format('DD-MM-YYYY'))

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [gender, setGender] = useState([
      {label: 'male', value: 'Male'},
      {label: 'female', value: 'Female'}
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
            
            <View style = {{flex : 1, padding : 15}}>
                <Text style = {[styles.headerText, TextStyles.header, {fontSize : 20}]}>Profile Picture</Text>
                <View style = {{flexDirection : 'row', justifyContent : 'space-evenly', alignItems : "center"}}> 
                    <View>
                        <Image 
                            source={{
                                uri : 'https://t4.ftcdn.net/jpg/00/88/53/89/360_F_88538986_5Bi4eJ667pocsO3BIlbN4fHKz8yUFSuA.jpg'
                            }}
                            style = {styles.profileImage}
                        />
                    </View>
                    <View style = {{flexDirection : 'row'}} >
                        <Button 
                            title= "Replace" 
                            onPress = {()=>console.log("work")}
                            style = {[styles.btn, styles.replaceBtn]}
                            
                        />
                        <Button 
                            title= "Remove" 
                            // onPress = {}
                            style={[styles.btn]}
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
                        />
                    </View>
                    <View style = {styles.textFiledContainer}> 
                        <Text style = {[styles.textFieldLebel]}> Email </Text>
                        <TextInput 
                            style={styles.textFiled}
                        />
                    </View>

                    {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
                    {/* <DatePicker
                        modal
                        mode='time'
                        open={open}
                        locale = "fr"
                        date={date}
                        onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        }}
                        onCancel={() => {
                        setOpen(false)
                        }}
                    />       */}

                    
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={gender}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setGender}
                    />
                            
               </View>
            </View>
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
    btn : {
        width : 100,
        margin : 10,
        height : 50,
        backgroundColor : theme.light.colors.primary,
        borderRadius : 10,
        borderWidth : 0,
        elevation : 8
    },
    removeBtn : {
        color : 'red'
    },
    replaceBtn : {
        color : 'red'
    },
    formContainer : {
        marginTop : 20
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
    }
})

