import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground,} from 'react-native';


export default function Settings() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.groupTitles}>
            <View style={styles.iconsGroup}>
            <Image source={require('../../assets/sino.png')} style={styles.icons} resizeMethod='resize' resizeMode="cover"/>
            <Text style={styles.titles}>Notificações</Text>
            </View>
            <Image source={require('../../assets/maiorq.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupTitles}>
            <View style={styles.iconsGroup}>
            <Image source={require('../../assets/play1.png')} style={styles.icons} resizeMethod='resize' resizeMode="contain"/>
            <Text style={styles.titles}>Minha lista</Text>
            </View>
            <Image source={require('../../assets/maiorq.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupTitles}>
            <View style={styles.iconsGroup}>
            <Image source={require('../../assets/engrenagem.png')} style={styles.icons} resizeMethod='resize' resizeMode="cover"/>
            <Text style={styles.titles}>Configurações</Text>
            </View>
            <Image source={require('../../assets/maiorq.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupTitles}>
            <View style={styles.iconsGroup}>
            <Image source={require('../../assets/persona.png')} style={styles.icons} resizeMethod='resize' resizeMode="cover"/>
            <Text style={styles.titles}>Conta</Text>
            </View>
            <Image source={require('../../assets/maiorq.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupTitles}>
            <View style={styles.iconsGroup}>
            <Image source={require('../../assets/interroga.png')} style={styles.icons} resizeMethod='resize' resizeMode="cover"/>
            <Text style={styles.titles}>Ajuda</Text>
            </View>
            <Image source={require('../../assets/maiorq.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={[{color: "#FFFFFF", fontSize: 12, fontWeight: 'bold', padding: 5, alignItems: "center", justifyContent: "center"}]}> Sair </Text>
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
groupTitles: {
 justifyContent: 'space-between',
 alignItems: "center",
 flexDirection:'row',
 backgroundColor:"#202020",
 padding: 10,
 margin: 4,
 width: 350,

},
iconsGroup: {
  flexDirection: "row",
  alignItems: "center",
  gap: 5,
},
icons: {
  width: 12,
  height: 12,
},
titles: {
  color: "#FFFFFF",
  fontWeight: '400',
  fontSize: 15,  
},
}); 