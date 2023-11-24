import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {textFont, textSize} from '../components/constants/colorTheme';
import {useTheme} from '../hooks/useTheme';
import CoffeeScreenImageInfo from '../components/CoffeeScreenImageInfo';
import CoffeeSize from '../components/CoffeeSize';
import CoffeeBottomAddToCart from '../components/CoffeeBottomAddToCart';

export default function CoffeeScreen({route}) {
  const [activeSize, setActiveSize] = useState(0);
  const colors = useTheme();
  const {imagelink_portrait, description, prices} = route.params;
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.coffeeScreen, {backgroundColor: colors.background}]}>
        <View style={{paddingBottom: 80}}>
          <ImageBackground
            style={styles.coffeeImage}
            source={imagelink_portrait}>
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
