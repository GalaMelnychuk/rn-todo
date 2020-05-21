import React from "react";
import { ImageBackground } from "react-native";
import { styles } from "../styles";

const AppBackground = (props) => <ImageBackground style={styles.appCard} source={require("../../../assets/list.jpg")} style={styles.image}>{props.children}</ImageBackground>;

export default AppBackground;
