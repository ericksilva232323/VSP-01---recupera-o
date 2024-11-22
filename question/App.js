import { db } from "./firebase";
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './screen/loginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


