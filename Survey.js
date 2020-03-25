import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import _ from 'lodash';
import Default from "./Default";

export default class Survey extends React.Component {
  constructor(props){
    super(props);
    this._processButton = this._processButton.bind(this);
    this._update = this._update.bind(this);
    this.state = {
      text: ["Hi there! Thank you for downloading STEMinism. Would you like to take a quick to personalize your journey on STEMinism?", "Which topic do you have the most experience in?", "Which topic do you have the least experience in?", "Would you prefer to learn more about familiar topics or try new topics in this app?", "What is your favorite letter in STEM?"],
      buttonQs: [
                  {'id': 0, '0': "Sure!", '1': "Science", '2': "Science", '3': "Try new topics", '4': "S"},
                  {'id': 1, '0': "No thanks.", '1': "Technology", '2': "Technology", '3': "Learn more about familiar topics", '4': "T"},
                  {'id': 2, '0': " ", '1': "Engineering", '2': "Engineering", '3': " ", '4': "E"},
                  {'id': 3, '0': " ", '1': "Math", '2': "Math", '3': " ", '4': "M"}
                ],
      question: '0'
    }
  }

  _update(answer){
    if (answer == "No thanks."){
      this.props.update("Grid")
    } else if (_.includes('STEM', answer)){
      this.props.update("Guide")
    }
  }

  _processButton(number){
    let question = JSON.stringify(JSON.parse(this.state.question)+1);
    this._update(this.state.buttonQs[number][this.state.question])
    this.setState({
      question: question
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>{this.state.text[JSON.parse(this.state.question)]}</Text>
      {
        this.state.buttonQs.map((item, index) => (
           <View key = {item.id} style = {styles.item}>
              <Button
                style={styles.button}
                title={item[this.state.question]}
                onPress={() => this._processButton(item.id)}>
              </Button>
           </View>
      ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#34d1aa',
  },
  item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
     },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overlayColor: 'red',
  },
  text: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    fontSize: 16,
  },
});
