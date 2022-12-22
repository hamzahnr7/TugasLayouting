import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons'
import React from 'react'

export const BoxCategory = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <Ionicons name={props.icon} size={40} color='#0085CC'/>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
  
}

const style = StyleSheet.create({
  boxCategory: {
    width: 80, 
    height: 80,
    padding: 5
  },
})

