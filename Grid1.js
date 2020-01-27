import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Flatlist } from 'react-native';

export default class Grid1 extends React.Component {
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
        {'id': 1, 'function': this._julia, 'image': require('./images/Julia.jpg')},
        {'id': 2, 'function': this._hypatia, 'image': require('./images/Hypatia.jpg')},
        {'id': 3, 'function': this._valerie, 'image': require('./images/Valerie.gif')},
        {'id': 4, 'function': this._ada, 'image': require('./images/Ada.jpg')},
        {'id': 5, 'function': this._sabrina, 'image': require('./images/Sabrina.png')}
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
      <ScrollView>
      {
        this.state.data.map((item, index) => (
           <View key = {item.id} style = {styles.item}>
              <TouchableHighlight onPress={item.function}>
              <Image
                style={{width: 300, height: 400}}
                source={item.image}
              />
              </TouchableHighlight>
           </View>
      ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
     },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});
