import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '../hooks/useTheme';
import {screenPadding} from '../components/constants/paddingConstant';
import axios from 'axios';
import SearchCoffeeCard from '../components/SearchCoffeeCard';

export default function SearchScreen() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const colors = useTheme();

  function getCoffee() {
    const resData = axios
      .get(
        `https://65645638ceac41c0761dee9e.mockapi.io/name?name=${searchValue}&limit=10`,
      )
      .then(res => setCoffeeData(res.data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));

    return resData;
  }

  useEffect(() => {
    getCoffee();
  }, [searchValue]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setSearchValue(inputValue);
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [inputValue]);

  return (
    <View
      style={[styles.searchContainer, {backgroundColor: colors.background}]}>
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
        value={inputValue}
        onChangeText={value => setInputValue(value)}
        onEndEditing={() => setSearchValue(inputValue)}
        placeholder="Find your coffee"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{gap: 10}}>
          {!isLoading &&
            coffeeData.map(coffee => (
              <SearchCoffeeCard key={coffee.id} {...coffee} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    paddingHorizontal: screenPadding.homeScreenPading,
    gap: 20,
  },
  searchInput: {
    height: 45,
    borderRadius: 15,
    paddingHorizontal: 30,
  },
});
