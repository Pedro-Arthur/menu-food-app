import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Bookmark() {
  return (
    <View style={styles.container}>
      <Text>Bookmark</Text>
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