// File: app/_layout.js

import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* This is where your screens will be rendered.
        <Stack.Screen name="index" />
        <Stack.Screen name="upload" />
        <Stack.Screen name="main" />
      */}
    </Stack>
  );
}