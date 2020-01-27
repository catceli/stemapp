import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Julia extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      puzzle: "Julia"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Julia Robinson</Text>
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
