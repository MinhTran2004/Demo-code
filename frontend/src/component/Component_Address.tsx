import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class ComponentAddress {
    static ItemAddress = ({ status, navigation }: any) => {
        return (
            <View style={styles.container_address}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderColor: '#bfbfbf', paddingBottom: 5 }}>
                    <Text style={styles.name_address}>Trần Công Minh</Text>
                    <Text style={styles.phone_address}>(+84)0976577025</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginTop: 5, width: '93%' }}>
                        <Text style={styles.describe_address}>Số nhà 20a, ngõ 34/23 Đường Phương Canh</Text>
                        <Text style={styles.describe_address}>Phương Canh, Nam Từ Liêm, Hà Nội, Việt Nam</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('EditAddress', { isEdit: true })}>
                        <Image source={require("@images//icon_edit.png")} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>
                {status ? (
                    <Text style={styles.default_address}>Mặc định</Text>
                ) : (
                    <Text style={{ height: 0 }} />
                )}
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container_address: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 10,
        padding: 15,
    },
    name_address: {
        color: 'black',
        fontSize: 16,
    },
    phone_address: {
        fontSize: 16,
        paddingLeft: 5,
    },
    describe_address: {
        marginTop: 2,
    },
    default_address: {
        width: 70,
        textAlign: 'center',
        marginTop: 5,
        padding: 1,
        borderWidth: 0.5,
        borderColor: 'red',
        borderRadius: 5,
        color: 'red',
    },
});
