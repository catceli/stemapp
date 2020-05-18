import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Current from "./Current";
import Hypatia from "./puzzles/Hypatia";
import Ada from "./puzzles/Ada";
import Julia from "./puzzles/Julia";
import Sabrina from "./puzzles/Sabrina";
import Valerie from "./puzzles/Valerie";

export default class Guide extends React.Component {
  constructor(props){
    super(props);
    this._helper= this._helper.bind(this)
    this.state = {
      defaultStory: null
    }
  }

  _helper(name){
    this.props.update(name)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Guide</Text>
        <TouchableHighlight onPress={() => this._helper("Valerie")}>
          <Image
            style={{width: 300, height: 400}}
            source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/NASA_photo_of_data_scientist_Valerie_L._Thomas.gif/220px-NASA_photo_of_data_scientist_Valerie_L._Thomas.gif"}}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
