import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    ScrollView,
    StatusBar,
    TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';
import { Button, View, Text } from 'react-native';

export class GreenPage extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.bigBlue}>Green Zone</Text>
                <Image style={StyleSheet.heroImage}
                    source={require('./img/ShreyaBaby.jpg')} />

                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    heroImage: {
        width: undefined,
        height: undefined,
        flex: 1,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
      },
      red: {
        color: 'red',
      },
})