import React from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Setting from "./Setting";

export default function HomeScreen({navigation}: any) {
    return (
        <View 
            style={styles.container} >
            <View 
                style={styles.tombol} >
                <Image 
                    source={require('./setting.png' )} 
                    style={styles.gambar} />
                <TouchableOpacity onPress={()=> navigation.navigate('Setting')} >
                <Text 
                    style={styles.teks} >Setting
                    </Text>
                </TouchableOpacity>
            </View>
            <View 
                style={styles.tombol} >
                <Image  
                source={require('./info.png')} 
                style={styles.gambar} />
                <TouchableOpacity onPress={()=> navigation.navigate('About')} >
                <Text 
                    style={styles.teks} >About
                </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent:'center', 
        alignItems:'center',
        flexDirection:'row',
    },
    teks:{
        fontSize:15, 
        fontWeight:'bold'
    },
    tombol:{
        flexDirection:'row', 
        marginTop:20, 
        flex:1
    },
    gambar:{
        width:25, 
        height:25, 
        marginHorizontal:10
    }
})


 {/* <View >
                <TouchableOpacity  onPress={()=> navigation.navigate('Setting')} >
                <Text>Setting</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('About')} >
                    <Text>About</Text>
                </TouchableOpacity>
            </View> */}

            {/* <View style={styles.tombol} >
            <Button onPress={()=> navigation.navigate('Setting')} title="Setting" />
            <Button onPress={()=> navigation.navigate('About')} title="About"/>
            </View> */}