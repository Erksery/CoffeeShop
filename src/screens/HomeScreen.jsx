import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../hooks/useTheme';
import {textFont, textSize} from '../components/constants/colorTheme';
import HomeCategory from '../components/HomeCategory';
import CoffeeData from '../data/CoffeData';
import CoffeeCard from '../components/CoffeeCard';
import BeansData from '../data/BeansData';
import {screenPadding} from '../components/constants/paddingConstant';

export default React.memo(function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const colors = useTheme();

  useEffect(() => {
    if (activeCategory != 'All') {
      const coffeeData = CoffeeData.filter(
        coffee => coffee.name === activeCategory,
      );
      setData(coffeeData);
    } else setData(CoffeeData);
  }, [activeCategory]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.backgroundView, {backgroundColor: colors.background}]}
      overScrollMode="never">
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={colors.statusBarContent}
      />
      <View style={{gap: 20, paddingBottom: 30}}>
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
        <HomeCategory
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          colors={colors}
        />
        <ScrollView
          horizontal={true}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', gap: 20}}>
            {data.map(coffee => (
              <CoffeeCard key={coffee.id} {...coffee} />
            ))}
          </View>
        </ScrollView>
        <Text style={[styles.beansTitle, {color: colors.textColor}]}>
          Coffee beans
        </Text>
        <ScrollView
          horizontal={true}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', gap: 20}}>
            {BeansData.map(beans => (
              <CoffeeCard key={beans.id} {...beans} />
            ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    paddingHorizontal: screenPadding.homeScreenPading,
    paddingBottom: 100,
  },
  titleText: {
    width: '70%',
    fontFamily: textFont.textBold,
    fontSize: textSize.text1,
  },
  searchInput: {
    height: 45,
    borderRadius: 15,
    paddingHorizontal: 30,
  },
  beansTitle: {
    fontSize: textSize.text2,
    fontFamily: 'Poppins-Regular',
  },
});
