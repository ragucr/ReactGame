import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const Header = (props) => {


    const [headerHeight, setHeaderHeight] = useState(0);
    const [marginTopVal, setMarginTopVal] = useState(0);
    let hasNotch = DeviceInfo.hasNotch();

    DeviceInfo.getDeviceName().then(deviceName => {

        if (hasNotch) {
            console.log(deviceName + "  has notch");
            setMarginTopVal(30);
            setHeaderHeight(80);

        }
        else {
            console.log(deviceName + "  has no notch");
            setHeaderHeight(60);

        }

    });

    const notch = {
        height: headerHeight 
    }

    const margin = {
        marginTop: marginTopVal
    }

    return (
        <View style={[Styles.title, notch]}  >
            <Text style={[Styles.text, margin]}>{props.children} </Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'orange',
    },
    text: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 30,
        fontSize: 20,
        color: 'black',
    

    }
});

export default Header;
