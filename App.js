import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.con}>
        <Text >
          Consult only with a doctor you trust!
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  con: {
    backgroundColor: '#7E8EF1',
    width: '90%',
    height: '30%',
    position: 'absolute',
    bottom: 0,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    elevation: 5
  }
});
