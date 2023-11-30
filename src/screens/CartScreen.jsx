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
import {useSelector} from 'react-redux';
import ErrorComponent from '../components/ErrorComponent';

export default function CartScreen() {
  const colors = useTheme();
  const [totalPrice, setTotalPrice] = useState(0);

  const cartData = useSelector(state => state.coffeeCart.dataCoffeeCart);

  if (cartData.length === 0) {
    return <ErrorComponent />;
  }

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        style={[styles.cartScreen, {backgroundColor: colors.background}]}>
        <View style={{gap: 20, paddingBottom: 100}}>
          {cartData &&
            cartData.map((coffee, index) => (
              <CoffeeCartCard
                key={coffee.id}
                colors={colors}
                setTotalPrice={setTotalPrice}
                props={coffee}
                index={index}
              />
            ))}
        </View>
      </ScrollView>
      <CoffeeBottomAddToCart
        onPressButtonAdd={() => console.log('111')}
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
