import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BackgroundWrapper from '../components/BackgroundWrapper';

const SobreScreen = () => {
  return (
    <BackgroundWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sobre o Fabet</Text>

        <Text style={styles.text}>
          O Fabet é o seu parceiro ideal para apostas esportivas! Nosso aplicativo oferece dicas exclusivas e análises de especialistas para ajudar você a apostar com mais segurança e informação.
        </Text>

        <Text style={styles.text}>
          No Fabet, você encontra palpites para os principais esportes do mundo:
          {'\n'}⚽ Futebol
          {'\n'}🏀 Basquete
          {'\n'}🏐 Vôlei
          {'\n'}🏈 Futebol Americano
          {'\n'}🏎️ Fórmula 1
          {'\n'}🥊 UFC
        </Text>

        <Text style={styles.text}>
          Todos os dias, nossos especialistas selecionam 3 dicas gratuitas para jogos limitados — perfeitas para quem quer apostar sem custo e com estratégia. 
        </Text>

        <Text style={styles.text}>
          E se você quiser ir além, oferecemos planos pagos com acesso a mais dicas, análises detalhadas e previsões antecipadas dos palpites mais promissores.
        </Text>

        <Text style={styles.text}>
          Baixe o Fabet e aposte com inteligência!
        </Text>
      </ScrollView>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', top:"300" },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  text: { fontSize: 16, marginBottom: 16, textAlign: 'justify' },
});

export default SobreScreen;
