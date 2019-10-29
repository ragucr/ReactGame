import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

const CardView = props => {
    return (
        <View {...props} style={{ ...Styles.cardview, ...props.style }}>{props.children}</View>
    );
};

const Styles = StyleSheet.create({

    cardview: {
        elevation: 8,
        borderWidth: 1,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        borderColor: 'white',
        alignItems: 'center',
        borderRadius: 10

    }
});

export default CardView;