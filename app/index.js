// File: app/index.js

import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import PixelatedText from '../components/PixelatedText';
import SYGLButton from '../components/SYGLButton';
import { colors } from '../styles/theme';

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <PixelatedText style={styles.title} large bold>
        S Y G L
      </PixelatedText>
      <View style={styles.spacer} />
      <PixelatedText style={styles.description}>
        A Gamified History Experience.
      </PixelatedText>
      <View style={styles.spacer} />
      <Link href="/upload" asChild>
        <SYGLButton title="START" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 48,
    color: colors.secondary,
  },
  description: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
  },
  spacer: {
    marginVertical: 15,
  },
});