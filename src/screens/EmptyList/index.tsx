import { View, Text, Image } from "react-native";
import styles from "./styles";
import Counter from "../../components/Counter/Index";


export function EmptyList() {
  
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

        <View style={styles.imageBox}>
        <Image
          source={require('../../assets/Clipboard.png')}
        />
        </View>

        <View>
          <Text style={styles.textYet}>Você ainda não tem tarefas cadastradas</Text>
          <Text style={styles.textCreate}>Crie tarefas e organize seus itens a fazer</Text>
        </View>

      </View>

      )
    }