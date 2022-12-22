import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
// import { BoxCategory } from '../components/BoxCategory';

const BoxCategory = (props) => {
  return (
    <TouchableOpacity style={styles.boxCategory}>
      <Ionicons name={props.icon} size={40} color='#0085CC'/>
      <View>
        <Text style={{textAlign: 'center', fontSize: 12}}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
  
}

const Beranda = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.topContainer}>
            <TouchableOpacity>
              <Ionicons name='home' size={30} color='#0085CC'/>
            </TouchableOpacity>
            <View style={styles.textInputOutline}>
              <Ionicons name='search-outline' size={20} color='gray'/>
              <TextInput placeholder='Cari Wisata' style={styles.textInput}/>
            </View>
            <TouchableOpacity>
              <Ionicons name='heart-circle-outline' size={30} color='#0085CC'/>
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
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly'
              }}>
              <BoxCategory icon='rose-outline' text='Wisata Alam'/>
              <BoxCategory icon='water-outline' text='Wisata Air'/>
              <BoxCategory icon='restaurant-outline' text='Wisata Kuliner'/>
              <BoxCategory icon='ribbon-outline' text='Wisata Sejarah'/>
              <BoxCategory icon='bed-outline' text='Hotel Penginapan'/>
              <BoxCategory icon='people-outline' text='Layanan Publik'/>
              <BoxCategory icon='train-outline' text='Travel Transportasi'/>
              <BoxCategory icon='cart-outline' text='Belanja Oleh - oleh'/>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: 'gray', marginHorizontal: '5%', paddingVertical: '10%', paddingHorizontal: '10%', borderRadius: 20}}>
            <Text style={[styles.h2, styles.textWhite, {marginBottom: 15}]}>Jagalah Kesehatan dan Keselamatan dari Virus Covid-19</Text>
            <Text style={styles.textWhite}>Selengkapnya {'>'}</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{paddingHorizontal: '5%', paddingVertical: '5%', 
          alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#afafaf', marginHorizontal: '5%'}}>
            <Text style={{fontSize: 24}}>Informasi dan Berita</Text>
            <Text>Seputar Belitung Timur</Text>
          </View>
          <View style={{paddingHorizontal: '5%'}}>
            <View style={styles.newsContainer}>
              <View style={styles.newsImage}></View>
              <View style={styles.newsInfo}>
                <Text style={styles.h2}>Adakan Kejurkab Tinju 2022</Text>
                <Text>20 Oktober 2021</Text>
              </View>
            </View>
            <View style={styles.newsContainer}>
              <View style={styles.newsImage}></View>
              <View style={styles.newsInfo}>
                <Text style={styles.h2}>Adakan Kejurkab Tinju 2022</Text>
                <Text>20 Oktober 2021</Text>
              </View>
            </View>
            <View style={styles.newsContainer}>
              <View style={styles.newsImage}></View>
              <View style={styles.newsInfo}>
                <Text style={styles.h2}>Adakan Kejurkab Tinju 2022</Text>
                <Text>20 Oktober 2021</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={{paddingHorizontal: '5%', paddingVertical: '5%', alignItems: 'center'}}>
            <Text style={{fontSize: 18, color: '#0085CC'}}>Informasi Lainnya</Text>
          </TouchableOpacity>
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
    flex: 1, 
    paddingHorizontal: 10,
    marginHorizontal: '5%'
  },
  textInput: {
    flex: 1,
    height: 40, 
    marginLeft: 5
  },
  topContainer: {
    paddingHorizontal: '5%',
    paddingVertical: '2%',
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
    width: 60,
    marginHorizontal: '2%',
    marginVertical: '5%',
    alignItems: 'center'
  },
  newsContainer : {
    flexDirection: 'row',
    paddingVertical: '3%',
    borderBottomWidth: 1,
    borderColor: '#afafaf',
    borderBottomStartRadius: 5
  },
  newsImage: {
    backgroundColor: 'gray', 
    width: 80, 
    height: 80, 
    borderRadius: 12
  },
  newsInfo: {
    flex: 1, 
    marginHorizontal: '5%',
    justifyContent: 'center'
  },
  h2: {
    fontSize: 20
  },
  textWhite: {
    color: 'white'
  }
})