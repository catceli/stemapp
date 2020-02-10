import React from 'react';
import Default from "./Default";
import Guide from "./Guide"
import Survey from "./Survey";
import Current from "./Current";
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this._setDefault = this._setDefault.bind(this);
    this._setPuzzle = this._setPuzzle.bind(this);
    this.state = {
      defaultStory: null,
      puzzle: null
    }
  }

  _setDefault(screen){
    this.setState({
      defaultStory: screen,
    })
  }

  _setPuzzle(screen){
    this.setState({
      puzzle: screen,
    })
  }

  render() {
    return (
      <View style={styles.container}>
      {this.state.defaultStory == null ?
        <Survey
          update={this._setDefault}
        /> :
        <Current
          defaultStory={this.state.defaultStory}
          puzzle={this.state.puzzle}
          update={this._setPuzzle}
        />}
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
