import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, SafeAreaView } from 'react-native';
import { Home } from './src/screens/Home'
import { Login } from './src/screens/Login'
import { Booking } from './src/screens/Booking'
import { BookingForm } from './src/screens/BookingForm'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Login />
      {/* <Home /> */}
      {/* <BookingForm /> */}
    </SafeAreaView>
  );
}

