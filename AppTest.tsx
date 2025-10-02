import { Text, View, Button, Alert, TextInput } from "react-native";
import { ImageBackground } from "react-native";

function App(){
    return (
        <View style = {{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <MyComponent/>
        </View>
    );
}

const MyComponent = () => {
    return(
        <View style = {{width: '100%', padding: 20}}>
            <Text
            style = {{fontSize:20, fontWeight:'bold', textAlign: 'center', marginBottom:15}}>Halo Ini Nabiel</Text>
            <Button title="Ini Button" onPress={() =>
            Alert.alert('Tombol Ditekan')} color="blue"/>
            <TextInput placeholder="Ini Text Input. Masukkan text disini"
            style={{textAlign:'center', height:40, borderColor: 'gray', borderWidth:1, marginTop:10, paddingHorizontal:10, fontSize:5}}/>
            <ImageBackground source={{uri: 'https://cdna.artstation.com/p/assets/images/images/054/736/290/large/zuna-capybara.jpg?1665244652'}}
            style={{width: '100%', height: 200, marginTop:10}}/>
        </View>
    )
}

export default App;