import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, Modal } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"; 
import ComponentEditAddress from "@component/Component_EditAddress";

export default function ScreenEditAddress({ navigation, route }: any) {
    const [isSwitch, setIsSwitch] = useState(false);
    const [isDialogVisible, setDialogVisible] = useState(false); // State cho Dialog
    const isEdit = route.params.isEdit; // Lấy giá trị từ params

    const handleSave = () => {
        setDialogVisible(true); // Hiển thị dialog khi nhấn lưu
        setTimeout(() => {
            setDialogVisible(false);
            navigation.goBack(); // Trở lại màn hình trước đó
        }, 2000); // Tự động đóng dialog sau 2 giây
    };

    return (
        <View style={styles.main}>
            {/* header */}
            <View style={styles.container_header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" style={{ fontSize: 28 }} />
                </TouchableOpacity>
                <Text style={styles.text_appbar}>Thay đổi địa chỉ</Text>
            </View>

            {/* contact */}
            <Text style={styles.text_title}>Liên hệ</Text>
            <TextInput style={[styles.inputTextContact, { marginBottom: 10 }]} placeholder="Nhập tên của bạn" />
            <TextInput style={styles.inputTextContact} placeholder="Nhập số điện thoại" />

            <Text style={styles.text_title}>Địa chỉ</Text>
            {/* Select City */}
            <ComponentEditAddress.SelectAddress name={"Chọn thành phố"} />
            <ComponentEditAddress.SelectAddress name={"Chọn quận"} />
            <ComponentEditAddress.SelectAddress name={"Chọn phường"} />
            <TextInput style={[styles.inputTextContact, { marginTop: 0 }]} placeholder="Nhập địa chỉ cụ thể" />

            {/* mặc định */}
            <Text style={styles.text_title}>Cài đặt</Text>

            <View style={styles.container_switch}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Đặt làm mặc định</Text>
                <Switch value={isSwitch} onChange={() => setIsSwitch(!isSwitch)} />
            </View>

            <TouchableOpacity style={styles.container_save} onPress={handleSave}>
                <Text style={styles.text_save}>Lưu</Text>
            </TouchableOpacity>

            {/* Dialog Thành Công */}
            <Modal
                transparent={true}
                visible={isDialogVisible}
                animationType="fade"
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.dialogContainer}>
                        <MaterialIcons name="check-circle" size={50} color="green" />
                        {/* Hiển thị nội dung thông báo theo từng trường hợp */}
                        <Text style={styles.dialogMessage}>
                            {isEdit ? "Sửa địa chỉ thành công!" : "Thêm địa chỉ thành công!"}
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    container_header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text_appbar: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 5,
    },
    text_title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
    },
    inputTextContact: {
        backgroundColor: '#e7e7e7',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    container_switch: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
        padding: 10,
        borderRadius: 10,
    },
    container_save: {
        width: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginTop: 30,
    },
    text_save: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    dialogContainer: {
        width: 250,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    dialogMessage: {
        fontSize: 16,
        color: 'black',
        marginTop: 10,
        textAlign: 'center',
    },
});
