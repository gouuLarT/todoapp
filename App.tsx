import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import { EmptyList } from "./src/screens/EmptyList";
import { StyleSheet } from "react-native";
import { List } from './src/screens/List'

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar 
    translucent 
    backgroundColor="transparent" 
    style="light"/>
    <Header />
    <List />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    flex: 1
  }
})
