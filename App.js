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
      cScreen: null,
      puzzle: null
    }
  }

  _setDefault(screen){
    this.setState({
      defaultStory: screen,
    })
  }

  _setPuzzle(screen){
    if (!screen){
      this.setState({
        cScreen: screen,
      })
    } else {
      this.setState({
        cScreen: screen,
        puzzle: screen
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.defaultStory == null ?
          <Survey
            update={this._setDefault}
            defaultStory={this.state.defaultStory}
          /> :
          <Current
            defaultStory={this.state.defaultStory}
            cScreen={this.state.cScreen}
            update={this._setPuzzle}
            puzzle={this.state.puzzle}
          />
        }
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
