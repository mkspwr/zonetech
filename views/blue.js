import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity } from 'react-native';

export class BluePage extends React.Component {
    constructor() {
        super();
        this.state = {
            todo_title: '',
            todo_description: '',
            todo_completed: false,
            todo_dueDate: '',
            ActivityIndicator_Loading: false,
        }
    }
    Insert_Data_Into_MySQL = () => {
        this.setState({ ActivityIndicator_Loading: true }, () => {
            fetch('https://zonetech.azurewebsites.net/todo/',
                {
                    method: 'POST',
                    headers:
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body:  JSON.stringify(
                        {

                            title: this.state.todo_title,
                            description: this.state.todo_description,
                            completed: this.state.todo_completed,
                            dueDate: this.state.todo_dueDate
                        })
                }).then((response) => {
                    return response.json(); 
                }).then((responseJsonFromServer) => {
                   // alert(responseJsonFromServer);
                    this.setState({ ActivityIndicator_Loading: false });
                }).catch((error) => {
                    console.error(error);
                    this.setState({ ActivityIndicator_Loading: false });
                });
        });
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <TextInput
                    placeholder="Enter todo title"
                    style={styles.TextInputStyleClass}
                    underlineColorAndroid="transparent"
                    onChangeText={(TextInputText) => this.setState({ todo_title: TextInputText })} />
                <TextInput
                    placeholder="Enter todo description"
                    style={styles.TextInputStyleClass}
                    underlineColorAndroid="transparent"
                    onChangeText={(TextInputText) => this.setState({ todo_description: TextInputText })} />
                <TextInput
                    placeholder="enter completed (true/false)"
                    style={styles.TextInputStyleClass}
                    underlineColorAndroid="transparent"
                    onChangeText={(TextInputText) => this.setState({ todo_completed: TextInputText })} />
                <TextInput
                    placeholder="enter due date (mm-dd-yyyy)"
                    style={styles.TextInputStyleClass}
                    underlineColorAndroid="transparent"
                    onChangeText={(TextInputText) => this.setState({ todo_dueDate: TextInputText })} />
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.TouchableOpacityStyle}
                    onPress={this.Insert_Data_Into_MySQL}>
                    <Text style={styles.TextStyle}>Add Todo to my list</Text>
                </TouchableOpacity>
                {
                    this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large' style={styles.ActivityIndicatorStyle} /> : null
                }

            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20

        },

        TextInputStyleClass:
        {

            textAlign: 'center',
            height: 40,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: '#009688',
            borderRadius: 7,
            marginBottom: 10,
            width: '95%'
        },

        TouchableOpacityStyle:
        {
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#009688',
            marginBottom: 20,
            width: '90%'

        },

        TextStyle:
        {
            color: '#fff',
            textAlign: 'center',
            fontSize: 18
        },

        ActivityIndicatorStyle: {

            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'

        }
    });