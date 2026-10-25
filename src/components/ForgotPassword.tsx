import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, StatusBar, ScrollView } from 'react-native';

export default function ForgotPassword({ onBack }) {
  // Состояния для всех полей ввода
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleApplyChanges = () => {
    // Здесь будет логика сохранения, когда все поля заполнены
    alert('Пароль успешно изменен!');
    onBack(); // Возвращает на экран логина
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      
      {/* Фиолетовая шапка как на главном экране */}
      <View style={styles.topHeader}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>← Назад</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Восстановление доступа</Text>
      </View>

      {/* Единая белая карточка со всеми формами */}
      <ScrollView style={styles.bottomCard} showsVerticalScrollIndicator={false}>
        
        {/* БЛОК 1: Ввод номера телефона */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Номер телефона</Text>
          <Text style={styles.sectionSubtitle}>Мы отправим код подтверждения на этот номер</Text>
          <TextInput
            style={styles.input}
            placeholder="Введите номер телефона"
            placeholderTextColor="#A0A0A0"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* БЛОК 2: Ввод СМС-кода */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Код подтверждения</Text>
          <Text style={styles.sectionSubtitle}>Введите 4-значный код из СМС</Text>
          <TextInput
            style={styles.input}
            placeholder="0000"
            placeholderTextColor="#A0A0A0"
            keyboardType="number-pad"
            maxLength={4}
            value={code}
            onChangeText={setCode}
          />
        </View>

        {/* БЛОК 3: Новый пароль */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Новый пароль</Text>
          <Text style={styles.sectionSubtitle}>Придумайте надежный пароль для входа</Text>
          <TextInput
            style={styles.input}
            placeholder="Новый пароль"
            placeholderTextColor="#A0A0A0"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Подтвердите пароль"
            placeholderTextColor="#A0A0A0"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* Единая кнопка сохранения для всей страницы */}
        <Pressable style={styles.submitButton} onPress={handleApplyChanges}>
          <Text style={styles.submitButtonText}>Подтвердить и изменить</Text>
        </Pressable>
        
        {/* Отступ снизу, чтобы кнопка не прижималась к краю экрана при скролле */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#5E35B1', // Тот же фиолетовый цвет, что и в App.tsx
  },
  topHeader: {
    height: 130,
    paddingHorizontal: 24,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  backButton: {
    paddingVertical: 5,
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
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
  section: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
    paddingBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#8E8E93',
    marginBottom: 12,
  },
  input: {
    height: 48,
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000000',
    marginTop: 8,
  },
  submitButton: {
    height: 50,
    backgroundColor: '#5E35B1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
