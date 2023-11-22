import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import LeftIcon from 'react-native-vector-icons/Entypo';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {screenPadding} from './constants/paddingConstant';

export default function HeaderCoffeeScreen() {
  const navigation = useNavigation();
  const colors = useTheme();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[
          styles.haaderButton,
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
      <TouchableOpacity
        style={[
          styles.haaderButton,
          {
            backgroundColor: colors.elementBackground,
            borderColor: colors.borderButtonColor,
          },
        ]}>
        <HeartIcon name="heart" size={22} color={colors.additionalTextColor} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    paddingTop: 20,
    paddingHorizontal: screenPadding.homeScreenPading,
    backgroundColor: 'transparent',
  },
  haaderButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 10,
  },
});
