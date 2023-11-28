import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';

import LeftIcon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {screenPadding} from './constants/paddingConstant';
import GoBackButton from './GoBackButton';

export default function HeaderGoBack() {
  const navigation = useNavigation();
  const colors = useTheme();
  return (
    <View
      style={[styles.headerContainer, {backgroundColor: colors.background}]}>
      <GoBackButton />
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
    paddingHorizontal: screenPadding.homeScreenPading,
  },
});
