import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';

export default function ErrorComponent() {
  const colors = useTheme();
  return (
    <View style={[styles.errorComponent, {backgroundColor: colors.background}]}>
      <Text style={{color: '#FFF'}}>Тут Пусто</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorComponent: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
