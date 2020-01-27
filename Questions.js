import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Questions extends React.Component {
  constructor(props){
    super(props);
    this._processButton1 = this._processButton1.bind(this);
    this._processButton2 = this._processButton2.bind(this);
    this._processButton3 = this._processButton3.bind(this);
    this._processButton4 = this._processButton4.bind(this);
    this.state = {
      defaultStory: null,
      text: ["Hi there! Thank you for downloading STEMinism. Would you like to take a quick to personalize your journey on STEMinism?", "Which topic do you have the most experience in?", "Which topic do you have the least experience in?", "Would you prefer to learn more about familiar topics or try new topics in this app?", "What is your favorite letter in STEM?"],
      button1: ["Sure!", "Science", "Science", "Try new topics", "S"],
      button2: ["No thanks.", "Technology", "Technology", "Learn more about familiar topics", "T"],
      button3: [" ", "Engineering", "Engineering", " ", "E"],
      button4: [" ", "Math", "Math", " ", "M"],
      question: 0
    }
  }

  _processButton1(){
    this.props.update(this.state.button1[this.state.question])
    this.setState({
      question: this.state.question+1
    })
  }

  _processButton2(){
    this.props.update(this.state.button2[this.state.question])
    this.setState({
      question: this.state.question+1
    })
  }

  _processButton3(){
    this.props.update(this.state.button3[this.state.question])
    this.setState({
      question: this.state.question+1
    })
  }

  _processButton4(){
    this.props.update(this.state.button4[this.state.question])
    this.setState({
      question: this.state.question+1
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>{this.state.text[this.state.question]}</Text>
      <Button
        style={styles.button}
        title={this.state.button1[this.state.question]}
        onPress={this._processButton1}
      />
      <Button
        style={styles.button}
        title={this.state.button2[this.state.question]}
        onPress={this._processButton2}
      />
      <Button
        style={styles.button}
        title={this.state.button3[this.state.question]}
        onPress={this._processButton3}
      />
      <Button
        style={styles.button}
        title={this.state.button4[this.state.question]}
        onPress={this._processButton4}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#34d1aa',
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
