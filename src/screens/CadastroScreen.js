import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CadastroScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = async () => {
    if (!email || !telefone || !dataNascimento || !senha || !confirmarSenha) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    const user = {
      email,
      telefone,
      dataNascimento,
      senha
    };

    try {
      await AsyncStorage.setItem('@user', JSON.stringify(user));
      await AsyncStorage.setItem('@isAuthenticated', 'true');
      navigation.replace('AppDrawer');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Telefone" value={telefone} onChangeText={setTelefone} style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Data de Nascimento (DD/MM/AAAA)" value={dataNascimento} onChangeText={setDataNascimento} style={styles.input} />
      <TextInput placeholder="Senha" value={senha} onChangeText={setSenha} style={styles.input} secureTextEntry />
      <TextInput placeholder="Confirmar Senha" value={confirmarSenha} onChangeText={setConfirmarSenha} style={styles.input} secureTextEntry />

      <View style={styles.button}>
        <Button title="Cadastrar" onPress={handleCadastro} />
      </View>

      <View style={styles.button}>
        <Button title="Voltar para Login" onPress={() => navigation.navigate('Login')} color="#888" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 15 },
  button: { width: '100%', marginTop: 10 },
});

export default CadastroScreen;
