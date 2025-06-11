import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PrincipalScreen from '../screens/PrincipalScreen';
import SobreScreen from '../screens/SobreScreen';
import LoginScreen from '../screens/LoginScreen';
import BackgroundWrapper from '../components/BackgroundWrapper';

const Tab = createBottomTabNavigator();

const SportsMenu = () => {
  const navigation = useNavigation();
  const icons = [
    { name: 'sports-soccer', screen: 'Futebol' },
    { name: 'sports-basketball', screen: 'Basquete' },
    { name: 'sports-volleyball', screen: 'Volei' },
    { name: 'sports-motorsports', screen: 'Automobilismo' },
    { name: 'sports-mma', screen: 'UFC' },
    { name: 'sports-football', screen: 'Futebol Americano' },
  ];

  return (
    <View style={styles.sportsMenu}>
      {icons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(icon.screen)}
        >
          <Icon name={icon.name} size={28} color="#fff" />
        </TouchableOpacity>
      ))}
    </View>
  );
};


const FooterMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footerMenu}>
      <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
        <Icon name="home" size={28} color="red" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
        <Icon name="info" size={28} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Icon name="login" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};


const ScreenWithMenus = ({ children }) => (
  <BackgroundWrapper>
    <View style={{ flex: 1 }}>
      {children}
      <SportsMenu />
    </View>
  </BackgroundWrapper>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: 'rgba(0,0,0,0.9)',
          borderTopWidth: 1,
          borderTopColor: 'red',
          paddingVertical: 5,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Principal"
        children={() => (
          <ScreenWithMenus>
            <PrincipalScreen />
          </ScreenWithMenus>
        )}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        children={() => (
          <ScreenWithMenus>
            <SobreScreen />
          </ScreenWithMenus>
        )}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="info" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        children={() => (
          <ScreenWithMenus>
            <LoginScreen />
          </ScreenWithMenus>
        )}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="login" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  sportsMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: 'red',
    position: 'absolute',
    top: '36%',
    left: 0,
    right: 0,
  },
  footerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.9)',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'red',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
  },
});

export default TabNavigator;
