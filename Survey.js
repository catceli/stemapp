import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Questions from "./Questions"
import Default from "./Default";

export default class Survey extends React.Component {
  constructor(props){
    super(props);
    this._update = this._update.bind(this);
    this.state = {
      defaultStory: null,
      answers: [],
    }
  }

  _update(answer){
    var answers = this.state.answers
    answers.push(answer)
    this.setState({
      answers: answers
    });
    if (answer == "No thanks."){
      this.props.update("Grid")
    } else if (answer == "S" || answer == "T" || answer == "E" || answer == "M"){
      this.props.update("Guide")
    }
  }

  render() {
    return (
      <View style={styles.container}>
      {this.state.defaultStory == null ?
        <Questions
          update={this._update}
        />:<Default></Default>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 35,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
