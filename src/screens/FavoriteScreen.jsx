import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '../hooks/useTheme';
import {useSelector, useDispatch} from 'react-redux';
import {addCoffeeFavorite} from '../store/favoriteSlice';
import {screenPadding} from '../components/constants/paddingConstant';
import FavoriteCoffee from '../components/FavoriteCoffee';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ErrorComponent from '../components/ErrorComponent';

export default function FavoriteScreen() {
  const [coffeeFavorite, setCoffeeFavorite] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(state => state.favoriteStore.favoriteCoffeeData);
  const colors = useTheme();

  async function getFavoriteData() {
    const value = await AsyncStorage.getItem('favorite');
    setCoffeeFavorite(JSON.parse(value));
  }

  useEffect(() => {
    getFavoriteData();
    console.log('111', coffeeFavorite);
  }, [data]);

  if (data.length === 0) {
    return <ErrorComponent />;
  }

  return (
    <ScrollView
      style={[styles.favoriteScreen, {backgroundColor: colors.background}]}>
      <View style={{gap: 20}}>
        {data &&
          data.map(coffee => (
            <FavoriteCoffee key={coffee.id} {...coffee} colors={colors} />
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  favoriteScreen: {
    flex: 1,
    paddingHorizontal: screenPadding.homeScreenPading,
  },
});
