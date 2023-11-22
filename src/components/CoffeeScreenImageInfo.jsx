import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {textFont, textSize} from '../components/constants/colorTheme';
import TypeIcon from 'react-native-vector-icons/Fontisto';
import DropIcon from 'react-native-vector-icons/FontAwesome6';
import StarIcon from 'react-native-vector-icons/AntDesign';
import {useTheme} from '../hooks/useTheme';

export default function CoffeeScreenImageInfo({props}) {
  const colors = useTheme();

  return (
    <View style={styles.infoImageCoffeeContainer}>
      <View style={styles.infoCoffee}>
        <View style={{justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.infoNameText}>{props.name}</Text>
            <Text style={styles.infoIngredientText}>
              {props.special_ingredient}
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <StarIcon name="star" size={23} color={colors.basicColor} />
            <Text
              style={{
                fontWeight: '800',
                fontSize: textSize.text2i5,
                color: '#FFFFFF',
              }}>
              {props.average_rating}
            </Text>
            <Text
              style={{
                color: colors.lightGrayColor,
                fontFamily: 'Poppins-Thin',
                fontSize: textSize.text5,
              }}>
              ({props.ratings_count})
            </Text>
          </View>
        </View>
        <View style={styles.infoTypeCofee}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={[
                styles.cofeeTypeView,
                {backgroundColor: colors.elementBackground},
              ]}>
              <TypeIcon
                name="coffeescript"
                size={20}
                color={colors.basicColor}
              />
              <Text
                style={[
                  styles.infoTypeCofeeText,
                  {color: colors.additionalTextColor},
                ]}>
                {props.type}
              </Text>
            </View>
            <View
              style={[
                styles.cofeeTypeView,
                {backgroundColor: colors.elementBackground},
              ]}>
              <DropIcon name="droplet" size={20} color={colors.basicColor} />
              <Text
                style={[
                  styles.infoTypeCofeeText,
                  {color: colors.additionalTextColor},
                ]}>
                {props.ingredients}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.roastedStyle,
              {backgroundColor: colors.elementBackground},
            ]}>
            <Text
              style={[
                styles.infoTypeCofeeText,
                {color: colors.additionalTextColor},
              ]}>
              {props.roasted}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  coffeeImage: {
    flex: 1,
    justifyContent: 'flex-end',
    height: 500,
    objectFit: 'fill',
  },

  infoImageCoffeeContainer: {
    padding: 25,
    height: '30%',
    gap: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.40)',
  },

  infoCoffee: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoNameText: {
    color: '#FFFFFF',
    fontFamily: textFont.textBold,
    fontSize: textSize.text2,
  },
  infoIngredientText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Thin',
    fontSize: textSize.text5,
  },
  infoTypeCofee: {
    gap: 10,
    width: 130,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  infoTypeCofeeText: {
    fontFamily: 'Poppins-Light',
    fontSize: textSize.text5,
  },
  cofeeTypeView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 5,
    width: 60,
    borderRadius: 10,
  },

  roastedStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
});
