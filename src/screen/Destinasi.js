import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import React from 'react'

export default function Destinasi() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.topContainer}>
            <View>
              <Text style={{fontSize: 20}}>Destinasi</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name='search-outline' size={30} color='#4B5563' style={{marginRight: 15}}/>
              <Ionicons name='map-outline' size={30} color='#4B5563'/>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <SafeAreaView>
            <ScrollView>
              <View style={{flexDirection: 'row', borderColor: 'gray', borderWidth: 1, paddingHorizontal: '5%', paddingVertical: '3%'}}>
                <TouchableOpacity style={{marginRight: '5%'}}>
                  <Text style={{color: 'black'}}>Semua</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: '5%'}}>
                  <Text>Wisata Alam</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: '5%'}}>
                  <Text>Wisata Air</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: '5%'}}>
                  <Text>Wisata Kuliner</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: '5%'}}>
                  <Text>Wisata Sejarah</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.boxContainer}>
            <View style={styles.boxItem}>
              <Text style={{color: 'white'}}>Pantai Serdang</Text>
            </View>
            <View style={styles.boxItem}>
              <Text style={{color: 'white'}}>Vihara Patung Dewi Kwan Im</Text>
            </View>
            <View style={styles.boxItem}>
              <Text style={{color: 'white'}}>Replika SD Laskar Pelangi</Text>
            </View>
            <View style={styles.boxItem}>
              <Text style={{color: 'white'}}>Pantai Nyiur Melambai</Text>
            </View>
            <View style={styles.boxItem}>
              <Text style={{color: 'white'}}>Pantai Serdang</Text>
            </View>
            <View style={styles.boxItem}>
              <Text style={{color: 'white'}}>Vihara Patung Dewi Kwan Im</Text>
            </View>
            <View style={styles.boxItem}>
              <Text style={{color: 'white'}}>Replika SD Laskar Pelangi</Text>
            </View>
            <View style={styles.boxItem}>
              <Text style={{color: 'white'}}>Pantai Nyiur Melambai</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: '5%', 
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0'
  },
  boxContainer: {
    flexDirection: 'row', 
    width: '100%', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    padding: '5%'
  },
  boxItem: {
    width: 175, 
    height: 175, 
    backgroundColor: 'gray', 
    borderRadius: 25,
    padding: '5%',
    justifyContent: 'flex-end',
    marginVertical: '2%',
  },
})