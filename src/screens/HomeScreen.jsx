import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../hooks/useTheme';
import {textSize} from '../components/constants/colorTheme';
import HomeCategory from '../components/HomeCategory';
import CoffeeData from '../data/CoffeData';
import CoffCard from '../components/CoffeeCard';

export default function HomeScreen() {
  const navigation = useNavigation();
  const colors = useTheme();
  return (
    <View style={[styles.backgroundView, {backgroundColor: colors.background}]}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={colors.statusBarContent}
      />
      <View style={{gap: 20}}>
        <Text style={[styles.titleText, {color: colors.textColor}]}>
          Find the best coffee for you
        </Text>
        <TextInput
          placeholderTextColor={colors.additionalTextColor}
          style={[
            styles.searchInput,
            {
              color: colors.textColor,
              backgroundColor: colors.elementBackground,
            },
          ]}
          cursorColor={colors.basicColor}
          placeholder="Find your coffee"
        />
        <HomeCategory colors={colors} />
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row', gap: 20}}>
            {CoffeeData.map(coffee => (
              <CoffCard key={coffee.id} {...coffee} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    paddingHorizontal: 30,
  },
  titleText: {
    width: '70%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: textSize.text1,
  },
  searchInput: {
    height: 45,
    borderRadius: 15,
    paddingHorizontal: 30,
  },
});
