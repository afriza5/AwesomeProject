import{View, Text, Image, TextInput, Button, Linking, ScrollView} from 'react-native';

const App = () => {
  return(
    <View style={{backgroundColor:'pink', padding:'100', alignItems:'center'}}>
        <Image 
        style={{width:250, height:300, borderRadius:10, margin:20}} 
        source={require('./assets/profil.jpg')}/>
        <Text style={{fontWeight:'bold', fontSize:'1000',textAlign:'center', color:'black'}}>riza</Text>
        <Text style={{fontWeight:'bold', textAlign:'center', color:'gray',padding:20}}> Riza ganteng banget, senyumin aku dong</Text>
        <Button title="Contact Me" color='green' onPress={() => Linking .openURL(contactme)}/>
  <Text style={{fontWeight:'Bold', fontSize:'400',textAlign:'left', color:'black'}}>Figma Design</Text>  
        <Text style={{padding:20,fontWeight:'bold', fontSize:'500',textAlign:'center', color:'black'}}>project saya</Text>
        <Image style={{width:300, height:400, borderRadius:10}} source={require('./assets/pisang.png')}/>
       
        <Text style={{fontWeight:'bold', fontSize:'500',textAlign:'left', color:'black'}}>portofolio</Text>  
        <Image style={{width:300, height:300, borderRadius:5}} source={require('./assets/Untitled.png')}/>
    </View>
   
  )
}

export default App;