import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.bg}>
      
      {/* Шапка: Аватарка и Имя */}
      <View style={styles.header}>
        <Text style={styles.avatar}>👦🏻 Hi, Push</Text>
        <Text style={styles.bell}>🔔</Text>
      </View>

      {/* Белая карточка со всем контентом */}
      <ScrollView style={styles.card}>
        
        {/* Синяя банковская карта */}
        <View style={styles.bankCard}>
          <Text style={styles.cardText}>John Smith</Text>
          <Text style={styles.cardSub}>Amazon Platinium</Text>
          <Text style={styles.cardNum}>4756 •••• •••• 9018</Text>
          <Text style={styles.cardMoney}>$3,469.52     VISA</Text>
        </View>

        {/* Сетка кнопок (Просто строки по 3 штуки) */}
        <View style={styles.row}>
          <View style={styles.item}><Text style={styles.icon}>💳</Text><Text style={styles.txt}>Account</Text></View>
          <View style={styles.item}><Text style={styles.icon}>📲</Text><Text style={styles.txt}>Transfer</Text></View>
          <View style={styles.item}><Text style={styles.icon}>🏧</Text><Text style={styles.txt}>Withdraw</Text></View>
        </View>

        <View style={styles.row}>
          <View style={styles.item}><Text style={styles.icon}>📱</Text><Text style={styles.txt}>Mobile</Text></View>
          <View style={styles.item}><Text style={styles.icon}>🧾</Text><Text style={styles.txt}>Pay bill</Text></View>
          <View style={styles.item}><Text style={styles.icon}>🐷</Text><Text style={styles.txt}>Save</Text></View>
        </View>

        <View style={styles.row}>
          <View style={styles.item}><Text style={styles.icon}>💳</Text><Text style={styles.txt}>Credit</Text></View>
          <View style={styles.item}><Text style={styles.icon}>📊</Text><Text style={styles.txt}>Report</Text></View>
          <View style={styles.item}><Text style={styles.icon}>👥</Text><Text style={styles.txt}>Friends</Text></View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Нижнее меню (Таб-бар) */}
      <View style={styles.tabs}>
        <Text style={styles.tabActive}>🏠 Home</Text>
        <Text style={styles.tab}>🔍</Text>
        <Text style={styles.tab}>✉️</Text>
        <Text style={styles.tab}>⚙️</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: '#3F51B5' },
  header: { paddingTop: 50, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', height: 100 },
  avatar: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  bell: { fontSize: 20 },
  
  card: { flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 },
  
  bankCard: { backgroundColor: '#1A237E', borderRadius: 20, padding: 20, height: 170, justifyContent: 'space-between', marginBottom: 20 },
  cardText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  cardSub: { color: '#aaa', fontSize: 12 },
  cardNum: { color: '#fff', fontSize: 16, letterSpacing: 2 },
  cardMoney: { color: '#fff', fontSize: 20, fontWeight: 'bold' },

  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  item: { width: '30%', alignItems: 'center', backgroundColor: '#F5F5F5', padding: 10, borderRadius: 15 },
  icon: { fontSize: 24, marginBottom: 5 },
  txt: { fontSize: 11, color: '#555', textAlign: 'center' },

  tabs: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopWidth: 1, borderColor: '#eee' },
  tabActive: { backgroundColor: '#3F51B5', color: '#fff', padding: 8, borderRadius: 15, fontWeight: 'bold' },
  tab: { fontSize: 20 },
});
