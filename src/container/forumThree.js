import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {Header, Input} from 'native-base';
import Comment from '../components/comment';
import MaterialInitials from 'react-native-material-initials/native';

export default class ForumThree extends React.Component {
  constructor() {
    super();
    this.state = {estados: 'Comenta aqui...'};
    this.state = {Comentario: 'Vista del Comentario'};
  }
  render() {
    setTimeout(() => {
      this.setState({estados: 'Hola Tony'});
    }, 1000);
    setTimeout(() => {
      this.setState({Comentario: 'Recuerda estar más pendiente de sus tareas'});
    }, 9000);

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#f4f6f6'} />
        {/* <Header style={styles.header}>
            <View style={styles.left}>
              <TouchableOpacity style={{ width: "100%", height: "100%", top:2, }}>
                <Image
                  style={{ height: "55%", width: 30, alignSelf: "center" }}
                  source={require("../assets/icons/back.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.middle}>
              <Text style={styles.header_title}>Comentarios</Text>
            </View>
            <View style={styles.right}></View>
          </Header> */}
        <View style={styles.photoContainer}>
          <MaterialInitials
            style={styles.picture}
            backgroundColor={'grey'} //aqui tienes que pasarle el color de fondo de la pantalla de inicio
            color={'white'} //aqui tienes que pasarle el color del texto de la pantalla de inicio
            size={100}
            text={'Luis Torres'} //aqui tienes que pasarle el nombre de la pantalla de inicio
            single={false}
          />
          <Text style={styles.name}>Luis Torres</Text>
          <View style={styles.underLine} />
        </View>
        <View style={styles.newComment}>
          <View style={styles.cardHeader}>
            <Text style={styles.commentTitle}>Nuevo comentario:</Text>
          </View>
          <View style={styles.cardInput}>
            <Input
              disabled
              style={styles.Input}
              placeholder={this.state.estados}
            />
            <TouchableOpacity
              onPress={() => alert('Enviar Mensaje')}
              style={styles.send}>
              <Text style={styles.sendButton}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.subCard}>
          <Text style={styles.h2}> Comentario reciente:</Text>
          <Comment
            name={'Tony Zhu'} //tony siempre va a ser el que comenta xddd
            Size={50}
            backgroundcolor={'#dfd89b'}
            Color={'white'}
            Subtitle={this.state.Comentario} //pasale el comentario que generas con el input de arriba
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  underLine: {
    borderBottomColor: '#e6efff',
    borderBottomWidth: 3,
    marginTop: 5,
    width: '50%',
    height: 1,
    alignSelf: 'center',
  },
  subCard: {
    backgroundColor: '#d5e1f1',
    marginTop: 10,
  },
  send: {
    width: '22%',
    height: '60%',
    backgroundColor: '#7aa9ff',
    borderRadius: 10,
    justifyContent: 'center',
  },
  sendButton: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '600',
  },
  newComment: {
    height: 150,
    width: '90%',
    backgroundColor: '#bed0ea',
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'column',
    borderRadius: 35,
    marginBottom: 10,
  },
  cardHeader: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    marginTop: 5,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
  },
  cardInput: {
    width: '85%',
    height: '75%',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  Input: {
    backgroundColor: '#d5e1f1',
    height: '60%',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    color: 'grey',
    marginRight: 10,
  },
  commentTitle: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '500',
  },
  latestComment: {
    height: 200,
    width: '90%',
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 35,
  },
  container: {
    width: '100%',
    backgroundColor: '#f4f6f6',
    height: '100%',
  },
  header: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#f4f6f6',
    borderBottomWidth: 0,
    marginBottom: 10,
  },
  header_title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    height: '100%',
  },
  left: {
    width: '20%',
    height: '100%',
    alignSelf: 'center',
  },
  ButtonView: {
    width: '90%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  middle: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
  },
  right: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: 'white',
  },
  photoContainer: {
    width: '100%',
    height: 240,
    marginVertical: 10,
  },
  picture: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  backIcon: {
    backgroundColor: 'transparent',
    height: 200,
    width: 10,
    zIndex: 1,
  },
  name: {
    fontSize: 25,
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: 10,
  },
});
