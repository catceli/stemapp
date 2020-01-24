import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Hypatia extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      puzzle: "Hypatia"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hypatia</Text>
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
