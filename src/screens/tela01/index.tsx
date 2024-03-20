import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';


export default function App() {
  return (
    <View style={styles.container01}>
      <View style={styles.container02}>
        <Image style={styles.image} source={require('./src/assets/image 7.png')}/>
        <View style={styles.classes}>
          <View style={styles.titles}><Text>Séries</Text>
          </View>
          <View style={styles.titles}><Text>Filmes</Text>
          </View>
          <View style={styles.titles}><Text>Categorias</Text>
          </View>
          <View style={styles.titles01}><Text>Suspense no ar · Detetive amadores</Text>
          </View>
        </View>
        </View>     
    </View>
  );
}
const styles = StyleSheet.create({
  container01: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
  container02: {

  },
  image: {
  },
  classes: {
  },
  titles: {
    fontSize: 10,
    color: "#FFFFFF",
  },
  titles01: {
    color: "#FFFFFF",
    fontSize, 8,
  },
  },

  });  