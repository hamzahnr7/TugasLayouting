import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { BoxCategory } from '../components/boxCategory';

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
        <View style={{flex: 1}}>
          <View style={{paddingTop: '5%'}}>
            <Text style={{textAlign: 'center', fontSize: 28}}>Destinasi Wisata</Text>
            <Text style={{textAlign: 'center', fontSize: 14}}>Pilihan Terbaik</Text>
          </View>
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
          </View>
          <TouchableOpacity style={{paddingBottom: '5%', borderBottomWidth: 2, borderColor: 'gray', marginHorizontal: '5%'}}>
            <Text style={{textAlign: 'center', fontSize: 18, color: '#0085CC'}}>Lihat Lainnya</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <View style={{padding: '5%'}}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 28, fontWeight: 'bold'}}>Jelajahi Sekarang</Text>
              <Text>Pilih Kategori yang diminati</Text>
            </View>
            <View style={{
              paddingHorizontal: '5%', flexDirection: 'row', 
              flexWrap: 'wrap'            
              }}>
              {/* <BoxCategory icon='rose-outline' text='Test Text'/> */}
              <TouchableOpacity style={styles.boxCategory}>
                <Ionicons name='rose-outline' size={40} color='#0085CC'/>
                <Text>Wisata Alam</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxCategory}>
                <Ionicons name='rose-outline' size={40} color='#0085CC'/>
                <Text>Wisata Alam</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxCategory}>
                <Ionicons name='rose-outline' size={40} color='#0085CC'/>
                <Text>Wisata Alam</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxCategory}>
                <Ionicons name='rose-outline' size={40} color='#0085CC'/>
                <Text>Wisata Alam</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxCategory}>
                <Ionicons name='rose-outline' size={40} color='#0085CC'/>
                <Text>Wisata Alam</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxCategory}>
                <Ionicons name='rose-outline' size={40} color='#0085CC'/>
                <Text>Wisata Alam</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxCategory}>
                <Ionicons name='rose-outline' size={40} color='#0085CC'/>
                <Text>Wisata Alam</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxCategory}>
                <Ionicons name='rose-outline' size={40} color='#0085CC'/>
                <Text>Wisata Alam</Text>
              </TouchableOpacity>
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
  },
  boxContainer: {
    flexDirection: 'row', 
    width: '100%', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    padding: '5%'
  },
  boxItem: {
    width: 155, 
    height: 175, 
    backgroundColor: 'gray', 
    borderRadius: 25,
    padding: '5%',
    justifyContent: 'flex-end',
    marginVertical: '5%',
  },
  boxCategory: {
    width: 80, 
    height: 80,
    padding: 5
  },
})