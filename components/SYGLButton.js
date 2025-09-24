// File: components/SYGLButton.js

import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../styles/theme';

const SYGLButton = ({ title, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.containerPressed, // Apply pressed styles when needed
      ]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Text style={[styles.text, isPressed && styles.textPressed]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary, // The vibrant pink
    borderWidth: 3,
    borderColor: colors.text, // White border
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: colors.background, // Black shadow
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5, // Android shadow
  },
  containerPressed: {
    transform: [{ translateX: 2 }, { translateY: 2 }],
    shadowOffset: { width: 3, height: 3 },
    elevation: 3,
  },
  text: {
    color: colors.text,
    // fontFamily: 'PressStart2P', // Uncomment once font is set up
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold', // Placeholder
  },
  textPressed: {
    transform: [{ translateX: 2 }, { translateY: 2 }],
  },
});

export default SYGLButton;