import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Định nghĩa kiểu cho các màn hình trong Stack Navigator
type RootStackParamList = {
  MessengerDetail: undefined;  // Kiểu dữ liệu không có tham số truyền vào
  // Bạn có thể thêm nhiều màn hình khác ở đây nếu cần
};

export default function ScreenMessenger() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Gắn kiểu cho navigation

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Màn hình tin nhắn user</Text>
      </View> */}

      {/* Tin nhắn của khách hàng */}
      <TouchableOpacity
        style={styles.messageContainer}
        onPress={() => navigation.navigate('MessengerDetail')} // Đảm bảo kiểu phù hợp
      >
        <Image
          source={require("@images//user.png")}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>chăm sóc khách hàng</Text>
          <Text style={styles.subtitleText}>Bạn cần giúp điều gì?</Text>
        </View>
        <Image source={require('@images//ic_next.png')}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitleText: {
    color: '#888',
    fontSize: 14,
  },
 
});
