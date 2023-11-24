import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../hooks/useTheme';
import CoffeeCartCard from '../components/CoffeeCartCard';
import {screenPadding} from '../components/constants/paddingConstant';
import CoffeeBottomAddToCart from '../components/CoffeeBottomAddToCart';
import CoffeeData from '../data/CoffeData';

export default function CartScreen() {
  const colors = useTheme();
  const [price, setPrice] = useState(0);
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        style={[styles.cartScreen, {backgroundColor: colors.background}]}>
        <View style={{gap: 20, paddingBottom: 100}}>
          <CoffeeCartCard colors={colors} setPrice={setPrice} />
          <CoffeeCartCard colors={colors} setPrice={setPrice} />
          <CoffeeCartCard colors={colors} setPrice={setPrice} />
        </View>
      </ScrollView>
      <CoffeeBottomAddToCart
        props={CoffeeData[5]}
        price={price}
        activeSize={0}
        buttonValue={'Pay'}
      />
    </>
  );
}

const styles = StyleSheet.create({
  cartScreen: {
    flex: 1,
    paddingHorizontal: screenPadding.homeScreenPading,
  },
});
