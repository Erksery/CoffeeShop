import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import MenuIcon from 'react-native-vector-icons/Entypo';
import PersonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import {screenPadding} from './constants/paddingConstant';

export default function Header() {
  const navigation = useNavigation();
  const colors = useTheme();
  return (
    <View
      style={[styles.headerContainer, {backgroundColor: colors.background}]}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
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
        ]}>
        <PersonIcon
          name="person"
          size={22}
          color={colors.additionalTextColor}
        />
      </TouchableOpacity>
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
  haaderButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 10,
    borderWidth: 1,
  },
});
