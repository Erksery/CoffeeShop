import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import LinearGradient from 'react-native-linear-gradient';
import PlusIcon from 'react-native-vector-icons/Feather';
import StarIcon from 'react-native-vector-icons/AntDesign';
import {
  coffeeCardStyle,
  textFont,
  textSize,
  textWeight,
} from './constants/colorTheme';
import {useNavigation} from '@react-navigation/native';

export default function CoffeeCard(props) {
  const colors = useTheme();
  const navigation = useNavigation();

  const truncateDescription = str => {
    const string = str.length >= 10 ? str.substring(0, 9) + '..' : str;
    return string;
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Coffee', {...props})}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.coffeeCardStyle}
        colors={[colors.cardGradient1, colors.cardGradient2]}>
        <View>
          <ImageBackground
            style={styles.imageCard}
            imageStyle={{borderRadius: 20}}
            source={{uri: props.imagelink_square}}>
            <View style={styles.cardRating}>
              <StarIcon name="star" color={colors.basicColor} />
              <Text
                style={{
                  color: '#FFFFFF',

                  fontSize: textSize.text5,
                  fontWeight: '800',
                  textAlignVertical: 'center',
                }}>
                {props.average_rating}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View>
          <Text style={[styles.coffeeName, {color: colors.textColor}]}>
            {truncateDescription(props.name)}
          </Text>
          <Text style={[styles.coffeeRoasted, {color: colors.textColor}]}>
            {props.roasted}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Text style={[styles.priceText, {color: colors.basicColor}]}>
              {props.prices[2].currency}
            </Text>
            <Text style={[styles.priceText, {color: colors.textColor}]}>
              {props.prices[2].price}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.addCartButton,
              {backgroundColor: colors.basicColor},
            ]}>
            <PlusIcon name="plus" size={22} color={'#FFFFFF'} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  coffeeCardStyle: {
    padding: 13,
    width: 150,
    height: 250,
    borderRadius: coffeeCardStyle.borderRadiusCard,
    gap: 10,
  },
  coffeeName: {
    fontSize: textSize.text2,
    fontFamily: 'Poppins-Regular',
  },
  coffeeRoasted: {
    fontSize: textSize.text5,
    fontFamily: 'Poppins-ExtraLight',
  },
  imageCard: {
    alignItems: 'flex-end',
    width: '100%',
    height: 120,
    borderRadius: 20,
    objectFit: 'fill',
    overflow: 'hidden',
  },
  cardRating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
    width: 60,
    height: 25,
    backgroundColor: '#000',
    opacity: 0.7,
    borderBottomLeftRadius: 25,
  },
  priceText: {
    fontFamily: textFont.textBold,
    fontSize: textSize.text2i5,
  },
  addCartButton: {
    padding: 6,
    borderRadius: 7,
  },
});
