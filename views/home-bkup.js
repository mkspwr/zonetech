/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Colors } from 'react-native/Libraries/NewAppScreen';


export default class App extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }



  render() {
    return (
      <>

        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'green' }} >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={styles.bigBlue}>I am good to go</Text>
            </View>
            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>I am good to go</Text>
              </View>
            </TouchableHighlight>
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

      </>
    );
  };
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
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
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

