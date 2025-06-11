import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import FutebolScreen from '../screens/FutebolScreen';
import BasqueteScreen from '../screens/BasqueteScreen';
import NflScreen from '../screens/NflScreen';
import VolleyScreen from '../screens/VolleyScreen';
import AutomobilismoScreen from '../screens/AutomobilismoScreen';
import UfcScreen from '../screens/UfcScreen';
import SobreScreen from '../screens/SobreScreen';
import { useAuth } from '../hooks/useAuth';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'black', // fundo do menu
          width: 260,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        drawerActiveTintColor: 'red', 
        drawerInactiveTintColor: '#ccc',   
        headerStyle: {
          backgroundColor: 'black', 
        },
        headerTintColor: '#fff', 
      }}
    >
      <Drawer.Screen name="Inicio" component={TabNavigator} />
      <Drawer.Screen name="Futebol" component={FutebolScreen} />
      <Drawer.Screen name="Basquete" component={BasqueteScreen} />
      <Drawer.Screen name="Futebol Americano" component={NflScreen} />
      <Drawer.Screen name="Volei" component={VolleyScreen} />
      <Drawer.Screen name="Automobilismo" component={AutomobilismoScreen} />
      <Drawer.Screen name="UFC" component={UfcScreen} />
      <Drawer.Screen name="Sobre" component={SobreScreen} />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="AppDrawer" component={AppDrawer} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
