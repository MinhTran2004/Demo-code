import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScreenDialogDeleteCompelted({ navigation }: any) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={{ color: 'white' }}>Show Modal</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.Containermodal}>
                    <View style={styles.viewModal}>
                        <Image source={require("@images//icon_all.png")} style={{ width: 60, height: 60, marginBottom: 20 }} />
                        <Text style={{ fontSize: 20, color: "black", textAlign: 'center' }}>Xóa sản phẩm thành công!</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    Containermodal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    viewModal: {
        width: 300,
        height: 150,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },
    viewButton: {
        flexDirection: 'row'
    },

});
