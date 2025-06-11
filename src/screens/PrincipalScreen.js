import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import BackgroundWrapper from '../components/BackgroundWrapper';

const PrincipalScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setData('');
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Image
          source={require('../../assets/promofabet.png')}
          style={styles.image}
          resizeMode="cover"
        />
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <Text style={styles.text}>{data}</Text>
        )}

        {/* Botão customizado no lugar do Button */}
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('CadastroScreen')}
          activeOpacity={0.7}
        >
          <Text style={styles.textoBotao}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flexDirection: 'row',
    position: 'absolute',
    top: '42%',
    resizeMode: 'cover',
    height: 398,
    width: 400,
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  botao: {
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: -240,
    left: -70,
  },
  textoBotao: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PrincipalScreen;
