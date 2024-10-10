import React from 'react';
import { StyleSheet } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context'

interface SafeAreaViewContainerProps {
    children: React.ReactNode
}

const SafeAreaViewContainer = ({ children}: SafeAreaViewContainerProps) => {
  return <SafeAreaView style={styles.container}>{ children }</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    height: '100%',
  },
});

export default SafeAreaViewContainer