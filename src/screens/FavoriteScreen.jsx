import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import {useSelector, useDispatch} from 'react-redux';
import {addCoffeeFavorite} from '../store/favotiteSlice';

export default function FavoriteScreen() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.favoriteStore.favoriteData);
  const colors = useTheme();

  console.log('favorite', data);

  return (
    <View style={[styles.favoriteScreen, {backgroundColor: colors.background}]}>
      <TouchableOpacity onPress={() => dispatch(addCoffeeFavorite('1'))}>
        <Text>Add</Text>
      </TouchableOpacity>
      {data &&
        data.map(coffee => (
          <Text key={coffee.id} style={{color: '#FFF'}}>
            {coffee.name}
          </Text>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  favoriteScreen: {
    flex: 1,
  },
});
