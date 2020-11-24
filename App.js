import React from 'react'
import { View, Text, Button } from 'react-native'
import Logo from './components/Logo'

const App = () => {
  const showData = () => alert('Hello button')
  return (
    <View>
      <Logo />
      <Text>Hello react native</Text>
      <Text>สวัสดี React native</Text>
      <Logo />
      <Button onPress={showData} title='Click Me !!'></Button>
    </View>
  )
}

export default App

