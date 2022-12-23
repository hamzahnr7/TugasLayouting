import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

export default function Informasi() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{padding: '5%', borderBottomColor: '#E0E0E0', borderBottomWidth: 2}}>
            <Text style={{fontSize: 20}}>Informasi dan Berita</Text>
          </View>
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  )
}