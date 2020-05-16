import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
  },
  editorContainer: {
    flexDirection: "row",
    ...Platform.select({
      ios: {
        paddingHorizontal: 30,
        paddingVertical: 20,
      },
      android: {
        paddingHorizontal: 5,
      },
    }),
  },
  listContainer: {
    height: "80%", 
    paddingHorizontal: 50
  },
  listTodos: {
flexDirection: "row"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 20,
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5f9ea0",
    borderRadius: 10
  },
  buttonTitle: {
    color: "#f0f8ff",
    ...Platform.select({
      ios: {
        fontSize: 26,
      },
      android: {
        fontSize: 26,
      },
      default: {
        // other platforms, web for example
        backgroundColor: "blue",
      },
    }),
    textTransform: "uppercase",
    fontWeight: "600"
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "transparent",
    borderColor: "#5f9ea0",
    height: 40,
    color: "red",
    fontWeight: "600",
    fontSize: 16,
    backgroundColor: "#fff8dc",
    borderRadius: 10,
    paddingHorizontal: 6,
  },
});
