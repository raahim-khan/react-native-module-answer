import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> Hello World </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 40
  },
});

export default App;