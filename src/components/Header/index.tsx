import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

function Header() {
  return (
    <View>
      <View style={styles.headerBackground}>
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
