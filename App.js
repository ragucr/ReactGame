/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import Header from './components/Header';
import CardView from './components/CardView';
import NumberInput from './components/NumberInput';

const App = () => {
  let confirmedOutput;

  const [enteredNumber, setEnteredNumber] = useState('');
  const [confirmedNumber, setConfirmedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);

  const numberInputHandler = input => {
    setEnteredNumber(input.replace(/[^0-9]/g, ''));
  }


  const resetButtonHandler = () => {
    setEnteredNumber('');
    setConfirmed(false);

  }

  const confirmButtonHandler = () => {
    const chosenValue = parseInt(enteredNumber);

    if (isNaN(chosenValue) || chosenValue <= 1 || chosenValue > 99) {

      Alert.alert('Invalid Number', 'Plese select a number from 1 to 99',
        [
          { text: 'Confirm', onPress: resetButtonHandler, style: 'destructive' },

        ],
        { cancelable: false },
      );

      return;
    }
    setConfirmed(true);
    setConfirmedNumber(chosenValue);
    Keyboard.dismiss();
  }

  if(confirmed)
    confirmedOutput = <CardView style={styles.summary}><Text> You have confirmed : {confirmedNumber}</Text></CardView>;

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View>

        <Header>GAME</Header>
        <Text style={styles.startText}>Start a New Game!</Text>
        <View style={styles.main}>
          <CardView style={styles.inputContainer}>
            <Text>Select a number</Text>

            <NumberInput style={styles.input} value={enteredNumber} onChangeText={numberInputHandler} keyboardType="number-pad" maxLength={2} autoFocus={true} />

            <View style={styles.buttonContainer}>
              <View style={styles.button}><Button title="Reset" onPress={resetButtonHandler} color="red" ></Button></View>
              <View style={styles.button}><Button title="Confirm" onPress={confirmButtonHandler}></Button></View>
            </View>
          </CardView>
          {confirmedOutput}
        </View>
        

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

  main: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  startText: {
    alignSelf: 'center',
    marginTop: 20,
  },

  inputContainer: {
    marginVertical: 30,
    width: '80%',

  },


  buttonContainer: {
    marginVertical: 10,
    flexDirection: 'row',

  },
  button: {
    width: 100
  },

  input: {
    width: 30,
    alignContent: 'center',
    height: 50
  },

  summary:{
    marginTop:10,
  }

});

export default App;
