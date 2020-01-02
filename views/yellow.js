import React, { Component } from 'react';
import ScalableText from 'react-native-text';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';
import { Button, View, Text } from 'react-native';

export class YellowPage extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  componentDidMount() {
    return fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.bigBlue}>Yellow Zone</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <ScalableText style={styles.text}>{item.id}, {item.employee_name}, {item.employee_salary}, {item.employee_age}</ScalableText>}
          keyExtractor={({ id }, index) => id}
        />

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
  text: {
    color: 'tomato',
    fontSize: 10
  }
})