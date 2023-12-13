import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import {useDispatch, useSelector} from 'react-redux';
import {addCoffeeHistory} from '../store/historySlice';
import LinearGradient from 'react-native-linear-gradient';
import {screenPadding} from '../components/constants/paddingConstant';
import Wallet from 'react-native-vector-icons/Fontisto';
import {textFont, textSize} from '../components/constants/colorTheme';

export default function HistoryScreen() {
  const wallets = [
    {
      id: 1,
      name: 'Credit Card',
      iconName: 'wallet',
      iconColor: '#D17842',
      index: 1,
    },
    {id: 2, name: 'Wallet', iconName: 'wallet', iconColor: '#D17842', index: 1},
    {
      id: 3,
      name: 'Google Pay',
      iconName: 'google-wallet',
      iconColor: '#d16342',
      index: 2,
    },
    {
      id: 4,
      name: 'Apple Pay',
      iconName: 'apple-pay',
      iconColor: '#FFFFFF',
      index: 3,
    },
    {
      id: 5,
      name: 'Amazon Pay',
      iconName: 'amazon',
      iconColor: '#D17842',
      index: 4,
    },
  ];

  const colors = useTheme();
  const dispath = useDispatch();
  const historyData = useSelector(
    state => state.historyStore.historyCoffeeData,
  );

  console.log(historyData);

  return (
    <ScrollView
      style={[styles.historyScreen, {backgroundColor: colors.background}]}>
      <View
        style={[
          styles.historyListContainer,
          {backgroundColor: colors.background},
        ]}>
        {historyData &&
          historyData.map((payCoffeeData, index) => (
            <View key={index}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.historyCard}
                colors={[colors.cardGradient1, colors.cardGradient2]}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.historyInfo}>
                    <Wallet
                      name={wallets[payCoffeeData.activePaymentMethod].iconName}
                      size={30}
                      color={
                        wallets[payCoffeeData.activePaymentMethod].iconColor
                      }
                    />
                    <Text
                      style={[styles.walletName, {color: colors.textColor}]}>
                      <Text>
                        {wallets[payCoffeeData.activePaymentMethod].name}
                      </Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: colors.basicColor,
                        fontSize: textSize.text2i5,
                        fontWeight: 'bold',
                      }}>
                      $
                    </Text>
                    <Text style={[styles.priceText, {color: colors.textColor}]}>
                      {payCoffeeData.price}
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  historyScreen: {
    flex: 1,
  },
  historyListContainer: {
    gap: 10,
    paddingHorizontal: screenPadding.homeScreenPading,
  },
  historyCard: {
    width: '100%',
    padding: 15,
    borderRadius: 15,
  },

  walletName: {
    fontFamily: 'Poppins-Regular',
    fontSize: textSize.text3,
    fontFamily: textFont.textBold,
  },

  historyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  priceText: {
    fontSize: textSize.text2i5,
    fontWeight: 'bold',
  },
});
