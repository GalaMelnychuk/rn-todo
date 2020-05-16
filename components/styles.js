import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    //   justifyContent: "flex-end",
    //   backgroundColor: "chocolate",
    //   height: 150
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    button: {
      marginHorizontal: 120,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0000ff",
    },
    buttonTitle: {
      ...Platform.select({
        ios: {
          color: "#f0f8ff",
          fontSize: 26,
        },
        android: {
          color: "grey",
          fontSize: 26,
        },
        default: {
          // other platforms, web for example
          backgroundColor: "blue",
        },
      }),
      textTransform: "uppercase",
    },
    input: {
      marginTop: 150,
      marginBottom: 40,
      borderWidth: 1,
      borderColor: "transparent",
      borderBottomColor: "blue",
      height: 40,
      marginHorizontal: 20,
      color: "red",
      backgroundColor: "#fff8dc"
    },
  });

