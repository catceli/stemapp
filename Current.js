import React from 'react';
import Julia from "./puzzles/Julia";
import Hypatia from "./puzzles/Hypatia"
import Valerie from "./puzzles/Valerie"
import Ada from "./puzzles/Ada"
import Sabrina from "./puzzles/Sabrina"
import Grid1 from "./Grid1";
import Guide from "./Guide"
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//https://reactnavigation.org/docs/bottom-tab-navigator/

const Tab = createBottomTabNavigator();

export default class Current extends React.Component {
  constructor(props){
    super(props);
    this._puzzle = this._puzzle.bind(this);
    this._MyTabs = this._MyTabs.bind(this);
    //this._tabNav = this._tabNav.bind(this);
    this.state = {
      puzzle: null,
      default: null,
    }
  }

  _MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Default" component={Guide} />
        <Tab.Screen name="Puzzle" component={Ada} />
      </Tab.Navigator>
    );
  }

  _puzzle(props){
    const cScreen = props.cScreen;
    if (cScreen) {
      if (cScreen == 'Julia') {
        return (
          <Julia
            update={this.props.update}
          />
        );
      } else if (cScreen == 'Hypatia') {
        return (
          <Hypatia
            update={this.props.update}
          />
        );
      } else if (cScreen == 'Valerie') {
        return (
          <Valerie
            update={this.props.update}
          />
        );
      } else if (cScreen == 'Ada') {
        return (
          <Ada
            update={this.props.update}
          />
        );
      } else if (cScreen == 'Sabrina') {
        return (
          <Sabrina
            update={this.props.update}
          />
        );
      }
    }
    else {
      if (this.props.defaultStory === "Guide"){
        return(
          <Guide
            update={this.props.update}
            puzzle={this.props.puzzle}
            defaultStory={this.props.defaultStory}
          />
        )
      }
      else {
        return(
          <Grid1
            update={this.props.update}
            puzzle={this.props.puzzle}
            defaultStory={this.props.defaultStory}
          />
        )
      }
    }
  }

  // _tabNav(){
  //   // this.setState({
  //   //   default: JSON.parse(this.props.defaultStory),
  //   //   //puzzle: JSON.parse(this.props.puzzle)
  //   // })
  //   return(<TabNav
  //     screenProps={{
  //       update={this.props.update}
  //       puzzle={this.props.puzzle}
  //       defaultStory={this.props.defaultStory}
  //     }}
  //     />)
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0.1, alignItems: "stretch", backgroundColor: "yellow"}}>
          {this._puzzle(this.props)}
        </View>
        <View style={{flex: 0.9, backgroundColor: 'blue'}}>
          <NavigationContainer style={{backgroundColor: 'red'}}>
            {this._MyTabs()}
          </NavigationContainer>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
