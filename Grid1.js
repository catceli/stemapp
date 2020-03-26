import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Flatlist } from 'react-native';
import { TabNavigator } from 'react-navigation';
// import Current from "./Current";
// import Hypatia from "./puzzles/Hypatia";
// import Ada from "./puzzles/Ada";
// import Julia from "./puzzles/Julia";
// import Sabrina from "./puzzles/Sabrina";
// import Valerie from "./puzzles/Valerie";

export default class Grid1 extends React.Component {
  constructor(props){
    super(props);
    this._helper = this._helper.bind(this)
    this.state = {
      defaultStory: null,
      data: [
        {'id': 0, 'name': "Julia", 'image': require('./images/Julia.jpg')},
        {'id': 1, 'name': "Hypatia", 'image': require('./images/Hypatia.jpg')},
        {'id': 2, 'name': "Valerie", 'image': require('./images/Valerie.gif')},
        {'id': 3, 'name': "Ada", 'image': require('./images/Ada.jpg')},
        {'id': 4, 'name': "Sabrina", 'image': require('./images/Sabrina.png')}
      ],
    }
  }

  _helper(name){
    this.props.update(name)
  }

  // const TabNav = TabNavigator(
  //   {
  //     Default: { screen: Current },
  //     Puzzle: { screen: JSON.parse(this.props.puzzle) },
  //   }
  // )
  //
  // _tabNav(){
  //   return(<TabNav />)
  // }

  render() {
    return (
      <View>
        <ScrollView centerContent={true} contentContainerStyle={{ alignItems: 'center' }}>
        {
          this.state.data.map((item, index) => (
             <View key = {item.id}>
                <TouchableHighlight onPress={() => this._helper(item.name)} underlayColor='orange'>
                  <Image
                    style={ styles.circle }
                    resizeMode='cover'
                    source={item.image}
                  />
                </TouchableHighlight>
                <Text style = {{ alignSelf: 'center', fontSize: 24 }}>{item.name}</Text>
             </View>
        ))}
        </ScrollView>
        {//this._tabNav
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: 40,
    padding: 0,
    justifyContent: 'center',
  },
 container: {
   flex: 1,
   flexDirection: 'column',
   justifyContent: 'space-around',
 },
});
