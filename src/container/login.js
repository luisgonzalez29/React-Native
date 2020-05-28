import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Image,
  Alert
} from 'react-native';
import {Input} from 'native-base';
import { NavigationHelpersContext } from '@react-navigation/native';

class Login extends React.PureComponent {
  
  render() {

  //   this.state = {
  //     credentials:{
  //        email: "",
  //        password: ""
  //     },
  // };

    const data = ["luis.gonzalez2999@gmail.com", "12345678"]
    // function authenticate(){
    //   if (this.state.credentials.email=data[0]){
    //     ()=>this.props.navigation.navigate("Registros")
    //   }
    //   else (
    //     () => alert("Credenciales incorrectas")
    //   )
    // }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <View style={{height: 50, width: '100%'}} />
          <Image
            style={{alignSelf: 'center', height: 180, width: 200}}
            source={require('../assets/native.png')}
          />
          <Text style={styles.name}>React Native</Text>
          <Text style={styles.brand}>by Facebook</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <Text style={styles.commentTitle}>Inicio de sesión</Text>
          </View>
          <Text style={styles.loginSubtitle}>Nombre de Usuario: </Text>
          <View style={styles.cardInput}>
            <Input style={styles.Input} placeholder={'luis.gonzalez2999@gmail.com'}/>
          </View>
          <Text style={styles.loginSubtitle}>Contraseña</Text>
          <View style={styles.cardInput}>
            <Input style={styles.Input} placeholder={'12345678...'} />
          </View>
          <TouchableOpacity 
          onPress={
            // authenticate()
            ()=>this.props.navigation.navigate("Registros")
          } 
          style={styles.send}>
            <Text style={styles.sendButton}>Iniciar sesión</Text>
          </TouchableOpacity>
          <Text style={styles.registry}>Proyecto hecho por:</Text>
          <Text style={styles.registry}>Luis Gonzalez</Text>
          <Text style={styles.registry}>Shantal De Leon</Text>
          <Text style={styles.registry}>Tony Zhu</Text>
          <Text style={styles.registry}>Alfonso Alvarado</Text>
          <Text style={styles.registry}>Luis Torres</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  cardHeader: {
    width: '100%',
    height: '18%',
    justifyContent: 'center',
    marginTop: 5,
  },
  cardInput: {
    width: '85%',
    height: '11%',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  Input: {
    backgroundColor: '#d5e1f1',
    height: '100%',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    color: 'grey',
    marginRight: 10,
    fontStyle:"italic"
  },
  commentTitle: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  send: {
    width: '50%',
    height: '10%',
    marginTop:20,
    backgroundColor: '#7aa9ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf:"center",
    marginBottom:10
  },
  sendButton: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '600',
    alignSelf:"center",
  },
  loginSubtitle:{
    marginLeft:45,
    fontSize:18,
    fontWeight:"600",
    marginTop:5
  },
  container: {
    width: '100%',
    backgroundColor: 'white',
    height: '100%',
    flexDirection: 'column',
  },
  logoContainer: {
    height: '45%',
    width: '100%',
    alignSelf: 'center',
  },
  cardContainer: {
    height: '55%',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#e6efff',
    borderRadius: 50,
    flexDirection: 'column',
  },
  registry:{
    textAlign:"center",
    fontSize:12,
    color:'grey'
  },
  name: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 17,
    fontStyle: 'italic',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default Login;
