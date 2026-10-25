import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, StatusBar, TextInput } from 'react-native';
import Register from './src/components/Register';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'register'>('login');

  if (currentScreen === 'register') {
    return <Register onBack={() => setCurrentScreen('login')} />;
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.topHeader}>
        <Text style={styles.headerTitle}>Sign in</Text>
      </View>

      <View style={styles.bottomCard}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Hello there, sign in to continue</Text>

        <View style={styles.illustrationContainer}>
          <View style={styles.circleBg}>
            <Text style={styles.lockIcon}>🔒</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Text input" placeholderTextColor="#A0A0A0" />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#A0A0A0" secureTextEntry />
        </View>

        <Pressable style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot your password ?</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>

        <View style={styles.fingerprintContainer}>
          <Text style={styles.fingerprintIcon}>🪪</Text>
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account? </Text>
          <Pressable onPress={() => setCurrentScreen('register')}>
            <Text style={styles.registerLink}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#5E35B1',
  },
  topHeader: {
    height: 130,
    paddingHorizontal: 24,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  bottomCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000000',
  },
  subtitle: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 20,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  circleBg: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#EDE7F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockIcon: {
    fontSize: 28,
  },
  inputContainer: {
    gap: 12,
    marginBottom: 12,
  },
  input: {
    height: 48,
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#8E8E93',
    fontSize: 13,
  },
  button: {
    height: 48,
    backgroundColor: '#E8E8EE',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#A0A0A5',
    fontSize: 16,
    fontWeight: '600',
  },
  fingerprintContainer: {
    alignItems: 'center',
    marginBottom: 14,
  },
  fingerprintIcon: {
    fontSize: 32,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#8E8E93',
    fontSize: 14,
  },
  registerLink: {
    color: '#5E35B1',
    fontSize: 14,
    fontWeight: '600',
  },
});