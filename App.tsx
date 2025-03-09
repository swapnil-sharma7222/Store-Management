import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleSection from './src/components/dashboardTitle'
import QuickActions from './src/components/quickActions'
import ItemStocks from './src/components/itemStocks'
import CreateItems from './src/screens/createItems'
import RegisterPage from './src/screens/register'
import LoginPage from './src/screens/login'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <TitleSection text={"Dashboard"}/>
      <QuickActions/>
      <ItemStocks/>
      <CreateItems/> */}
      {/* <RegisterPage/> */}
      <LoginPage/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    backgroundColor: "#ffffff"
  },
  section1: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    padding: 10
  },
  box: {
    height: 100,
    width: 100
  },
  box1:{
    backgroundColor: "red"
  },
  box2: {
    backgroundColor: "green"
  },
  box3: {
    backgroundColor: "blue"
  }
})