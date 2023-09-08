import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import CheckBox from '../CheckBox';
import { useState } from 'react';

function Task() {
  const [checkBox, setCheckBox] = useState(false)

  return (
    <View style={styles.container}>
      <CheckBox
        checked={checkBox}
        onPress={() => setCheckBox(!checkBox)}
      />
      <Text style={styles.taskText}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
      <Image
        source={require('../../assets/trash.png')}
      />
    </View>
  );
};

export default Task

