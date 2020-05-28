import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import MaterialInitials from "react-native-material-initials/native";

const Card = ({
  Color,
  Size,
  Styles,
  backgroundcolor,
  name,
  Email,
  Subtitle,
}) => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.card_left}>
          <MaterialInitials
            style={[Styles, { alignSelf: "center", bottom:5 }]}
            backgroundColor={backgroundcolor}
            color={Color}
            size={Size}
            text={name}
            single={false}
          />
        </View>
        <View style={styles.card_right}>
          <Text style={styles.card_title}>{name}</Text>
          <Text style={styles.card_subtitle}>{Subtitle}</Text>
        </View>
      </View>
      <View
        style={{
          width: "80%",
          borderColor: "#e6efff",
          borderBottomWidth: 1,
          alignSelf: "center",
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 150,
    backgroundColor: "#e6efff",
    marginVertical: 15,
    alignSelf: "center",
    borderRadius: 25,
    flexDirection: "row",
  },
  card_left: {
    width: "35%",
    height: "100%",
    justifyContent: "center",
  },
  card_right: {
    width: "65%",
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
  },
  card_title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    color: "black",
    bottom: 10,
    marginLeft: 5,
  },
  card_subtitle: {
    fontSize: 15,
    fontStyle: "italic",
    color: "#A1A1A1",
    textAlign: "left",
    marginLeft: 5,
  },
});

export default Card;
