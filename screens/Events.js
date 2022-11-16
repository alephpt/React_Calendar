import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {navigateTo} from "./Navigator";

export default Events = () => {
    return(
        <View>
            <Text>
                Events
            </Text>
            <TouchableOpacity onPress={() => navigateTo('Secret1')}>
                <Text>
                    Secret1
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo('Secret2')}>
                <Text>
                    Secret2
                </Text>
            </TouchableOpacity>
        </View>
    )
}