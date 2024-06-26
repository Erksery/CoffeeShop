import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../hooks/useTheme';
import {textFont, textSize} from '../components/constants/colorTheme';
import HomeCategory from '../components/HomeCategory';
import CoffeeCard from '../components/CoffeeCard';
import {screenPadding} from '../components/constants/paddingConstant';
import {useFetchCoffeeData} from '../hooks/useFetchCoffeeData';
import {useFetchBeanData} from '../hooks/useFetchBeanData';
import axios from 'axios';
import SkeletonCoffeeCard from '../components/SkeletonCoffeeCard';

export default React.memo(function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(0);
  const navigation = useNavigation();
  const colors = useTheme();
  const {beanData} = useFetchBeanData();

  const [coffeeData, setCoffeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    {title: '', value: 0},
    {title: 'Cappucchino', value: 1},
    {title: 'Espresso', value: 2},
    {title: 'Americano', value: 3},
    {title: 'Macchiato', value: 4},
    {title: 'Latte', value: 5},
  ];

  async function fetchCoffeeData() {
    const resData = await axios
      .get(
        `https://65645638ceac41c0761dee9e.mockapi.io/name?&name=${categories[activeCategory].title}&type=Coffee`,
      )
      .then(res => setCoffeeData(res.data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
    return resData;
  }

  useEffect(() => {
    fetchCoffeeData();
  }, [activeCategory]);

  const refreshCoffeeData = () => {
    fetchCoffeeData();
  };

  const coffeeDataArray =
    coffeeData &&
    coffeeData.map(coffee => <CoffeeCard key={coffee.id} {...coffee} />);

  const beansDataArray =
    beanData && beanData.map(beans => <CoffeeCard key={beans.id} {...beans} />);

  const skeletonCoffeeArray = new Array(9)
    .fill(null)
    .map((_, index) => <SkeletonCoffeeCard key={index} />);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.backgroundView, {backgroundColor: colors.background}]}
      overScrollMode="never"
      refreshControl={
        <RefreshControl
          onRefresh={refreshCoffeeData}
          refreshing={isLoading}
          colors={[colors.textColor]}
          progressBackgroundColor={colors.elementBackground}
        />
      }>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={colors.statusBarContent}
      />
      <View style={{gap: 20, paddingBottom: 30}}>
        <Text style={[styles.titleText, {color: colors.textColor}]}>
          Find the best coffee for you
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          style={[
            styles.searchInput,
            {
              backgroundColor: colors.elementBackground,
            },
          ]}>
          <Text style={{color: 'gray'}}>Find your coffee</Text>
        </TouchableOpacity>
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
            {!isLoading ? coffeeDataArray : skeletonCoffeeArray}
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
            {!isLoading ? beansDataArray : skeletonCoffeeArray}
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
    justifyContent: 'center',
    height: 45,
    borderRadius: 15,
    paddingHorizontal: 30,
  },
  beansTitle: {
    fontSize: textSize.text2,
    fontFamily: 'Poppins-Regular',
  },
});
