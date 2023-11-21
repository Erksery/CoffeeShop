import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import MenuIcon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  const colors = useTheme();
  return (
    <View
      style={[styles.headerContainer, {backgroundColor: colors.background}]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Setting')}
        style={[
          styles.haaderButton,
          {
            backgroundColor: colors.elementBackground,
            borderColor: colors.borderButtonColor,
          },
        ]}>
        <MenuIcon name="grid" size={30} color={colors.additionalTextColor} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.haaderButton,
          {
            backgroundColor: colors.elementBackground,
            borderColor: colors.borderButtonColor,
          },
        ]}></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  haaderButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 10,
    borderWidth: 1,
  },
});
