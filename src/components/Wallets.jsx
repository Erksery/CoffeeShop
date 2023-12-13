import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '../hooks/useTheme';
import Wallet from 'react-native-vector-icons/Fontisto';
import {textFont, textSize} from './constants/colorTheme';

export default function Wallets({
  name,
  iconName,
  iconColor,
  onPressActive,
  activePaymentMethod,
  index,
}) {
  const colors = useTheme();
  return (
    <TouchableOpacity onPress={() => onPressActive()}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[
          styles.wallet,
          {
            borderColor:
              activePaymentMethod === index
                ? colors.basicColor
                : colors.cardGradient1,
          },
        ]}
        colors={[colors.cardGradient1, colors.cardGradient2]}>
        <Wallet name={iconName} size={30} color={iconColor} />
        <Text style={[styles.walletName, {color: colors.textColor}]}>
          {name}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wallet: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    overflow: 'hidden',
  },
  walletName: {
    fontFamily: 'Poppins-Regular',
    fontSize: textSize.text3,
    fontFamily: textFont.textBold,
  },
});
