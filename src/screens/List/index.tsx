import { View, Text, Image } from "react-native";
import styles from "./styles";
import Counter from "../../components/Counter/Index";
import Task from "../../components/Task";


export function List() {
  
    return (
      <View>
        
        <View style={styles.container}>
          <Text style={styles.textCriadas}>Criadas</Text>
          <Counter/>
        </View>

        <View style={styles.containerDOIS}>
          <Text style={styles.textConcluidas}>Concluidas</Text>
          <Counter/>
        </View>

        <Task />

      </View>

      )
    }