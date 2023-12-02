import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import CoffeeScreenImageInfo from './CoffeeScreenImageInfo';
import {useNavigation} from '@react-navigation/native';

export default function FavoriteCoffee(props) {
  const navigation = useNavigation();
  const truncateDescription = str => {
    if (str.length >= 120) return str.substring(0, 120) + '...';
    else str;
  };

  const colors = useTheme();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Coffee', {...props})}>
      <View
        style={[
          styles.favoriteCoffee,
          {backgroundColor: colors.elementBackground},
        ]}>
        <View style={{height: 370}}>
          <ImageBackground
            imageStyle={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}
            style={styles.favoriteImage}
            source={{uri: props.imagelink_portrait}}>
            <CoffeeScreenImageInfo props={props} height="40%" />
          </ImageBackground>
        </View>

        <View style={{padding: 10}}>
          <Text style={[styles.descriptionText, {color: colors.textColor}]}>
            {truncateDescription(props.description)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  favoriteCoffee: {
    borderRadius: 20,
  },
  favoriteImage: {
    flex: 1,
    justifyContent: 'flex-end',
    objectFit: 'fill',
  },
  descriptionText: {
    fontFamily: 'Poppins-Regular',
  },
});
