import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, AppRegistry, Button, Alert, TouchableHighlight, Image } from 'react-native';

export default class Sabrina extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      puzzle: "Sabrina"
    }
  }

  render(){
    return (
      <View style={[ styles.container ]}>
        <View style = {[ styles.box, { flex: 1 } ]}>
          <View style = {[ styles.circle ]}>
          <Image
            source={require('../images/Sabrina.png')}
            style={{ flex: 1, width: null, height: null, borderRadius: 90 }}
            resizeMode='cover'
          />
          </View>
          <Text style = {[ styles.text ]}>Sabrina Gonzalez Pasterski</Text>
        </View>
        <View style = {[ styles.box, { flex: 1.4 } ]}>
        </View>
        <View style = {[ styles.box, { flex: 0.6, flexDirection: 'row' } ]}>
        <TouchableHighlight
          style = {[ styles.button, { flex: 1 } ]}
          onPress = {() => Alert.alert('hi')}>
          <Text style = {[ styles.buttonText ]}>Back</Text>
        </TouchableHighlight>
          <TouchableHighlight
            style = {[ styles.button, { flex: 1 } ]}
            onPress = {() => Alert.alert('hi')}>
            <Text style = {[ styles.buttonText ]}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  box: {
    alignItems: 'center',
    height: 50,
  },
  circle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 20,
    backgroundColor: 'red'
  },
  text: {
    color: '#100812',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
  button: {
    alignContent: 'space-around',
    margin: 30,
  },
  buttonText: {
    backgroundColor: '#4169E1',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 8,
    textAlign:'center'
  },
  });
