import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LeftIcon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../hooks/useTheme';

export default function GoBackButton() {
  const navigation = useNavigation();
  const colors = useTheme();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[
        styles.headerButton,
        {
          backgroundColor: colors.elementBackground,
          borderColor: colors.borderButtonColor,
        },
      ]}>
      <LeftIcon
        name="chevron-small-left"
        size={30}
        color={colors.additionalTextColor}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 10,
    borderWidth: 1,
  },
});
