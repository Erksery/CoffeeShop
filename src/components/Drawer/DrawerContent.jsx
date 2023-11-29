import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../../hooks/useTheme';
import {useNavigation} from '@react-navigation/native';
import {textFont, textSize} from '../constants/colorTheme';
import DrawerIcon from 'react-native-vector-icons/Ionicons';
import CoffeeIcon from 'react-native-vector-icons/Feather';

export default function DrawerContent() {
  const drawerButtonData = [
    {id: 1, title: 'Home', iconName: 'home-outline', navigate: 'HomeTab'},
    {id: 2, title: 'Coffee Cart', iconName: 'cart-outline', navigate: 'Cart'},
    {id: 3, title: 'Favorite', iconName: 'heart-outline', navigate: 'Favorite'},
    {
      id: 4,
      title: 'History',
      iconName: 'newspaper-outline',
      navigate: 'History',
    },
    {
      id: 5,
      title: 'Setting',
      iconName: 'settings-outline',
      navigate: 'Setting',
    },
  ];

  const navigation = useNavigation();
  const colors = useTheme();
  return (
    <View style={styles.drawerStyle}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 7}}>
          <CoffeeIcon name="coffee" size={27} color={colors.textColor} />
          <Text style={[styles.drawerTitle, {color: colors.textColor}]}>
            CoffeeShop
          </Text>
        </View>
      </View>
      <View style={{gap: 10}}>
        {drawerButtonData.map(buttonData => (
          <TouchableOpacity
            key={buttonData.id}
            style={[styles.drawerButton, {backgroundColor: colors.background}]}
            onPress={() => navigation.navigate(buttonData.navigate)}>
            <DrawerIcon
              name={buttonData.iconName}
              size={27}
              color={colors.textColor}
            />
            <Text style={[styles.drawerButtonText, {color: colors.textColor}]}>
              {buttonData.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerTitle: {
    fontSize: textSize.text2,
    fontFamily: 'Poppins-SemiBold',
  },
  drawerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    gap: 5,
  },
  drawerButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: textSize.text3,
    textAlign: 'center',
  },
  drawerStyle: {
    paddingTop: 50,
    paddingHorizontal: 10,
    gap: 20,
  },
});
