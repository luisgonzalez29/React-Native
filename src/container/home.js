import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { Footer, FooterTab } from "native-base";
import Card from "../components/cards";
class Home extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"#f4f6f6"} />
        <View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.body}
            bounces={false}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Luis")}
            >
              <Card
                name={"Luis Gonzalez"}
                Styles={{ marginTop: 10 }}
                Size={100}
                backgroundcolor={"#7aa9ff"}
                Color={"white"}
                Subtitle={"luis.gonzalez2999@gmail.com"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Shantal")}
            >
              <Card
                name={"Shantal De Leon"}
                Styles={{ marginTop: 10 }}
                Size={100}
                backgroundcolor={"#7a7dff"}
                Color={"white"}
                Subtitle={"delon.1299@gmail.com"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Alfonso")}
            >
              <Card
                name={"Alfonso Alvarado"}
                Styles={{ marginTop: 10 }}
                Size={100}
                backgroundcolor={"#a1e495"}
                Color={"white"}
                Subtitle={"akatsuki507@gmail.com"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Tony")}
            >
              <Card
                name={"Tony Zhu"}
                Styles={{ marginTop: 10 }}
                Size={100}
                backgroundcolor={"#dfd89b"}
                Color={"white"}
                Subtitle={"tonyz27@gmail.com"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Torres")}
            >
              <Card
                name={"Luis Togges"}
                Size={100}
                backgroundcolor={"grey"}
                Color={"white"}
                Subtitle={"kingbobomb@gmail.com"}
              />
            </TouchableOpacity>
            <View style={{ height: 60 }} />
          </ScrollView>
          <Footer>
            <FooterTab
              style={{
                backgroundColor: "white",
                borderWidth: 0,
                width: "100%",
                flexDirection: "row",
              }}
            >
              <View style={{ width: "33%", justifyContent:"center" }}>
                <Image
                  style={{ alignSelf: "center", height: 20, width: 20, bottom:5 }}
                  source={require("../assets/icons/home.png")}
                />
                <Text style={{color:"#a1a1a1", alignSelf:"center"}}>Inicio</Text>
              </View>
              <View
                style={{
                  width: "33%",
                  borderColor: "#A1A1A1",
                  borderWidth: 0.5,
                  borderRadius: 30,
                }}
              >
                <TouchableOpacity onPress={() => alert("q procd raza")}>
                  <Image
                    style={{ alignSelf: "center", height: 30, width: 30 }}
                    source={require("../assets/icons/register.jpg")}
                  />
                   <Text style={{color:"#a1a1a1", alignSelf:"center"}}>Registros</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: "33%" }}>
                <Image
                  style={{ alignSelf: "center", height: 30, width: 30,}}
                  source={require("../assets/icons/profile.png")}
                />
                 <Text style={{color:"#a1a1a1", alignSelf:"center"}}>Perfil</Text>
              </View>
            </FooterTab>
          </Footer>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f4f6f6",
  },
  header: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#f4f6f6",
    borderBottomWidth: 0,
  },
  header_title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    height: "100%",
  },
  left: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
  },
  middle: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
  },
  right: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "white",
    height: "93.5%",
  },
});

export default Home;
