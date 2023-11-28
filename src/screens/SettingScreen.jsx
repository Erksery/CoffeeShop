import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {ThemeContext} from '../components/ThemeProvider';
import {useTheme} from '../hooks/useTheme';
import {screenPadding} from '../components/constants/paddingConstant';
import {textSize} from '../components/constants/colorTheme';

export default function SettingScreen() {
  const {theme, saveData} = useContext(ThemeContext);

  const colors = useTheme();

  return (
    <View style={[styles.settingScreen, {backgroundColor: colors.background}]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: textSize.text3,
            color: colors.textColor,
          }}>
          Dark Mode
        </Text>
        <Switch
          onValueChange={saveData}
          value={theme === 'light' ? false : true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingScreen: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: screenPadding.homeScreenPading,
  },
});
