import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, AppRegistry, Button, Alert, TouchableHighlight, Image } from 'react-native';

const info = [
  {'id': 'Ada', 'full': 'Ada Lovelace', 'image': './images/Ada.jpg'},
  {'id': 'Hypatia', 'full': 'Hypatia', 'image': './images/Hypatia.jpg'},
  {'id': 'Julia', 'full': 'Julia Robinson', 'image': './images/Julia.jpg'},
  {'id': 'Sabrina', 'full': 'Sabrina Gonzalez Pasterski', 'image': './images/Sabrina.png'},
  {'id': 'Valerie', 'full': 'Valerie Thompson', 'image': './images/Valerie.gif'},
];

export default class Puzzle extends React.Component {
  constructor(props){
    super(props);
    this._helper= this._helper.bind(this)
    this.state = {
      info: [
        {'id': 'Ada', 'full': 'Ada Lovelace', 'image': './images/Ada.jpg'},
        {'id': 'Hypatia', 'full': 'Hypatia', 'image': './images/Hypatia.jpg'},
        {'id': 'Julia', 'full': 'Julia Robinson', 'image': './images/Julia.jpg'},
        {'id': 'Sabrina', 'full': 'Sabrina Gonzalez Pasterski', 'image': './images/Sabrina.png'},
        {'id': 'Valerie', 'full': 'Valerie Thompson', 'image': './images/Valerie.gif'},
      ],
      image: './images/Ada.jpg',
    }
  }

  _helper(name){
    this.props.update(name)
  }

  render(){
    return (
      <View style={[ styles.container ]}>
        <View style = {[ styles.box, { flex: 1 } ]}>
          <View style = {[ styles.circle ]}>
            <Image
              source={info[this.props.name].image}
              style={{ flex: 1, width: null, height: null, borderRadius: 90 }}
              resizeMode='cover'
            />
          </View>
          <Text style = {[ styles.text ]}>{this.state.info[this.props.name][full]}</Text>
        </View>
        <View style = {[ styles.box, { flex: 1.4 } ]}>
        </View>
        <View style = {[ styles.box, { flex: 0.6, flexDirection: 'row' } ]}>
          <TouchableHighlight
            style = {[ styles.button, { flex: 1 } ]}
            onPress = {() => this._helper(null)}>
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
  },
  text: {
    color: '#100812',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
  button: {
    alignContent: 'space-around',
    margin: 10,
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
