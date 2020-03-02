import React from 'react';
import Default from "./Default";
import Julia from "./puzzles/Julia";
import Hypatia from "./puzzles/Hypatia"
import Valerie from "./puzzles/Valerie"
import Ada from "./puzzles/Ada"
import Sabrina from "./puzzles/Sabrina"
import { StyleSheet, Text, View } from 'react-native';

export default class Current extends React.Component {
  constructor(props){
    super(props);
    this._puzzle = this._puzzle.bind(this);
    this.state = {
      puzzle: this.props.puzzle
    }
  }

  _puzzle(props){
    const cScreen = props.cScreen;
    if (cScreen) {
      if (cScreen == 'Julia') {
        return (<Julia update={this.props.update}/>);
      } else if (cScreen == 'Hypatia') {
        return (<Hypatia update={this.props.update}/>);
      } else if (cScreen == 'Valerie') {
        return (<Valerie update={this.props.update}/>);
      } else if (cScreen == 'Ada') {
        return (<Ada update={this.props.update}/>);
      } else if (cScreen == 'Sabrina') {
        return (<Sabrina update={this.props.update}/>);
      }} else {
        return (<Default
          defaultStory={this.props.defaultStory}
          update={this.props.update}
          puzzle={this.props.puzzle}
        />)
    }
  }

  render() {
    return (
      <View style={styles.container}>
      {this._puzzle(this.props)}
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
