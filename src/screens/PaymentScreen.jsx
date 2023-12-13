import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../hooks/useTheme';
import {screenPadding} from '../components/constants/paddingConstant';
import CreditCard from '../components/CreditCard';
import Wallets from '../components/Wallets';
import CoffeeBottomAddToCart from '../components/CoffeeBottomAddToCart';
import {useDispatch, useSelector} from 'react-redux';
import {addCoffeeHistory} from '../store/historySlice';

export default function PaymentScreen() {
  const [activePaymentMethod, setActivePaymentMethod] = useState(0);
  const dispatch = useDispatch();
  const historyData = useSelector(
    state => state.historyStore.historyCoffeeData,
  );

  const priceData = useSelector(state => state.priceStore.priceState);

  const wallets = [
    {id: 1, name: 'Wallet', iconName: 'wallet', iconColor: '#D17842', index: 1},
    {
      id: 2,
      name: 'Google Pay',
      iconName: 'google-wallet',
      iconColor: '#d16342',
      index: 2,
    },
    {
      id: 3,
      name: 'Apple Pay',
      iconName: 'apple-pay',
      iconColor: '#FFFFFF',
      index: 3,
    },
    {
      id: 4,
      name: 'Amazon Pay',
      iconName: 'amazon',
      iconColor: '#D17842',
      index: 4,
    },
  ];

  const colors = useTheme();
  return (
    <>
      <ScrollView
        style={[styles.paymentScreen, {backgroundColor: colors.background}]}>
        <CreditCard
          colors={colors}
          activePaymentMethod={activePaymentMethod}
          setActivePaymentMethod={setActivePaymentMethod}
        />
        <View style={{gap: 10, marginTop: 20}}>
          {wallets.map((wallet, index) => (
            <Wallets
              key={wallet.id}
              onPressActive={() => setActivePaymentMethod(wallet.index)}
              {...wallet}
              activePaymentMethod={activePaymentMethod}
            />
          ))}
        </View>
      </ScrollView>
      <CoffeeBottomAddToCart
        onPressButtonAdd={() =>
          dispatch(
            addCoffeeHistory({
              activePaymentMethod: activePaymentMethod,
              price: priceData,
              date: new Date().toISOString(),
            }),
          )
        }
        link="Payment"
        price={priceData}
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
