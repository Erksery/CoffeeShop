import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import {screenPadding} from '../components/constants/paddingConstant';
import CreditCard from '../components/CreditCard';
import Wallets from '../components/Wallets';
import CoffeeBottomAddToCart from '../components/CoffeeBottomAddToCart';
import CoffeeData from '../data/CoffeData';

export default function PaymentScreen() {
  const wallets = [
    {id: 1, name: 'Wallet', iconName: 'wallet', iconColor: '#D17842'},
    {
      id: 2,
      name: 'Google Pay',
      iconName: 'google-wallet',
      iconColor: '#d16342',
    },
    {id: 3, name: 'Apple Pay', iconName: 'apple-pay', iconColor: '#FFFFFF'},
    {id: 4, name: 'Amazon Pay', iconName: 'amazon', iconColor: '#D17842'},
  ];

  const colors = useTheme();
  return (
    <>
      <ScrollView
        style={[styles.paymentScreen, {backgroundColor: colors.background}]}>
        <CreditCard colors={colors} />
        <View style={{gap: 10, marginTop: 20}}>
          {wallets.map(wallet => (
            <Wallets key={wallet.id} {...wallet} />
          ))}
        </View>
      </ScrollView>
      <CoffeeBottomAddToCart
        onPressButtonAdd={() => console.log('111')}
        link="Payment"
        props={CoffeeData[5]}
        price={4.2}
        activeSize={0}
        buttonValue={'Pay'}
      />
    </>
  );
}

const styles = StyleSheet.create({
  paymentScreen: {
    paddingHorizontal: screenPadding.homeScreenPading,
  },
});
