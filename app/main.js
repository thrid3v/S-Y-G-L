// File: app/main.js

import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import PixelatedText from '../components/PixelatedText';
import SYGLButton from '../components/SYGLButton';
import { colors } from '../styles/theme';

export default function MainPage() {
  const messages = [
    { sender: 'AI', text: 'Greetings, seeker of knowledge. What would you like to know?' },
    { sender: 'User', text: 'Tell me about the Dandi March.' },
    { sender: 'AI', text: 'The Dandi March, or Salt Satyagraha, was a pivotal act of nonviolent civil disobedience led by me. It began on March 12, 1930.' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PixelatedText large bold>MAHATMA GANDHI</PixelatedText>
        <Link href="/" asChild>
          <SYGLButton title="QUIT" />
        </Link>
      </View>
      <ScrollView style={styles.chatContainer}>
        {messages.map((msg, index) => (
          <View key={index} style={[
            styles.messageBubble,
            msg.sender === 'User' ? styles.userBubble : styles.aiBubble,
          ]}>
            <PixelatedText style={styles.messageText}>{msg.text}</PixelatedText>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <View style={styles.textInputBox}>
          <PixelatedText style={{ color: colors.border }}>Type your message...</PixelatedText>
        </View>
        <SYGLButton title="SEND" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: colors.border,
  },
  chatContainer: {
    flex: 1,
  },
  messageBubble: {
    padding: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  aiBubble: {
    alignSelf: 'flex-start',
    backgroundColor: colors.border,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: colors.secondary,
  },
  messageText: {
    color: colors.text,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 2,
    borderColor: colors.border,
  },
  textInputBox: {
    flex: 1,
    backgroundColor: colors.border,
    padding: 10,
  },
});