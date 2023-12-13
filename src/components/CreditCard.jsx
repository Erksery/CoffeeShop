import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {textFont, textSize} from './constants/colorTheme';
import IconCreditCard from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';

export default function CreditCard({
  colors,
  activePaymentMethod,
  setActivePaymentMethod,
}) {
  return (
    <TouchableOpacity onPress={() => setActivePaymentMethod(0)}>
      <View
        style={[
          styles.creditCard,
          {
            borderColor:
              activePaymentMethod === 0
                ? colors.basicColor
                : colors.cardGradient1,
          },
        ]}>
        <Text style={[styles.textCreditCard, {color: colors.textColor}]}>
          Credit Card
        </Text>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.card}
          colors={[colors.cardGradient1, colors.cardGradient2]}>
          <View style={{justifyContent: 'flex-end'}}>
            <IconCreditCard name="visa" color={colors.textColor} size={30} />
          </View>
          <View>
            <View style={styles.cardCode}>
              <Text style={[styles.cardCodeText, {color: colors.textColor}]}>
                3887
              </Text>
              <Text style={[styles.cardCodeText, {color: colors.textColor}]}>
                8923
              </Text>
              <Text style={[styles.cardCodeText, {color: colors.textColor}]}>
                6745
              </Text>
              <Text style={[styles.cardCodeText, {color: colors.textColor}]}>
                4638
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.cardHolderName}>Card Holder Name</Text>
              <Text style={styles.cardHolderName}>Expiry Date</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.cardName, {color: colors.textColor}]}>
                Name
              </Text>
              <Text style={[styles.cardName, {color: colors.textColor}]}>
                02/30
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  creditCard: {
    padding: 10,
    gap: 10,
    borderWidth: 2,
    borderRadius: 20,
  },
  textCreditCard: {
    fontFamily: 'Poppins-Regular',
    fontSize: textSize.text3,
    fontFamily: textFont.textBold,
  },
  card: {
    justifyContent: 'space-between',
    padding: 10,
    height: 180,
    borderRadius: 15,
    backgroundColor: 'gray',
  },
  cardCode: {
    gap: 20,
    flexDirection: 'row',
  },
  cardCodeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: textSize.text3,
  },
  cardHolderName: {
    color: '#AEAEAE',
    fontFamily: 'Poppins-Light',
    fontSize: textSize.text5,
  },
  cardName: {
    fontFamily: 'Poppins-Regular',
    fontSize: textSize.text2i5,
  },
});
