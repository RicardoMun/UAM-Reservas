import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Home } from './src/screens/Home'
import { Login } from './src/screens/Login'
import { Booking } from './src/screens/Booking'


export default function App() {
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <Login />
    {/* <Home></Home> */}
    </ScrollView>
  );
}

