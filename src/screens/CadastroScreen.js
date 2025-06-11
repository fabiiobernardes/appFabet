import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CadastroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Cadastro</Text>
      <Button title="Voltar para Login" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 20 },
});

export default CadastroScreen;