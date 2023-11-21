import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {ThemeContext} from '../components/ThemeProvider';
import {useTheme} from '../hooks/useTheme';

export default function SettingScreen() {
  const {theme, saveData} = useContext(ThemeContext);

  const colors = useTheme();

  return (
    <View style={{backgroundColor: colors.background}}>
      <Text style={{color: colors.additionalColor}}>
        {theme}: {colors.background}
      </Text>
      <Switch
        onValueChange={saveData}
        value={theme === 'light' ? false : true}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
