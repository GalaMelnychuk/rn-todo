import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
  },
  appCard: {
    margin: 50,
  },
  editorContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 80,
    ...Platform.select({
      ios: {
        paddingHorizontal: 20,
        paddingVertical: 20,
      },
      android: {
        paddingHorizontal: 4,
      },
    }),
  },
  listContainer: {
    height: "80%",
    paddingHorizontal: 90,
    flexDirection: "row",
    ...Platform.select({
      ios: {
        paddingHorizontal: 30,
        paddingVertical: 20,
      },
      android: {
        paddingHorizontal: 5,
        paddingVertical: 20,
        marginHorizontal: 7,
      },
    }),
  },
  btnDel: {
    backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    width: 60,
    height: 30,
    borderRadius: 6,
    position: "absolute",
    right: 0,
    top: 2,
    bottom: 2,
  },
  btnDelText: {
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
    color: "black",
  },
  btnEdit: {
    backgroundColor: "green",
    textAlign: "center",
    justifyContent: "center",
    width: 60,
    height: 30,
    borderRadius: 6,
    position: "absolute",
    right: 76,
    top: 2,
    bottom: 2,
  },
  btnEditText: {
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
    color: "black",
  },
  modalView: {
    ...Platform.select({
      ios: {
        marginTop: 220,
        marginBottom: 240,
      },
      android: {
        marginTop: 100,
        marginBottom: 200,
      },
    }),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    backgroundColor: "#d3d3d3",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalInput: {
    ...Platform.select({
      ios: { marginBottom: 120 },
      android: { marginBottom: 50 },
    }),

    padding: 10,
    width: "95%",
    height: "15%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 9,
      height: 9,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#f0fff0",
  },
  modalBtns: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    opacity: 1,
    // alignItems: "center",
  },
  modalBtnSave: {
    ...Platform.select({
      ios: {
        backgroundColor: "#faf0e6",
        padding: 5,
        width: "40%",
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 3.84,
        // elevation: 5,
      },
      android: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 3.84,
        elevation: 5,
      },
    }),
  },
  modalBtnCnsl: {
    ...Platform.select({
      ios: {
        backgroundColor: "#f5f5f5",
        padding: 6,
        width: "40%",
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 3.84,
        elevation: 5,
      },
      android: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 3.84,
        elevation: 5,
      },
    }),
    fontWeight: "600",
  },

  todoDesc: {
    fontStyle: "italic",
    fontSize: 18,
    fontWeight: "600",
    color: "#191970",
  },
  imageWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 600,
  },
  imageQuote: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  btnAdd: {
    // marginHorizontal: 20,
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(220, 20, 60, 1)",
    borderRadius: 10,
  },
  appCard: {
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 4,
    padding: 10,
    margin: 4,
    backgroundColor: "#f0f8ff",
    borderColor: "#f5f5dc",
  },
  // btnAddText: {
  //   color: "#f0f8ff",
  //   ...Platform.select({
  //     ios: {
  //       fontSize: 26,
  //     },
  //     android: {
  //       fontSize: 26,
  //     },
  //     default: {
  //       // other platforms, web for example
  //       backgroundColor: "blue",
  //     },
  //   }),
  //   textTransform: "uppercase",
  //   fontWeight: "600",
  // },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "transparent",
    borderColor: "#5f9ea0",
    height: 40,
    color: "#5f9ea0",
    fontWeight: "600",
    fontSize: 16,
    backgroundColor: "#fff8dc",
    borderRadius: 10,
    paddingHorizontal: 6,
  },
});
