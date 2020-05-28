import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import MaterialInitials from "react-native-material-initials/native";

const Comment = ({ Color, Size, backgroundcolor, name,  Subtitle }) => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.card_top}>
          <View style={styles.picture}>
            <MaterialInitials
              backgroundColor={backgroundcolor}
              color={Color}
              size={Size}
              text={name}
              single={false}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.card_title}>{name}:</Text>
          </View>
        </View>
        <View style={styles.card_bottom}>
          <Text style={styles.card_subtitle}>{Subtitle}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 250,
    backgroundColor: "#bacde9",
    marginVertical: 15,
    alignSelf: "center",
    borderRadius: 25,
    flexDirection: "column",
    paddingVertical:10
  },
  card_top: {
    width: "75%",
    height: "35%",
    justifyContent: "center",
    flexDirection: "row",
  },
  card_bottom: {
    width: "100%",
    height: "65%",
    justifyContent: "center",
    flexDirection: "column",
    width: "85%",
    height: "55%",
    alignSelf: "center",
    backgroundColor:"#d5e1f1",
    marginTop: 10,
    borderRadius:20,
    paddingLeft:10
  },
  card_title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    color: "black",
  },
  picture: {
      width:"20%",
      justifyContent:"center",
      height:"100%"
  },
  name:{
    width:"50%",
    height:"100%",
    alignSelf:"center",
    justifyContent:"center",
  },
  card_subtitle: {
    fontSize: 20,
    fontStyle: "italic",
    color: "black",
    textAlign: "left",
    marginLeft: 5,
  },
});

export default Comment;
