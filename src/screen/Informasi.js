import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Informasi() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{padding: '5%', borderBottomColor: '#E0E0E0', borderBottomWidth: 2}}>
            <Text style={{fontSize: 20}}>Informasi dan Berita</Text>
          </View>
          <View style={{paddingHorizontal: '5%'}}>
            <TouchableOpacity style={styles.newsContainer}>
              <View style={styles.newsImage}></View>
              <View style={styles.newsInfo}>
                <Text style={styles.h2}>Adakan Kejurkab Tinju 2022</Text>
                <Text>20 Oktober 2021</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsContainer}>
              <View style={styles.newsImage}></View>
              <View style={styles.newsInfo}>
                <Text style={styles.h2}>Adakan Kejurkab Tinju 2022</Text>
                <Text>20 Oktober 2021</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsContainer}>
              <View style={styles.newsImage}></View>
              <View style={styles.newsInfo}>
                <Text style={styles.h2}>Adakan Kejurkab Tinju 2022</Text>
                <Text>20 Oktober 2021</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsContainer}>
              <View style={styles.newsImage}></View>
              <View style={styles.newsInfo}>
                <Text style={styles.h2}>Adakan Kejurkab Tinju 2022</Text>
                <Text>20 Oktober 2021</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsContainer}>
              <View style={styles.newsImage}></View>
              <View style={styles.newsInfo}>
                <Text style={styles.h2}>Adakan Kejurkab Tinju 2022</Text>
                <Text>20 Oktober 2021</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsContainer}>
              <View style={styles.newsImage}></View>
              <View style={styles.newsInfo}>
                <Text style={styles.h2}>Adakan Kejurkab Tinju 2022</Text>
                <Text>20 Oktober 2021</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
})