import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from "./Grid";
import Grid1 from "./Grid1";
import Guide from "./Guide"

export default class Default extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      defaultStory: this.props.defaultStory,
    }
  }

  render() {
    return (
      <View style={styles.container}>
      {this.state.defaultStory == "Guide" ?
        <Guide
        update={this.props.update}/> : <Grid1
        update={this.props.update}/>}
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
