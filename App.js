import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.principal}>
    <View style={styles.listas}>
      <Text style={styles.lista}>LISTAS</Text>
    </View>
    <View style={styles.container1}>
      <Text style={styles.text1}>Animais</Text>
      <StatusBar style="auto" />
    </View>
    
    <View style={styles.container2}>
      <Text style={styles.text2}>Carros</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.container3}>
      <Text style={styles.text3}>Peixes</Text>
      <StatusBar style="auto" />
    </View>
    
    <View style={styles.container4}>
      <Text style={styles.text4}>Times</Text>
      <StatusBar style="auto" />
    </View>
    
    <View style={styles.container5}>
      <Text style={styles.text5}>Filmes</Text>
      <StatusBar style="auto" />
    </View>
    
    <View style={styles.container6}>
      <Text style={styles.text6}>Linguagens</Text>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principal:{
    flex: 1,
    backgroundColor: '#CE66'
  },
  listas:{
    backgroundColor: '#099',
    width: '100%',
    height: '8%',
    marginTop: 1,
    borderRadius: 15
  },
  lista:{
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 15
  },
  container1: {
    marginTop: 10,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    height: '14%',
    backgroundColor: '#903',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: '#F06',
    fontSize: 30
  },


  container2: {
    marginTop: 10,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    height: '14%',
    backgroundColor: '#06F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  text2: {
    color: '#009',
    fontSize: 30,
  },

  container3: {
    marginTop: 10,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    height: '14%',
    backgroundColor: '#69F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  text3: {
    color: '#339',
    fontSize: 30,
  },

  container4: {
    marginTop: 10,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    height: '14%',
    backgroundColor: '#396',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  text4: {
    color: '#030',
    fontSize: 30,
  },

  container5: {
    marginTop: 10,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    height: '14%',
    backgroundColor: '#3CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  text5: {
    color: '#066',
    fontSize: 30,
  },

  container6: {
    marginTop: 10,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    height: '14%',
    backgroundColor: '#F60',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  text6: {
    color: '#F30',
    fontSize: 30,
  },
});
