import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import React from 'react'

export default function Lainnya() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: '5%', borderBottomWidth: 1, borderBottomColor: '#DADADA'}}>
            <View>
              <Ionicons name='desktop-outline' size={150} color='#0085CC'/>
            </View>
            <View>
              <Ionicons name='library-outline' size={150} color='#0085CC' />
            </View>
          </View>
          <TouchableOpacity style={styles.textContainer}>
            <Text>Tentang</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textContainer}>
            <Text>Favorit Destinasi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textContainer}>
            <Text>Kritik dan Saran</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textContainer}>
            <Text>Nilai Aplikasi</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginVertical: '5%'}}>
          <View style={{marginVertical: '5%'}}>
            <Text>App Version 1.0.0</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>Hak Cipta © 2021</Text>
            <Text style={{fontWeight: 'bold'}}>Dinas Kebudayaan dan Pariwisata Belitung Timur</Text>
          </View>
          <TouchableOpacity style={{marginVertical: '5%'}}>
            <Text style={{color: '#0085CC'}}>www.disbupdar.beltim.go.id</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textContainer: {padding: '5%', borderBottomWidth: 1, borderBottomColor: '#DADADA'},
})