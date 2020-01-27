import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Ada extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      puzzle: "Ada"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Ada Lovelace</Text>
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
