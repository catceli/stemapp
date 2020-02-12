import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

export default class Grid extends React.Component {
  constructor(props){
    super(props);
    this._julia = this._julia.bind(this)
    this._hypatia = this._hypatia.bind(this)
    this._valerie = this._valerie.bind(this)
    this._ada = this._ada.bind(this)
    this._sabrina = this._sabrina.bind(this)
    this.state = {
      defaultStory: null,
      data: [
        {'id': 1, 'func': this._julia, 'image': './Images/Julia.jpg'},
        {'id': 2, 'function': this._hypatia, 'image': './Images/Hypatia.jpg'},
        {'id': 3, 'function': this._valerie, 'image': './Images/Valerie.gif'},
        {'id': 4, 'function': this._ada, 'image': './Images/Ada.jpg'},
        {'id': 5, 'function': this._sabrina, 'image': './Images/Sabrina.png'}
      ],
    }
  }

  _julia(){
    this.props.update("Julia")
  }

  _hypatia(){
    this.props.update("Hypatia")
  }

  _valerie(){
    this.props.update("Valerie")
  }

  _ada(){
    this.props.update("Ada")
  }

  _sabrina(){
    this.props.update("Sabrina")
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
      <TouchableHighlight onPress={this._julia}>
      <Image
        style={styles.button}
        source={require('./Images/Julia.jpg')}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={this._hypatia}>
        <Image
          style={styles.button}
          source={require('./Images/Hypatia.jpg')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={this._valerie}>
          <Image
            style={styles.button}
            source={require('./Images/Valerie.gif')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={this._ada}>
            <Image
              style={styles.button}
              source={require('./Images/Ada.jpg')}
              />
          </TouchableHighlight>
          <TouchableHighlight onPress={this._sabrina}>
            <Image
              style={styles.button}
              source={require('./Images/Sabrina.png')}
            />
          </TouchableHighlight>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 400,
  },
  contentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});
