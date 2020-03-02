import React from 'react';
import _ from 'lodash';
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
    } else if (_.includes('STEM', answer)){
      this.props.update("Guide")
    }
  }

  render() {
    return (
      <View style={styles.container}>
      {this.state.defaultStory == null ?
        <Questions
          update={this._update}
        />:<Default
          defaultStory={this.props.defaultStory}
          update={this.props.update}
        />}
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
