import React, { Component } from 'react';
import { GreenPage } from '../views/green'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  BackHandler,
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
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('GreenRT')}>
                  <Text style={styles.buttonText}>I am good to go</Text>
                </TouchableOpacity>
              </View>
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
          title="EXIT"
          onPress={() => BackHandler.exitApp()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  button: {
    flexDirection: "column" ,
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonText: {
    fontSize: 40,
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

