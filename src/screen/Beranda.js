import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

const Beranda = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.topContainer}>
            <TouchableOpacity>
              <Ionicons name='home' size={40} color='#0085CC'/>
            </TouchableOpacity>
            <View style={styles.textInputOutline}>
              <Ionicons name='search-outline' size={20} color='gray'/>
              <TextInput placeholder='Cari Wisata' style={styles.textInput}/>
            </View>
            <TouchableOpacity>
              <Ionicons name='heart-circle-outline' size={40} color='#0085CC'/>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: 'gray', height: 360}}>
            <View style={{flex: 1, justifyContent: 'flex-end', padding: '5%'}}>
              <Text style={{color: 'white'}}>Wisata Air</Text>
              <Text style={{color: 'white', fontSize: 32}}>Pulau Bukulimau UnderWater</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Beranda

const styles = StyleSheet.create({
  textInputOutline: {
    flexDirection: 'row', 
    alignItems: 'center', 
    borderRadius: 50, 
    borderColor: 'black', 
    borderWidth: 1, 
    paddingHorizontal: 10
  },
  textInput: {
    width: '60%', 
    height: 40, 
    marginLeft: 5
  },
  topContainer: {
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})