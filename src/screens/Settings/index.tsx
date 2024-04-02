import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground,} from 'react-native';


export default function Settings() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity>
            <Text style={styles.titles}>Notificações</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.titles}>Minha lista</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.titles}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.titles}>Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.titles}>Ajuda</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#000000",
},
titles: {
  color: "#FFFFFF",
  backgroundColor:"#202020",
  
},
}); 