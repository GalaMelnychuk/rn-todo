import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import { styles } from '../../styles/styles';

const AppLoader = () => {
    return(
        <View style={styles.appIndicator}>
            <ActivityIndicator size="large" color="blue" />
        </View>
    )
}

export default AppLoader;
