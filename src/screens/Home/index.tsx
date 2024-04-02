import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground,} from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
          <ImageBackground style={styles.imagebackground} source={require('../../assets/image 7.png')} resizeMethod='resize' resizeMode="cover">
            <View style={styles.header}>
              <View style={[styles.headergroupbuttos, {alignItems:'flex-start'}]}>
              <TouchableOpacity>
               <Image style={styles.headerButtonlogo} resizeMethod='resize' resizeMode='contain' source={require('../../assets/image 8.png')}/>
              </TouchableOpacity>
            </View>
              <View style={[styles.headergroupbuttos, {alignItems:'center', flexDirection:'row', justifyContent:'flex-end'}]}>
                <TouchableOpacity>  
                  <Image style={styles.headerButton} resizeMethod='resize' resizeMode='contain' source={require('../../assets/Vector.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.headerButton} resizeMethod='resize' resizeMode='contain' source={require('../../assets/Rectangle 5.png')}/>
                </TouchableOpacity>
            </View>
          </View>
            <View style={styles.boxtitles} >
              <TouchableOpacity>
              <Text style={styles.headertitles}>Séries</Text>
              </TouchableOpacity>
              <TouchableOpacity>
              <Text style={styles.headertitles}>Filmes</Text>
              </TouchableOpacity>
              <TouchableOpacity>
              <Text style={styles.headertitles}>Categorias</Text>
              </TouchableOpacity>
          </View>
          <View style={[{paddingVertical:210, alignItems:'center',}]}>
            <Text style={styles.titlebaseboard}>Suspense no ar · Detetive amadores</Text>
          </View>
        </ImageBackground>

        <View style={styles.movieList}>
          <View style={styles.groupbuttonplay}>
          <TouchableOpacity style={styles.buttonmoreoptions}>
            <Image source={require('../../assets/Vectormais.png')}/>
            <Text style={styles.buttonMoreOptionsText}>Assistir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPlay}>
          <Image source={require('../../assets/Vectorplay.png')}/>
            <Text style={styles.buttonPlayText}>Assistir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonmoreoptions}>
          <Image source={require('../../assets/VectorI.png')}/>
            <Text style={styles.buttonMoreOptionsText}>Saiba mais</Text>
          </TouchableOpacity>
          </View>
          </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    gap: 25,
    paddingTop: 25,
  },
  header: {
    flexDirection:'row',
    paddingTop: 20,
    backgroundColor:"rgba(0,0,0,0.6)",
  },
  headergroupbuttos: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 10,
  },
  headerButtonlogo: {
    width: 30,
    height: 40,
  },
  headerButton: {
    width: 20,
    height: 20,
  },
  headertitles: {
  flexDirection: 'row',
  paddingHorizontal: 10,
  color: '#FFFFFF',
  fontSize: 10,
  },
  imagebackground: {
    height: 450,
  },
  boxtitles: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 50,
    paddingTop: 25,
    backgroundColor:"rgba(0,0,0,0.6)",
    height: 60,
    alignItems: "center",
  },
  titlebaseboard: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  movieList: {
    height:250,
  },
  groupbuttonplay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonmoreoptions:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonMoreOptionsText:{
    color: "#FFFFFF"
  },

  buttonPlay: {
    backgroundColor: "#FFFFFF",
    paddingVertical:8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  buttonPlayText: {
  },
  });  

 
  
  