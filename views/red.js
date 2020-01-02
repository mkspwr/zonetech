import React, { Component } from 'react';
import { View } from 'react-native';
import ScalableText from 'react-native-text';
import ImageResizing from '../views/img/ImageResizer'

import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';
import { Button, Text } from 'react-native';
let imageResizerObj = new ImageResizing();
export class RedPage extends React.Component {
  render() {
    return (

      <View style={styles.mainContainer}>
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'powderblue' }} >
          <ScalableText style={styles.bigRed}>Red Zone</ScalableText>
        </View>
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'blue' }} >
          <ScalableText style={styles.midRed}>I need to stop</ScalableText>
        </View>
        <View style={{ flex: 6, flexDirection: 'row', alignItems: 'center' , backgroundColor: 'grey'}} >
          <View style={{  flexDirection: 'column', alignItems: 'center' , backgroundColor: 'green'}} >
            <View style={{  flexDirection: 'row', alignItems: 'center' }} >
              <View style={{  flexDirection: 'row', alignItems: 'center' }} >
                <Image style={styles.imgMinion}
                  source={require('./img/mad.jpg')} />
                <ScalableText style={styles.textoverlay}>Mad</ScalableText>
              </View>
              <View style={{  flexDirection: 'row', alignItems: 'center' }} >
                <Image style={styles.imgMinion}
                  source={require('./img/yelling.jpg')} />
                <ScalableText style={styles.textoverlay}>yelling</ScalableText>
              </View>
            </View>
            <View style={{  flexDirection: 'column', alignItems: 'center' }} >
              <View style={{  flexDirection: 'row', alignItems: 'center' }} >
                <View style={{  flexDirection: 'row', alignItems: 'center' }} >
                  <Image style={styles.imgMinion}
                    source={require('./img/mad.jpg')} />
                  <ScalableText style={styles.textoverlay}>mean</ScalableText>
                </View>
                <View style={{  flexDirection: 'row', alignItems: 'center' }} >
                  <Image style={styles.imgMinion}
                    source={require('./img/yelling.jpg')} />
                  <ScalableText style={styles.textoverlay}>hands on</ScalableText>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }} >
          <ScalableText style={styles.midRed}>I can try these tools</ScalableText>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'powderblue' }} >
          <ScalableText style={styles.textone}>Deep breathe</ScalableText>
          <ScalableText style={styles.textone}>Size of problem</ScalableText>
          <ScalableText style={styles.textone}>Run</ScalableText>
          <ScalableText style={styles.textone}>Take a break</ScalableText>
        </View>
        <View style={{ flex: 0, alignItems: 'center', backgroundColor: 'white' }} >
          <ScalableText style={styles.bigRed}> </ScalableText>
        </View>
        <View style={{ flex: 0, alignItems: 'center', backgroundColor: 'white' }} >
          <ScalableText style={styles.bigRed}> </ScalableText>
        </View>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View >
    );
  }
};

const styles = StyleSheet.create({
  bigRed: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
  midRed: {
    color: 'red',
    fontSize: 25,
  },
  textone: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textoverlay: {
    position: "absolute",
    bottom: 0,
    top: imageResizerObj.getHeight(340),
    left: imageResizerObj.getWidth(210),
    right: 0,
    color: 'yellow',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,

  },
  red: {
    color: 'red',
  },
  heroImage: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  topHeader: {
    height: imageResizerObj.getHeight(200),
    backgroundColor: '#cecece',
  },
  topLeftButton: {
    height: imageResizerObj.getHeight(72),
    width: imageResizerObj.getWidth(110),
    marginTop: imageResizerObj.getHeight(60),
    marginLeft: imageResizerObj.getWidth(40),
  },
  imgMinion: {
    height: imageResizerObj.getHeight(450),
    width: imageResizerObj.getWidth(700),
    marginLeft: imageResizerObj.getWidth(5),
    marginRight: imageResizerObj.getWidth(5)
  }
});
