import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SobreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.content}>Este app foi criado com React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 16 },
  content: { fontSize: 16 },
});

export default SobreScreen;