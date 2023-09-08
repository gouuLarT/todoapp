import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles'

interface SquareCheckBoxProps {
  checked: boolean;
  onPress: () => void;
}

const CheckBox: React.FC<SquareCheckBoxProps> = ({ checked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.square, checked && styles.checked]}>
        {checked && <Text>X</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default CheckBox