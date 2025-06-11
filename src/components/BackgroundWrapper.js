import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const BackgroundWrapper = ({ children }) => {
  return (
    <ImageBackground
      source={require('../../assets/layout-fabet.png')}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    height: 250,
    width: 400,
  },
});

export default BackgroundWrapper;
