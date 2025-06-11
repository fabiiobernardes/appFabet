import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha o e-mail e a senha.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log('Simulando login...');
      setLoading(false);
      navigation.replace('AppDrawer');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        secureTextEntry
      />

      {loading ? (
        <ActivityIndicator size="large" color="#1E90FF" style={{ marginVertical: 20 }} />
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Cadastro')}
            style={[styles.button, styles.secondaryButton]}
          >
            <Text style={styles.buttonText}>Não tenho conta, quero me cadastrar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 16, 
    position: 'absolute',
    top: '42%',
  },
  title: { 
    fontSize: 24, 
    marginBottom: 30, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  input: {
    height: 45,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 14,
    paddingHorizontal: 115,
    borderRadius: 8,
    marginTop: 10,
  },
  secondaryButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
    top: '25%'
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 },
});

export default LoginScreen;
