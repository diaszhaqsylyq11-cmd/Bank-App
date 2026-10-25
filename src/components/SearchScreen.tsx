import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

export default function SearchScreen({ onSelectBranch }) {
  return (
    <View style={styles.container}>
      <Text style={styles.backArrow}>← Search</Text>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Кнопка открытия филиалов */}
        <Pressable style={styles.menuItem} onPress={onSelectBranch}>
          <View>
            <Text style={styles.title}>Branch</Text>
            <Text style={styles.subtitle}>Search for branch</Text>
          </View>
          <Text style={styles.icon}>🏛️</Text>
        </Pressable>

        <View style={styles.menuItem}>
          <View>
            <Text style={styles.title}>Interest rate</Text>
            <Text style={styles.subtitle}>Search for interest rate</Text>
          </View>
          <Text style={styles.icon}>📈</Text>
        </View>

        <View style={styles.menuItem}>
          <View>
            <Text style={styles.title}>Exchange rate</Text>
            <Text style={styles.subtitle}>Search for exchange rate</Text>
          </View>
          <Text style={styles.icon}>💱</Text>
        </View>

        <View style={styles.menuItem}>
          <View>
            <Text style={styles.title}>Exchange</Text>
            <Text style={styles.subtitle}>Exchange amount of money</Text>
          </View>
          <Text style={styles.icon}>👥</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', paddingTop: 50, paddingHorizontal: 20 },
  backArrow: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  menuItem: { backgroundColor: '#FFF', borderRadius: 16, padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  subtitle: { fontSize: 13, color: '#888', marginTop: 4 },
  icon: { fontSize: 35 }
});
