import React from "react";
import { View } from "react-native";
import { styles } from "../styles";

const AppCard = (props) => <View style={styles.appCard}>{props.children}</View>;

export default AppCard;
