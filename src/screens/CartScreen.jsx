import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '../hooks/useTheme';
import CoffeeCartCard from '../components/CoffeeCartCard';
import {screenPadding} from '../components/constants/paddingConstant';
import CoffeeBottomAddToCart from '../components/CoffeeBottomAddToCart';
import CoffeeData from '../data/CoffeData';
import {useSelector, useDispatch} from 'react-redux';
import {addCoffeeCart} from '../store/testSlice';

export default function CartScreen() {
  const colors = useTheme();
  const [totalPrice, setTotalPrice] = useState(0);

  const cartData = useSelector(state => state.coffeeCart.dataCoffeeCart);
  const dispatch = useDispatch();
  console.log(cartData);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        style={[styles.cartScreen, {backgroundColor: colors.background}]}>
        <View style={{gap: 20, paddingBottom: 100}}>
          <TouchableOpacity onPress={() => dispatch(addCoffeeCart('1'))}>
            <Text>Add</Text>
          </TouchableOpacity>
          <CoffeeCartCard colors={colors} setTotalPrice={setTotalPrice} />
          <CoffeeCartCard colors={colors} setTotalPrice={setTotalPrice} />
          <CoffeeCartCard colors={colors} setTotalPrice={setTotalPrice} />
        </View>
      </ScrollView>
      <CoffeeBottomAddToCart
        link="Payment"
        props={CoffeeData[5]}
        price={totalPrice}
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
