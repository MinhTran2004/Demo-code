import { Image, StyleSheet, Text, View } from "react-native";

export default function ScreenNotification({ navigation }: any) {

    const ItemNotification = () => {
        return (
            <View style={styles.container_notification}>
                <Image source={require("@images/user.png")} style={styles.image_notification} />
                <View style={{ marginLeft: 10, justifyContent: 'space-between', paddingVertical: 5 }}>
                    <Text style={styles.title_notification}>Mua hàng</Text>
                    <Text>Đơn hàng đang chờ xác nhận</Text>
                </View>
            </View>
        )
    }

    return (
        <View>
            <Text style={styles.text_notification}>Thông báo</Text>
            <View style={{ padding: 10 }}>
                <ItemNotification />
                <ItemNotification />
                <ItemNotification />
                <ItemNotification />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text_notification: {
        backgroundColor: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        paddingVertical: 5,
        color: 'black'
    },
    container_notification: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        padding: 5,
    },
    image_notification: {
        height: 60,
        width: 60,
        borderRadius: 50,
    },
    title_notification: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    }
})