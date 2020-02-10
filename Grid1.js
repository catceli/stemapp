import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Flatlist } from 'react-native';

export default class Grid1 extends React.Component {
  constructor(props){
    super(props);
    this._helper = this._helper.bind(this)
    this.state = {
      defaultStory: null,
      data: [
        {'id': 1, 'name': "Julia", 'image': require('./images/Julia.jpg')},
        {'id': 2, 'name': "Hypatia", 'image': require('./images/Hypatia.jpg')},
        {'id': 3, 'name': "Valerie", 'image': require('./images/Valerie.gif')},
        {'id': 4, 'name': "Ada", 'image': require('./images/Ada.jpg')},
        {'id': 5, 'name': "Sabrina", 'image': require('./images/Sabrina.png')}
      ],
    }
  }

  _helper(name){
    this.props.update(name)
  }

  render() {
    return (
      <ScrollView>
      {
        this.state.data.map((item, index) => (
           <View key = {item.id} style = {styles.item}>
              <TouchableHighlight onPress={() => this._helper(item.name)}>
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
