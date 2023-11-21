import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import LinearGradient from 'react-native-linear-gradient';

export default function CoffCard(props) {
  const colors = useTheme();

  return (
    <LinearGradient
      style={styles.coffeCardStyle}
      colors={[colors.cardGradient1, colors.cardGradient2]}>
      <Text>{props.name}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  coffeCardStyle: {
    padding: 10,
    width: 150,
    height: 250,
    borderRadius: 25,
  },
});
