import React from 'react';
import Julia from "./puzzles/Julia";
import Hypatia from "./puzzles/Hypatia"
import Valerie from "./puzzles/Valerie"
import Ada from "./puzzles/Ada"
import Sabrina from "./puzzles/Sabrina"
import Grid1 from "./Grid1";
import Guide from "./Guide"
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

 const MainNavigator = createBottomTabNavigator(
  {
    Default: { screen: Guide },
    //Puzzle: { screen: JSON.parse(this.props.puzzle) },
  }
)

export default class Nav extends Component {
  constructor(props){
    super(props)
    this._updateMarkers = this._updateMarkers.bind(this)
    this.state={
      markers: [],
      latitude: 37.545135,
      longitude: -122.299969,
      title: 'Nueva'
    }
  }

  _updateMarkers(marker){
      this.setState({
        markers: [...this.state.markers, marker],
        latitude: marker.latitude,
        longitude: marker.longitude,
        title: marker.title
      })
  }

  render() {
    return(
      <MainNavigator
        // screenProps={{
        //   update: this.props.update,
        //   puzzle: this.props.puzzle,
        //   defaultStory: this.props.defaultStory,
        // }}
      />
    )
  }
}
