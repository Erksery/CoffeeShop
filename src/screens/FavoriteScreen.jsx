import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useFetchCoffeeData} from '../hooks/useFetchCoffeeData';

export default function FavoriteScreen() {
  const {coffeeData} = useFetchCoffeeData();

  return (
    <ScrollView>
      {coffeeData &&
        coffeeData.map(coffee => (
          <ImageBackground
            key={coffee.id}
            style={{width: 100, height: 100}}
            source={{
              uri: coffee.imagelink_square,
            }}>
            <Text>dsadas</Text>
          </ImageBackground>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
