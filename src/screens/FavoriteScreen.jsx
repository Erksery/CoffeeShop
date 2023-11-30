import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import {useSelector, useDispatch} from 'react-redux';
import {addCoffeeFavorite} from '../store/favotiteSlice';
import {screenPadding} from '../components/constants/paddingConstant';
import FavoriteCoffee from '../components/FavoriteCoffee';

export default function FavoriteScreen() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.favoriteStore.favoriteCoffeeData);
  const colors = useTheme();

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
