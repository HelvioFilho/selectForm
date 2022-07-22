import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

export function TimeLine() {
  return(
    <View
        style={styles.line}
    />
  )
}

export const styles = StyleSheet.create({
    line:{
      position:'absolute',
      width: '83%',
      height:7,
      left: spacing.px3,
      top: 80,
      backgroundColor: colors.red,
      borderRadius: 15
    }
});
