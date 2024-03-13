import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Switch } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container01}>
        <Text style={styles.entrar}>Entrar</Text>
        <TextInput placeholder='Email ou número de telefone' style={styles.login} placeholderTextColor={"#9C9C9C"}/>
        <TextInput placeholder='Senha' style={styles.login} placeholderTextColor={"#9C9C9C"}/>
        <TouchableOpacity style={styles.buttonentrar}>
          <Text style={[{color:'#FFFFFF', fontSize: 15,}]}>Entrar</Text>
        </TouchableOpacity>
        <View>
        <Switch></Switch>
        <Text>Lembre-se de mim</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container01: {
    gap: 10,
    width: "100%",
    padding: 30,
  },
  entrar:{
    color: "#FFFFFF",
    fontSize: 18,
  },
  login: {
    color: "#FFFFFF",
    backgroundColor: "#333333",
    padding: 10,
    fontSize: 15,
    borderRadius: 4,
  },
  buttonentrar: {
    backgroundColor:"#E50914",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    height: 40,
  },
});
