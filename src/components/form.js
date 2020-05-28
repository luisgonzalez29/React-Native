import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import MaterialInitials from "react-native-material-initials/native";
import { ScrollView } from "react-native-gesture-handler";

const Form = ({ name, Email, location, Ocupation, Phone, WebSite }) => {
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.card_left}>
            <Text numberOfLines={2} style={styles.card_title}>
              Nombre:
            </Text>
          </View>
          <View style={styles.card_right}>
            <Text style={styles.categoryMid}>{name}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card_left}>
            <Text style={styles.card_title}>Email:</Text>
          </View>
          <View style={styles.card_right}>
            <Text numberOfLines={1} style={styles.categoryMid}>
              {Email}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card_left}>
            <Text style={styles.card_title}>Ocupación:</Text>
          </View>
          <View style={styles.card_right}>
            <Text numberOfLines={2} style={styles.categoryMid}>
              {Ocupation}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card_left}>
            <Text style={styles.card_title}>Direccion:</Text>
          </View>
          <View style={styles.card_right}>
            <Text numberOfLines={2} style={styles.categoryMid}>
              {location}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card_left}>
            <Text style={styles.card_title}>Telefono:</Text>
          </View>
          <View style={styles.card_right}>
            <Text style={styles.categoryMid}>{Phone}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card_left}>
            <Text style={styles.card_title}>Sitio Web:</Text>
          </View>
          <View style={styles.card_right}>
            <Text style={styles.category}>{WebSite}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#e6efff",
    marginVertical: 15,
    alignSelf: "center",
    borderRadius: 25,
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    height: 70,
  },
  card_left: {
    width: "35%",
    height: "100%",
    justifyContent: "center",
  },
  card_right: {
    width: "65%",
    height: "70%",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor:"#d5e1f1",
    alignSelf:"center",
    paddingLeft:10,
    borderRadius:10
  },
  category: {
    textAlign: "left",
    fontSize: 18,
  },
  categoryMid: {
    textAlign: "left",
    fontSize: 15,
  },
  card_title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    color: "black",
    alignSelf: "center",
  },
  card_subtitle: {
    fontSize: 15,
    fontStyle: "italic",
    color: "#A1A1A1",
    textAlign: "left",
    marginLeft: 5,
  },
});

export default Form;
