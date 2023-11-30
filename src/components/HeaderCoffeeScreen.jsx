import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '../hooks/useTheme';
import LeftIcon from 'react-native-vector-icons/Entypo';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {screenPadding} from './constants/paddingConstant';
import {useDispatch, useSelector} from 'react-redux';
import {addCoffeeFavorite, removeCoffeeFavorite} from '../store/favotiteSlice';

export default function HeaderCoffeeScreen({props}) {
  const [likeActive, setLikeActive] = useState(false);
  const isLikeActive = useSelector(
    state => state.favoriteStore.favoriteCoffeeData,
  );

  useEffect(() => {
    const likeState = isLikeActive.find(el => el.id === props.id);
    likeState !== undefined ? setLikeActive(true) : setLikeActive(false);
  }, [isLikeActive]);

  const handleLike = () => {
    dispatch(
      addCoffeeFavorite({
        id: props.id,
        name: props.name,
        imagelink_portrait: props.imagelink_portrait,
        description: props.description,
        special_ingredient: props.special_ingredient,
        average_rating: props.average_rating,
        ratings_count: props.ratings_count,
        type: props.type,
        ingredients: props.ingredients,
        roasted: props.roasted,
        isFavorite: true,
      }),
    );
  };

  const handleRemoveLike = () => {
    dispatch(removeCoffeeFavorite({id: props.id}));
  };

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const colors = useTheme();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[
          styles.headerButton,
          {
            backgroundColor: colors.elementBackground,
            borderColor: colors.borderButtonColor,
          },
        ]}>
        <LeftIcon
          name="chevron-small-left"
          size={30}
          color={colors.additionalTextColor}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          likeActive ? handleRemoveLike() : handleLike();
        }}
        style={[
          styles.headerButton,
          {
            backgroundColor: colors.elementBackground,
            borderColor: colors.borderButtonColor,
          },
        ]}>
        <HeartIcon
          name="heart"
          size={22}
          color={
            likeActive ? colors.likeActiveColor : colors.additionalTextColor
          }
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    paddingTop: 20,
    paddingHorizontal: screenPadding.homeScreenPading,
    backgroundColor: 'transparent',
  },
  headerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 10,
  },
});
