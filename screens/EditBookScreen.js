import React from 'react';
import {
  ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity
} from 'react-native';
import { Icon } from 'expo';

export default class EditBookScreen extends React.Component {
  static navigationOptions = {
    title: 'Take this book ?',
    tabBarVisible: null
  };

  render() {
    const title = this.props.navigation.getParam('title');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>


        <View style={styles.updateContainer}>
          <Text style={styles.info}>Update the details</Text>
          <TextInput style={styles.input} autoCorrect={false} placeholder="Who are you ?" selectionColor="#428AF8" />
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderBottomWidth: 2,
    borderColor: '#428AF8'
  },
  title: {
    fontSize: 24,
    alignSelf: 'center'
  },
  updateContainer: {
    marginTop: 30,
    margin: 30,
  },
  info: {
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: '#428AF8',
    borderRadius: 40,
    marginTop: 100,
    padding: 10
  },
  buttonText: {
    color: 'white',
  }
});
