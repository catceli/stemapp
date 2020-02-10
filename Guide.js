import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

export default class Guide extends React.Component {
  constructor(props){
    super(props);
    this._valerie = this._valerie.bind(this)
    this.state = {
      defaultStory: null
    }
  }

  _valerie(){
    this.props.update("Valerie")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Guide</Text>
        <TouchableHighlight onPress={this._valerie}>
          <Image
            style={{width: 300, height: 400}}
            source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/NASA_photo_of_data_scientist_Valerie_L._Thomas.gif/220px-NASA_photo_of_data_scientist_Valerie_L._Thomas.gif"}}
<<<<<<< HEAD
          />
        </TouchableHighlight>
=======
            />
          </TouchableHighlight>
>>>>>>> d1cfe8d01703504c03040e34a4ceb09eb7a12f71
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
