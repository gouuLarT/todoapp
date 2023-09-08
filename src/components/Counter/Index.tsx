import { View, Text } from "react-native";
import styles from './styles'
import { useState } from "react";
import React from "react";

function Counter(){
    const [count, setCount] = useState<number>(0)
    
    const increment = () => {
        setCount(count + 1);
      };
    
      const decrement = () => {
        setCount(count - 1);
      };

    return(
        <View style={styles.container}>
            <Text style={styles.counter}> { count } </Text>
        </View>
    )
}

export default Counter