import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../../hooks/useTheme';
import {useNavigation} from '@react-navigation/native';

export default function DrawerContent() {
  const navigation = useNavigation();
  const colors = useTheme();
  return (
    <View style={styles.drawerStyle}>
      <Text style={{color: colors.textColor}}>DrawerContent</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <Text style={{color: colors.textColor}}>Setting</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    paddingTop: 30,
  },
});
