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
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://i.ibb.co/rwScNX8/americano-pic-1-portrain.png',
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
