import React from 'react';
import Guide from "./Guide"
import Survey from "./Survey";
import Current from "./Current";
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

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

//This function updates the props for all of the child components. cScreen
//can be set to false values so that if Current.js recieves one of these values,
//it will go to whatever the user's default screen is. These values are used instead
//of the components themselves so that whatever component calls the function does
//not need to have the prop of the user's default. Puzzle is always set to
//the same screen value so that when passed to a component that may be on a different
//screen than cScreen, the puzzle prop will always exist as a backtracking component,
//although this hasn't been implemented yet.
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
      <View style={[styles.container, {backgroundColor: 'orange'}]}>
        {this.state.defaultStory == null ?
          <Survey
            update={this._setDefault}
          /> :
          <Current
            defaultStory={this.state.defaultStory}
            cScreen={this.state.cScreen}
            update={this._setPuzzle}
            puzzle={this.state.puzzle}
            setDefault={this._setDefault}
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
