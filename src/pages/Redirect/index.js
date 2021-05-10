import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Redirect({ route }) {
  return (
    <View style={styles.container}>
      <Text>{route.params?.pageName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});