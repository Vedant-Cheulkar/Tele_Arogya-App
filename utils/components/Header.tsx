import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Define the props interface
interface HeaderProps {
  title: string; // `title` is a string
  headerStyle?: ViewStyle; // `headerStyle` is optional and of type ViewStyle
  titleStyle?: TextStyle; // `titleStyle` is optional and of type TextStyle
}

export default function Header({ title, headerStyle, titleStyle }: HeaderProps) {
  return (
    <View style={[styles.header, headerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007BFF',
    padding: 15,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});