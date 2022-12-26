

import React from "react"
import {
    View, 
    Modal, 
    TouchableWithoutFeedback, 
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {theme} from '@/theme'

export function PopUp({open, setOpen, height, children}){
    return(
            <Modal
                visible = {open}
                transparent = {true}
                animationType = 'fade'
            >
                <TouchableWithoutFeedback onPress={()=> setOpen(false)}>
                    <View style = {styles.container}> 
                        <View style = {[styles.body, {
                             height : height,
                        }]}> 
                            {children}
                        </View>
                    </View>
              </TouchableWithoutFeedback>
            </Modal>
    )
}


PopUp.prototype = {
    open : PropTypes.string.isRequired,
    setOpen : PropTypes.func.isRequired,
    height : PropTypes.string
}

const styles = StyleSheet.create({
   container : {
    flex : 1,
    alignItems : 'center',
    backgroundColor: theme.light.colors.primaryBg,
   },
   body: {
    width : '90%',
    backgroundColor : theme.light.colors.white,
    top : "30%",
    alignItems : 'center',
    padding : 10,
    borderRadius : 10,
   } 
})