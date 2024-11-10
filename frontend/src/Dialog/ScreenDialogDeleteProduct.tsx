import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScreenDialogDeleteProduct({ navigation }: any) {
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
                        <Text style={{ fontSize: 20, color: "black", textAlign: 'center' }}>Bạn có chắc muốn xóa sản phẩm này?</Text>
                        <View style={styles.viewButton}>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.buttonYes}>
                                <Text style={{ color: '#4AB1FB', fontSize: 20 }}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.buttonNo}>
                                <Text style={{ color: 'white', fontSize: 20 }}>No</Text>
                            </TouchableOpacity>
                        </View>

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
    buttonYes: {
        width: 120,
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#4AB1FB',
        margin: 10
    },
    buttonNo: {
        width: 120,
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#4AB1FB',
        margin: 10,
        backgroundColor: '#4AB1FB'
    }
});
