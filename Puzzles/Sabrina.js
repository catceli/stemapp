import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Sabrina extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      puzzle: "Sabrina"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sabrina Gonzalez Pasterski</Text>
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
