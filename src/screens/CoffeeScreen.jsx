import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {textFont, textSize} from '../components/constants/colorTheme';
import {useTheme} from '../hooks/useTheme';
import CoffeeScreenImageInfo from '../components/CoffeeScreenImageInfo';
import CoffeeSize from '../components/CoffeeSize';
import CoffeeBottomAddToCart from '../components/CoffeeBottomAddToCart';
import {useSelector, useDispatch} from 'react-redux';
import {addCoffeeCart} from '../store/testSlice';
import {useNavigation} from '@react-navigation/native';
import HeaderCoffeeScreen from '../components/HeaderCoffeeScreen';

export default function CoffeeScreen({route}) {
  const [activeSize, setActiveSize] = useState(0);
  const navigation = useNavigation();
  const colors = useTheme();
  const {
    imagelink_portrait,
    imagelink_square,
    description,
    prices,
    id,
    name,
    special_ingredient,
    roasted,
    index,
  } = route.params;

  const dispatch = useDispatch();
  const cartData = useSelector(state => state.coffeeCart.dataCoffeeCart);

  console.log(cartData);

  useEffect(() => {
    navigation.setOptions({
      header: () => <HeaderCoffeeScreen props={route.params} />,
      headerShown: true,
    });
  }, []);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.coffeeScreen, {backgroundColor: colors.background}]}>
        <View style={{paddingBottom: 80}}>
          <ImageBackground
            style={styles.coffeeImage}
            source={{uri: imagelink_portrait}}>
            <CoffeeScreenImageInfo props={route.params} />
          </ImageBackground>
          <View style={styles.coffeeDescription}>
            <View style={{gap: 8}}>
              <Text
                style={[
                  styles.descriptionTitle,
                  {color: colors.lightGrayColor},
                ]}>
                Description
              </Text>
              <Text
                style={[
                  styles.descriptionText,
                  {color: colors.additionalTextColor},
                ]}>
                {description}
              </Text>
            </View>

            <View style={{gap: 8}}>
              <Text
                style={[
                  styles.descriptionTitle,
                  {color: colors.lightGrayColor},
                ]}>
                Size
              </Text>
              <CoffeeSize
                prices={prices}
                setActiveSize={setActiveSize}
                activeSize={activeSize}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <CoffeeBottomAddToCart
        onPressButtonAdd={() =>
          dispatch(
            addCoffeeCart({
              id: id,
              name: name,
              special_ingredient: special_ingredient,
              roasted: roasted,
              imagelink_square: imagelink_square,
              prices: prices,
              index: index,
            }),
          )
        }
        link="Cart"
        props={route.params}
        price={prices[activeSize].price}
        activeSize={activeSize}
        buttonValue={'Add to Cart'}
      />
    </>
  );
}

const styles = StyleSheet.create({
  coffeeScreen: {
    flex: 1,
  },
  coffeeImage: {
    flex: 1,
    justifyContent: 'flex-end',
    height: 500,
    objectFit: 'fill',
  },
  coffeeDescription: {
    paddingTop: 20,
    paddingHorizontal: 25,
    gap: 10,
  },
  descriptionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: textSize.text2i5,
  },
  descriptionText: {
    fontFamily: 'Poppins-Regular',
  },
});
