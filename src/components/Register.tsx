import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, StatusBar } from 'react-native';

type Props = {
  onBack: () => void;
};

export default function Register({ onBack }: Props) {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />

      {/* Жоғарғы күлгін бөлік */}
      <View style={styles.topHeader}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Sign up</Text>
      </View>

      {/* Төменгі ақ карточка */}
      <View style={styles.bottomCard}>
        <Text style={styles.title}>Welcome to us,</Text>
        <Text style={styles.subtitle}>Hello there, create New account</Text>

        {/* Иллюстрация (Телефон) */}
        <View style={styles.illustrationContainer}>
          <View style={styles.circleBg}>
            <Text style={styles.phoneIcon}>📱</Text>
          </View>
        </View>

        {/* Енгізу өрістері */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#A0A0A0" />
          <TextInput style={styles.input} placeholder="Text input" placeholderTextColor="#A0A0A0" />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#A0A0A0" secureTextEntry />
        </View>

        {/* Шарттарға келісу бөлігі */}
        <View style={styles.termsContainer}>
          <View style={styles.checkbox} />
          <Text style={styles.termsText}>
            By creating an account your agree to our <Text style={styles.termsLink}>Term and Conditions</Text>
          </Text>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>

        {/* Кіру бетіне қайту сілтемесі */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Have an account? </Text>
          <Pressable onPress={onBack}>
            <Text style={styles.loginLink}>Sign In</Text>
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
    paddingTop: 40,
  },
  backButton: {
    marginBottom: 4,
  },
  backButtonText: {
    fontSize: 24,
    color: '#FFFFFF',
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
    paddingTop: 20,
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
    marginBottom: 16,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  circleBg: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#EDE7F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneIcon: {
    fontSize: 26,
  },
  inputContainer: {
    gap: 10,
    marginBottom: 14,
  },
  input: {
    height: 46,
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    borderColor: '#C7C7CC',
    borderRadius: 4,
    marginRight: 10,
  },
  termsText: {
    fontSize: 12,
    color: '#8E8E93',
    flex: 1,
  },
  termsLink: {
    color: '#5E35B1',
    fontWeight: '600',
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    color: '#8E8E93',
    fontSize: 14,
  },
  loginLink: {
    color: '#5E35B1',
    fontSize: 14,
    fontWeight: '600',
  },
});