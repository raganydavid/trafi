import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'; // a Button-t ide importáltuk
import Button from './components/Button';

export default function App() {
  const[count, setDCounter] = useState(0);
  function increment(){
    let res = count+1;
    setDCounter(res);
  }

  function decrement(){
    let res = count-1;
    setDCounter(res);
  }

  function reset(){
    setDCounter(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgalom</Text>
      <Text style={styles.title}>Számláló</Text>

      <Text style={styles.count}>{count}</Text>
      
      <Button title="Növel" 
      onPress={increment} />   

      <Button title="Csökkent" 
      onPress={decrement} />  

      <Button title="Töröl" 
      onPress={reset} /> 

      <StatusBar style="auto" />
    </View>
  );
}

// a Button-t nem úőgy adjuk be mint a HTML-be hanem see above

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navy',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
  count: {
    fontSize: 54,
    color: 'yellow',
  },
});
