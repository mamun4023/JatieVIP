import React, { useState }  from "react";
import {View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity} from 'react-native';
import { theme } from "@/theme";
import { HorizontalLine, Icon, ModalDown, TopBackButton, ModalList } from "@/components";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { ms, vs } from "react-native-size-matters";
import { FontFamily } from "@/theme/Fonts";
import { strings } from "@/localization";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBellSlash, faBoxArchive, faEllipsis, faFlag, faImage, faPaperPlane, faSearch, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";


export default function Chat({navigation}){
    const [openCrud, setOpenCrud] = useState(false)

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.header}> 
                <View>
                    <TopBackButton onPress = {()=> navigation.goBack()} />
                </View>
                <View style = {styles.headerIconContainer}>
                    <Icon 
                        icon = {faSearch}
                        size = {ms(22)}
                        style = {styles.searchIcon}
                    />
                    <Icon 
                        icon = {faBell}
                        size = {ms(22)}
                        style = {styles.bellIcon}    
                    />
                </View>
            </View>
            <View style = {styles.userContainer}>
                <View style  ={{flexDirection : "row"}}> 
                    <Image 
                        source={{
                            uri : Data.profilePic
                        }}
                        style = {{
                            height : ms(40),
                            width : ms(40),
                            borderRadius : 100
                        }}
                     />
                    <View style = {styles.userNameTxtContainer}>
                        <Text style = {styles.fullnameTxt}> {Data.name} </Text>
                        <Text style = {styles.usernameTxt} > {Data.userName} </Text>
                    </View>          
                </View>
                <View>
                    <Icon 
                        icon = {faEllipsis}
                        size  = {ms(20)}
                        style = {{
                            marginTop : vs(18)
                        }}
                    />
                </View>
            </View>
            <HorizontalLine />
            <View style = {styles.messageBody}>
                <View style = {{margin : ms(10)}}>
                    <View style = {styles.messageContainer}>
                        <TouchableOpacity 
                            style = {styles.messageTxtContainer} 
                            onLongPress = {()=> setOpenCrud(true)}
                        >
                            <Text style = {styles.messageTxt}>{Data.sendTxt} </Text> 
                        </TouchableOpacity>
                        <View> 
                            <Image 
                                source={{
                                    uri : Data.profilePic
                                }}
                                style = {styles.messageWithImage}
                            />
                        </View>
                    </View>
                    <View style = {styles.replyContainer}>
                        <Text style = {[styles.messageTxt,{color : theme.light.colors.black}]}>{Data.replyTxt}</Text>
                    </View>
                </View>

                {/* text filed */}
               <View style = {styles.txtInputContainer}>                  
                    <TextInput 
                       placeholder= {strings.message.inputPlaceholder}
                       style = {styles.inputBox}
                    />
                    <View style = {styles.inputBoxIconContainer}>
                        <TouchableOpacity
                            style = {[styles.boxIcon, {backgroundColor : theme.light.colors.successBgLight}]}
                        >
                            <FontAwesomeIcon 
                                icon={faImage}
                                size = {ms(16)}
                                color = {theme.light.colors.success}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {[styles.boxIcon, {backgroundColor : theme.light.colors.primaryBgLight}]}
                        >
                            <FontAwesomeIcon 
                                icon={faPaperPlane}
                                size = {ms(16)}
                                color = {theme.light.colors.primary}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {openCrud && 
                <ModalDown
                    open = {openCrud}
                    setOpen = {setOpenCrud}
                >
                    <ModalList 
                        title= {strings.message.archive}
                        icon={faBoxArchive}
                        iconColor = {theme.light.colors.primary}
                        iconBg = {theme.light.colors.primaryBgLight}           
                    />
                    <ModalList 
                        title= {strings.message.snoozeNotification}
                        icon={faBellSlash}
                        iconColor = {theme.light.colors.info}
                        iconBg = {theme.light.colors.infoBgLight}   
                    />
                    <ModalList 
                        title= {strings.message.snoozeNotification}
                        icon={faTrash}
                        iconColor = {theme.light.colors.error}
                        iconBg = {theme.light.colors.infoBgLight}   
                    />
                    <HorizontalLine color = {theme.light.colors.infoBgLight} />
                    <ModalList 
                        title= {strings.operations.report}
                        icon={faFlag}
                        iconColor = {theme.light.colors.secondary}
                        iconBg = {theme.light.colors.infoBgLight}
                        onPress = {()=> {
                            // setOpenReport(true)
                            // setOpen(false) 
                        }}          
                    />
                    <ModalList 
                        title= {strings.operations.block}
                        icon={faXmark}
                        iconColor = {theme.light.colors.secondary}
                        iconBg = {theme.light.colors.infoBgLight}
                    />
                </ModalDown>
            }
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : theme.light.colors.white
    },
    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    headerIconContainer : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    bellIcon : {
        marginRight : ms(9)
    },
    searchIcon : {
        marginRight : ms(9)
    },
    userContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : ms(9)
    },
    userNameTxtContainer : {
        padding : ms(2)
    },
    fullnameTxt : {
        fontFamily : FontFamily.Recoleta_bold,
        fontSize : ms(14, 0.3),
        color : theme.light.colors.black
    },
    usernameTxt : {
        fontFamily : FontFamily.Recoleta_regular,
        fontSize : ms(14, 0.3)
    },
    messageBody :{
        flex : 1,
        backgroundColor : theme.light.colors.primaryBgLight
    },

    messageContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    messageTxtContainer : {
        width : '85%',
        backgroundColor : theme.light.colors.primary,
        borderRadius : 10,
        padding : ms(10)
    },
    messageTxt : {
        fontFamily : FontFamily.BrandonGrotesque_regular,
        fontSize : ms(16, 0.3),
        color : theme.light.colors.white
    },
    messageWithImage : {
        height : ms(40),
        width : ms(40),
        borderRadius : 100,
        position : 'absolute',
        bottom : 0,
        right : ms(3)
    },
    replyContainer : {
        backgroundColor : theme.light.colors.white,
        borderRadius : 10,
        marginTop : vs(10),
        width : '90%',
        padding : ms(8),
        marginLeft : '10%',
    },
    txtInputContainer : {
        backgroundColor : theme.light.colors.white,
        position : 'absolute',
        bottom : 0,
        width : '100%'
    },
    inputBox : {
        fontFamily : FontFamily.BrandonGrotesque_regular,
        fontSize : ms(16, 0.4),
        paddingRight : ms(90),
        paddingLeft : ms(9)
    },
    inputBoxIconContainer : {
        flexDirection : 'row',
        alignContent : 'center',
        position : 'absolute',
        right : ms(8),
        top : ms(3)
    },
    boxIcon : {
        margin : ms(5),
        borderRadius : 100,
        padding : ms(8)
    },
 
})


const Data = {
    id : 1,
    name : 'Sonnu Albert',
    userName : '@sonnu',
    profilePic : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAwwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYHAQj/xAA7EAACAQMDAgQEBAMHBAMAAAABAgMABBEFEiExQQYTUWEiMnGBFEKRoSMzUgcVcrHB0fBjsuHxJDVi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAIhEAAgIDAQADAAMBAAAAAAAAAAECEQMSITEyQVETYXEE/9oADAMBAAIRAxEAPwDdW6EqCRyaKdQYCMZyKrrsyx3a8/DnpVjZzCTC1RTXglGT1vTZPLeVvk/oNZzSdQaxuDJsVtvUA4rofiTT5b21KQttJHFc8bRntZdkhYuOS1QycCb7SdaElvuYlTjpSiuGe4MkiDBHeshaXkkcm2RWKqu3A4FaOwkW4ljITCnGKCbY6Ide0+bUCoi+FF/esnqfnaaoi2FdzY5rr0aRx2uWAGBWO1xba/mZSqko3U004aoSrMZHcGQl5ck4x0ppnaZtkYwPWrDUIFt5iigEEdAKCNpPH/FQDAPasjts5RSLDR7eVrxQ5Hl45rfQ6VYvafGEbA446Vz6K/e3jyvXv9aMtNZv5498knlxgdAM5pscv0bWnSNCbOC1lc24C5GOOhoc65LZKATuCnp7VnzrExcKsmRnkkf61FcX0aygSO3qW6j6VW2PozUSX4uxgOm1hnGORUzQW9xEA6jfjqtZZLzaFkgYBT+YDIz6H0rQeHNQtryY2lyAk/5ewb6e9FW2FwaRQ6j4ZiTzJElbB9O1YLUI5YbgxmTlGxzXWvFtrc2Vo5hJK+orlF9ExnZnOWNc216Z5pLwCYAnkjn0qNkEb57VNtPIxio1Qs+T+ldYlUMmWMcrQzMG5oiYbmwaHZNg4rhkQPGCeDTJodqjJojGAGqGYl+KIwOVGaVP2GlROtH0vcRSO5kOSOgHpUfnvEmcnjuc1YKeKbPCJIioUcjk1Whwa21RJlKPz2Bqq1iNPMOwFi/HsKDu7K6i1JDb8RH5h6UTeTFEDSZyGFTlb9GSKfUrWODaxyGXsT1qw8PytKFKY4bBIqnu5X1C8e3PxMOADWk0Kw/BW4jJ+IHceKmvQmm8xZLdlfvxzWT1LT1jneWOR8Ecr2qfVLyS2bfDlj3U9Kp9S1edotz4UHjijkyWgUkByMGYuep/ak9wqIVIzmqyK53Au2WGe9SQ3K3ThAO/pULZMfDArAzTOFiXk5OKz0/im41O7/BaJbkxA4XZHlm9/ameNdVfYum2JJLsEIX83t9zXSvAHheDw9pMJaNTdON0shHJPp9KPIRs148ZlrPQPEcyZuCkQPZutHXeif3fbKXXzc8uSM4P0rpHBXpQs9rHLkOAQe1J/IzQoROUw3W12AIAXgg9CPTNEfHEVlhJHIYDPymp/G/huKzga6tn29zjjNUnhPVTdrJZzEOR8hPX6VVStWTap0dKj1VdT0Xybj4rhBtJ/q9DXOtWsJFld2AAzxxxV7o11tlZM8o5Rh7VP4hWFrcGPk59aO1+mTNBIwIiLE4FNaEqCRj7VbwWu9iR2oK+PlS+XiiZ0iokGG96ZJGwX4lP3o2SIA5NQzOHwOlcqKJATqQg471CU289aOkXkADIqGaBxF5namCCGlXu9e9KuBR9NrUi1GlSrWhMpR55KN1UfWh72wjeJiwBFGrQerSOtq+zqRxXSqgpGRtYYrXVZZTgnPf6U/VNdWKVfK6DrjvWWvr64jvnWTcGz+1QSSyTOvJOaxudDf4bBLtbiLcxGTyapNVkWbcsfAzxQpneGLbk81A0zEcGpbWLNNkTgKpy547U23l/DxyzHqqkL9TSmRiPUmq7WG/C6YyA/G5557n/AGFMugxQuRD4OVb3xO+pXULzW9ivmlEPOTwv+tdn0fW7XWbUy2e5VVtpVxgrXE/Aml32p3t69mzpCgXzdpxv56Z7V1LwN4eutKN7Pd3LyrMMJE6/Lye/ejlr9N2NMn1XxnBpt6bKOxuLqZeuwYUferCw1mS9iDy2iw5HRZgzD7VRaz4flln89S7jd8SgZ/SqXS/DGupeNNBqcirvJSOaHgL6Hnn60iUWijTT8NF4ys5L/R7kQHcwTcoHeuK+GrprTVZN+VOOR6Yr6B/DSQ22JWDt34618/a3Gtv4lvlh4XecAU2F2mieWNUzcQXYTUIJ+kd0mGPow/4KsbyxvL1zHDIMHkDFZq3Vn8PQyk4dCSp+4NbLSdQRLSKWTocDPvTfdkssNoisNEazjZpGywHI96zXiG3BuRJn4j0FbK81WKW3kePlsY4NYKa5kmunWUHI7HtTmWSVUV8r/lI5FCSKwG4g49aLu1J3Fc0nYSWhz1xjFcvQJAKS/FytD3V2yqYl+XPepVGWwKGngZ5j6CmToJGFBAPFe1J5C+teUbBR9Jo1Sq9V4uYx+ap0nUjg1RNFkg1WplwA0LUK12i9+frTZL5PLPP710pKh1E594otcXu4KeOSaAsiCavvEE8cnPeqK2QDc2e/SvOmxq6SXY3HOaDztPINTTSHcc9KjYhloRfBZoXm5PHBFUXiicgbPQD9TyauLYGS8WH+o4qs8VWr/jfLXkYBP6VWL6PhjcWzVf2MzxQaHqAOPMF1uPrjYMf61srrxXZ2rLFLFMmTgsEJxnvx2rkngu6/uzxFDZSSER3iFHHbP5T/AM9a6Ze3bm6UvpkTbAAC0y5x96E09jXiVqkXFrqKSvlG8yFuj7fainuEXJj49qpV1SSWIJHpc6LkZZXQqo9fmpxMky8tipOyjQReXTOpAz09a45q2n+f4gvNuCvmZyOvPOP3rqOozpZWkju2cDisJpMRZpbqTl55DJz6Dp/lmq4uJsjkVtIJngWLSI4AMj4lH2GKn0+M/wB0PG56fGM9ulQ6q5U2Ueeilj96OtADBIh6Y2n6HFF+CuNpjNMuEjMkUgA4GM/vVRqZQ35dRyeuKivJCsnBweORQrsx+Ik/Wns86V3RM2w/XvQbKuCRTWclu9eH+U3rRTs5IE2gT5A4pl44RsJyTXsDMZCCc0nCJdRtJ03DNU+g0DfhLo8+W/PtSro6T2exduwLgYpU+pwLJ4hueqA+1WFv4mb8OA38zHShpPDzizDCT4gM1VW9u4l2yKcg1n24aoouZNbuZRwuD2pj6rcNHtLYJpuzYnyEmgbhJMkrG5+gqDyOXAzVDpJWfksTTopAnBGahiSXPMT/AKVOLSZhxGRSNCo8k/idKj2EDBFebzE+1xgj1qVZVmBVgR/+l7UVw6rJNJhK30cmOc9TTtaiijeSe4wFj+YnufQUVYbLYGZ/jIU7ewHuay/ii9luhtziLPHuaMeyNcIaQM48rT37Xedrh9yn+kjpXbNFuLPX9FtL2RR5jgh8dVYcGuHAEMcd+DR2leINS0ZmSyuNsZOTEwypPr7VonHZcJRlq7Z3uO2treP5sDHc1SazrlhpsRaWZBjoM81itO1jV9c06SZrgqyOVYRjFDrYxWsour4ebMBuVXPC+/uajpXpbe/CyvrmfVis13mC1zlYm4Zh6kdhT4k3IioMBzjHoOM/tVZZTSalqCg5ZdxyPYD/AFOKt2/MY+SPhDe/c/bk/pTPnBV0r9TmD6hAAchzsX6L3/erK1yEl5xlciqWQB9SHBCJH8Ofc1fRBRbSSHjamBXS4jor0obqLjB7c1XPJsYZ6VcXbK4JXr6Vm55MyMDVF4efkj0NV0Zh05ps4AiO3tQceQaMTmFiaaKFSK62H8VieKFum3ynPY0YnAY1XkEyNn1pzg+K/ZY1Bc5A9a9qvwaVdYDuLzoV2FRtqCOyR33bABVbFdsCNwqzW5VUDZx9Kx7noKISLBP6R+lPFhER8i/pUMNw0uNrcUfFnGWagpJj6gcllHH+Rf0ocJHkj4an1mUJCSr9BWWS7YS/Oa5itpD9dtBuV0AyDVQuVbmI5HQocVaXVwXxk5Jq30vToZ4QSoyRya4n6+GWvbp1thH0zyfeq68Rb2zVosGROq5rU65o0fnoqkD4WOfSsfqRS1Rok4I4x6n1po/0aV8elPPH5bEMMHrigZVPmgjpirFQZoMH5g2PsaWm2P46+SF/kzzg4rQjPPpr/AsJs9FlnnHEz7ox6gcZpl/HJdyEgFmY/YfaiJLyKNAiAiGIYHHHpSXWZVhQW9vtR/k7ySf7D3rP27LKlGibSrFrG2kfYwmfPXqB61DdTyQhYkRg7fDtAzgZ5/Xv9hUn4i7ldo2nxt5Z1HC464Hf6mgrWV9Qu5YYNyW8IzM5PxOT2LevX6UyXbZzaSorZ7ox3m7DED4Djmr/AE83Etg0cykOx4BFP07T0LNPsACHagxwMdat9NtUvGMe7BHA54NdKSYUmkZe6Ozjv06VSX0O2ZvQGt94j0aWOIzrGXjA645H19qxN7l5XBGDnpVIdRjzRoBUhcZoksPw5xQn59poll2wVRIhQG5KRN70HnjNE3LYjoEtngdKICQGvajDYFKlAdSIFEIfgIoRD05opemK86Vo9RBem3HlHDLx61exyxzqORWbhGKKifByDg10ZUM1YRq2l3FwmIn49KyyaXei/EDDHPzHpWvg1CWLGfjWrCGa0umDNgSetNsTljsy7eFb5lBLKfoKMt7O+0vIEM86dgi5xV5NqE1m4UoHQ9CKiudZmCZjaGM9zJSPI7pDRxJGSEWoarqV09+zWdvEhOwkZIHGKxt7bqHuZuWQMdu6tbr1358jNNcDk/FsG1apmsI7yICGZ3jzysa/N+taMdjz4umf0+3YQyyOCIwPmPrnpWk8PaOy3MSxxmWRzk7B271Y2ulxwpHC0YyBnylG7bnufetEl1HpdmEsIzErD+PcSphm46D0FWc1GL/SGjk0Uep2NpZQ77gBwnPlZ+Zuw+1A2g2K15M2bluE9Ezxx9AD+tN1+d2mjD9MAgHuSByfvSsDtvNl4pWKQDa3ZT7+3Spq0rZV1fCOxZrm0v3gUowjIT/D/wAGadoJW0tZgyEAjg/1EZq0s7STS9RljkKmFhuRh02ntQt1bqtxujbZEjfwlHOT3FDZPhyX2WFsssunhIgPNxnH1NX9nEhgV7YmCQY3IRnn/neszZpqdjKt4LfKHO5c5yPpVumoI5EgSWNx3UZA9qRoNl0rTuSkmxsgggjjH0rnvjLR10jUBJEn/wAW4BMeOiMMZXP3yP8AxW1s7+S4uY41gZefjYHIp/ibTl1XQrm36yhfMiPo45H69PvVMbpkcsbRxmYbZt3ainbNuPWoJMMmO9NdykVajEB3hzwKFXinSPubPrTePWuFY0sM17Xvw0qIDpUEu+NexFHLJlfeqS0uEEiqx5NWrHZg9jWHLGmb8crQdAcjmiMccUJbkMnHaio2rM0XTPVfZnPTHSp1CscqSrcdKiKhunpSBKlvXFBMIcgd/hkbdQGpWPmts3Ed8A0dZ4kU5bDCm6swsNPkmYjz5sIvtmqQjtIDnqjGtpqXlyTLv8hThV3fP7n2q9tbbMkdtaxLvb4VA9KBSTauAegrV+F7Qx25vJh8cnEfsvr969JpY4mNyc5A1x+H026K3qXUZKqFu7cEq+B0OOnSqTWtYsUiK2JM0jEjzZTnbWp8R6jFp+mO75Z3+CNF6sx6YrmcmlahblJ9iSbvidSeQc+9ZVFN2zTtyh/iGTzHc2rhrlVUSZPT4f8AfNXGjYubWCOY/wAeIA/4h3FZ+aFEvHkxIJJW3SKwH+feiZblrYwywn4o25HtTyXKQE+miljE6wR54jYoPdR/7o/TLSDzFlkQH4mYZ54zxQdiv4mZWfhcbiOnJ7VZxyKZpMcKCF/apUFyLAESHBHHvQz2sW8+XlGPXHeoXum3BIhn3FEwoyjJOSaHQWTW8Ai6Elj3NFI1DK3NSB8HmigPpxrXYfwPiDULUfItwxT/AAk5H7Gg7wKIM1ff2i2xj8Ueao+GeFX+4yp/yFZ6/Vjb9K2xdowy42VjBQue9Qs2K9bOBk0wgY+KiIz3dSqPcK9oim3T+ZH9a0cn8hPpSpVmzmvCTWNHDtSpVikakTJ2r2Tp+tKlUxiSz/nJ9qF8eE7bEZ484UqVacHyRPJ4UZ+RvpXR7AAWtuAMDyk4+wrylW7/AKPEZ8XplvEPxeJbNW5UW7kA9AcjmnvSpVm/C6KLV1Xep2jPPahoOpPdUOD6cGlSpvo5Ft4WJOmRknJ5oqM/wn/xN/ma9pUpzC9PAz0qyPyCvKVKwjO9PpUqBxgv7Sv/ALPTz/0X/wC4Vkr4/wAClSrZD4mGfyKR6XalSp0KCN8x+tKlSriZ/9k=',
    sendTxt : 'Fernando Garibay. It is taken from her third extended play, The Fame Monster (2009)',
    replyTxt : 'La reine de Chypre (The Queen of Cyprus) is an 1841 grand opera in five acts composed.'
}