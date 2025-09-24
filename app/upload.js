// File: app/upload.js

import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import PixelatedText from '../components/PixelatedText';
import SYGLButton from '../components/SYGLButton';
import { colors } from '../styles/theme';

// Placeholder for a styled file input component.
const CustomFileInput = ({ onFileSelect }) => {
  return (
    <View style={styles.fileInputContainer}>
      <SYGLButton title="SELECT FILE" onPress={() => {
        if (Platform.OS === 'web') {
          const input = document.createElement('input');
          input.type = 'file';
          input.onchange = (e) => onFileSelect(e.target.files[0]);
          input.click();
        } else {
          console.log("File picker not implemented for this platform yet.");
        }
      }} />
      <PixelatedText style={styles.fileStatus}>No file selected</PixelatedText>
    </View>
  );
};

export default function DocumentUploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    console.log(`Selected file: ${file.name}`);
  };

  const handleUploadAndProceed = () => {
    if (selectedFile) {
      console.log(`Processing file: ${selectedFile.name}`);
      router.push('/main');
    } else {
      alert("Please select a file first!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/" asChild>
          <SYGLButton title="BACK" />
        </Link>
      </View>
      <PixelatedText style={styles.title} large bold>
        DOCUMENT UPLOAD
      </PixelatedText>
      <View style={styles.spacer} />
      <CustomFileInput onFileSelect={handleFileSelect} />
      <View style={styles.spacer} />
      <SYGLButton title="UPLOAD AND PROCEED" onPress={handleUploadAndProceed} />
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
  header: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 28,
    color: colors.text,
  },
  spacer: {
    marginVertical: 15,
  },
  fileInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  fileStatus: {
    marginLeft: 20,
    color: colors.border,
  },
});