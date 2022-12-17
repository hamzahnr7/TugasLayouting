// import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TabNavigation from './src/TabNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}

export default App