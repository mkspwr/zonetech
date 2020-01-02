import React, { Component } from 'react';

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
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.buttonGreen} onPress={() => this.props.navigation.navigate('GreenRT')}>
            <Text style={styles.buttonText}>I am good to go</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBlue} onPress={() => this.props.navigation.navigate('GreenRT')}>
            <Text style={styles.buttonText}>I am running low</Text>
          </TouchableOpacity>

        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center' }}>

          <TouchableOpacity style={styles.buttonYellow} onPress={() => this.props.navigation.navigate('YellowRT')}>
            <Text style={styles.buttonText}>I need to take caution</Text>
               </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRed} onPress={() => this.props.navigation.navigate('RedRT')}>
            <Text style={styles.buttonText}>I need to STOP</Text>
          </TouchableOpacity>

        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

          <TouchableOpacity style={styles.buttonGrey} onPress={() => BackHandler.exitApp()}>
            <Text style={styles.buttonText}>Exit</Text>
          </TouchableOpacity>
    
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  buttonGreen: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'green'
  },
  buttonGrey: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'grey'
  },
  buttonBlue: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'blue'
  },
  buttonYellow: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'yellow'
  },
  buttonRed: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'red'
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
    padding: 10,
    color: 'black'
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

