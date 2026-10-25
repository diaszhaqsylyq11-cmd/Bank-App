import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Pressable } from 'react-native';

export default function BranchScreen({ onBack }) {
  return (
    <View style={styles.container}>
      {/* Имитация карты сверху */}
      <View style={styles.mapMock}>
        <Pressable onPress={onBack} style={styles.backBtn}>
          <Text style={styles.backText}>← Branch</Text>
        </Pressable>
        <Text style={styles.mapPins}>📍 📍 📍</Text>
      </View>

      {/* Белая панель со списком внизу */}
      <View style={styles.listContainer}>
        <TextInput style={styles.searchBar} placeholder="🔍 Bank" placeholderTextColor="#aaa" />
        
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bankItem}><Text style={styles.bankText}>📍 Bank 1656 Union Street</Text><Text style={styles.dist}>50 m</Text></View>
          <View style={styles.bankItem}><Text style={styles.bankText}>📍 Bank Secaucus</Text><Text style={styles.dist}>1.2 km</Text></View>
          <View style={styles.bankItem}><Text style={styles.bankText}>📍 Bank 1657 Riverside Drive</Text><Text style={styles.dist}>5.3 km</Text></View>
          <View style={styles.bankItem}><Text style={styles.bankText}>📍 Bank Rutherford</Text><Text style={styles.dist}>70 m</Text></View>
          <View style={styles.bankItem}><Text style={styles.bankText}>📍 Bank 1656 Union Street</Text><Text style={styles.dist}>30 m</Text></View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E0E0E0' },
  mapMock: { flex: 1, paddingTop: 50, paddingHorizontal: 20, justifyContent: 'space-between' },
  backBtn: { backgroundColor: '#FFF', alignSelf: 'flex-start', padding: 8, borderRadius: 20 },
  backText: { fontWeight: 'bold' },
  mapPins: { fontSize: 30, textAlign: 'center', marginBottom: 50 },
  listContainer: { flex: 1.2, backgroundColor: '#FFF', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 },
  searchBar: { backgroundColor: '#F5F5F5', height: 45, borderRadius: 20, paddingHorizontal: 20, marginBottom: 15 },
  bankItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderColor: '#EEE' },
  bankText: { fontSize: 15, color: '#333', fontWeight: '500' },
  dist: { color: '#888', fontSize: 13 }
});
