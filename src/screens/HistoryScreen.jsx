import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import {useDispatch, useSelector} from 'react-redux';
import {addCoffeeHistory} from '../store/historySlice';

export default function HistoryScreen() {
  const colors = useTheme();
  const dispath = useDispatch();
  const historyData = useSelector(
    state => state.historyStore.historyCoffeeData,
  );

  console.log(historyData);

  return (
    <View style={[styles.historyScreen, {backgroundColor: colors.background}]}>
      <TouchableOpacity onPress={() => dispath(addCoffeeHistory('1'))}>
        <Text style={{color: '#fff'}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  historyScreen: {
    flex: 1,
  },
});
