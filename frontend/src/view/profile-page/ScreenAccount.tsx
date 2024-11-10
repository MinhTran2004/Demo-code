import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";

export default function ScreenAccount() {
  const [name, setName] = useState("Nguyễn Bá Thịnh");
  const [email, setEmail] = useState("Thinh@gmail.com");
  const [phone, setPhone] = useState("0987654321");
  const [bio, setBio] = useState("Tôi yêu đồ ăn nhanh");

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://shopgarena.net/wp-content/uploads/2022/08/Hinh-tuong-QI-ngau-moi-nhat.jpg", // You can replace with the actual image source
        }}
        style={styles.profileImage}
      />
      <Text style={styles.label}>Họ và Tên</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Số Điện Thoại</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={styles.input}
        value={bio}
        onChangeText={setBio}
        multiline={true}
      />

     <Button title="Lưu" color="#fe9b29"  />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
  },

});
