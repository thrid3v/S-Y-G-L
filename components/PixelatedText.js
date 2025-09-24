// File: components/PixelatedText.js

import { StyleSheet, Text } from 'react-native';
import { colors } from '../styles/theme';

const PixelatedText = ({ children, style, large, pink, bold }) => {
  return (
    <Text style={[
      styles.baseText,
      large && styles.largeText,
      pink && styles.pinkText,
      bold && styles.boldText,
      style, // For any additional styles
    ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    // fontFamily: 'VCR_OSD_MONO', // Or whatever your second font is named
    color: colors.text,
    fontSize: 14,
  },
  largeText: {
    fontSize: 24,
    // fontFamily: 'PressStart2P', // Uncomment once font is set up
  },
  pinkText: {
    color: colors.primary, // Your vibrant pink
  },
  boldText: {
    fontWeight: 'bold', // A placeholder until font is set up
  },
});

export default PixelatedText;