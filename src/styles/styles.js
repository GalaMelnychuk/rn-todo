import { StyleSheet, Platform, Dimensions } from "react-native";


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
  },
  todoItem: {
    paddingRight: 62,
    position: "relative",
    
  },
  btnDel: {
    backgroundColor: "red",
    justifyContent: "center",
    width: 60,
    height: 30,
    borderRadius: 6,
    position: "absolute",
    right: 0,
    top: "-16%",
    bottom: "0.5%",
  },
  btnDelText: {
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
    color: "#191970",
    fontFamily: "cabin700",
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
    fontFamily: "cabin600",
    fontSize: 18,
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
    width: 80,
    padding: 10,
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
  appIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "75%",
    borderWidth: 1,
    borderColor: "transparent",
    borderColor: "#5f9ea0",
    color: "#5f9ea0",
    fontWeight: "600",
    fontSize: 16,
    backgroundColor: "#fff8dc",
    borderRadius: 10,
    padding: 10,
  },
});
