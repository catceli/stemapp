import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Valerie extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      puzzle: "Valerie"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Valerie Thompson</Text>
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
