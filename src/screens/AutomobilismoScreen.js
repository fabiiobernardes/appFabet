import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Switch, TextInput, Alert, Platform } from "react-native";

import img1 from "../../assets/celticsxwarriors.png";


const Card = ({ title, description, image }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [palpite, setPalpite] = useState("");

  const toggleSwitch = () => setIsEnabled(prev => !prev);

  const handlePalpiteSubmit = () => {
    const message = `Seu palpite para ${title}: ${palpite}`;
    Alert.alert("Palpite enviado", message);
    setPalpite("");
  };

  return (
    <View style={styles.imageCard}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={() => setShowDescription(!showDescription)}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        {showDescription && (
          <>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Digite seu palpite"
                placeholderTextColor="#aaa"
                value={palpite}
                onChangeText={setPalpite}
              />
              <TouchableOpacity style={styles.button} onPress={handlePalpiteSubmit}>
                <Text style={styles.buttonText}>Palpite</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Receber notificações</Text>
              <Switch
                value={isEnabled}
                onValueChange={toggleSwitch}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const FutebolScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Dicas do Especialista</Text>

      <Card
        title="Celtics x Warriors"
        description={(
          <Text>
            <Text style={styles.titledesc}>Celtics</Text>{"\n"}
            Fundação: 1946{"\n"}
            Títulos da NBA: 17{"\n"}
            Lendas: Bill Russell, Larry Bird, Paul Pierce{"\n"}
            <Text style={styles.titledesc}>Warriors</Text>{"\n"}
            Fundação: 1946{"\n"}
            Títulos da NBA: 7{"\n"}
            Lendas: Curry, Thompson, Durant{"\n\n"}
            <Text style={styles.titledesc}>Dicas</Text>{"\n"}
            Dos ultimos 10 confrontos Warriors venceu 6.{"\n"}
            Stephen Curry fez 5 bolas de 3 pontos em 9 jogos de 10.{"\n"}
            Jason Tatum fez Duplo Duplo em 7 jogos de 10.{"\n"}
          </Text>
        )}
        image={img1}
      />

    </ScrollView>
  );
};

export default FutebolScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#121212",
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
    textAlign: "center",
  },
  imageCard: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    width: 360,
    backgroundColor: "#333",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: 340,
    height: 180,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 8,
    color: "white",
    textAlign: "center",
  },
  description: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
  titledesc: {
    fontWeight: "bold",
    color: "white"
  },
  switchContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  switchLabel: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 10,
    width: '75%',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
