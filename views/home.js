import React, { Component } from 'react';
import { GreenPage } from '../views/green'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
    TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';
import { Button, View, Text } from 'react-native';

export class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, backgroundColor: 'green' }} >
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.bigBlue}>I am good to go</Text>
                        </View>
                        <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigation.navigate('GreenRT')}>
                            <Text style={styles.buttonText}>Lets Go</Text>
                    </TouchableOpacity>
                </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'blue' }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.bigBlue}>I am running low</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.bigBlue}>I need to take caution</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'red' }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.bigBlue}>I need to STOP!</Text>
                        </View>
                    </View>
                </View>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white'
    },
    bigBlue: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 40
    },
    red: {
      color: 'red',
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: 'white',
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
 
    highlight: {
      fontWeight: '700',
    },
    footer: {
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
  
  