import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  // O navigation.replace garante que o usuário não possa "voltar" para a tela de login
  const handleLogin = () => {
    console.log('Simulando login...');
    navigation.replace('AppDrawer'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <Button title="Entrar" onPress={handleLogin} />
      <Button
        title="Não tenho conta, quero me cadastrar"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 20 },
});

export default LoginScreen;