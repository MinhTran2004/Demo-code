import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import ComponentPayment from "@component/Component_Payment";

export default function ScreenPayment({ navigation }: any) {
    return (
        <ScrollView>
            <View>
                {/* header */}
                <View style={styles.container_header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Feather name="arrow-left" style={{ fontSize: 28 }} />
                    </TouchableOpacity>
                    <Text style={styles.text_title}>Giỏ hàng</Text>
                </View>

                {/* address */}
                <View style={styles.container_address}>
                    <Text style={styles.title_address}>Địa chỉ nhận hàng</Text>
                    <View style={styles.container_content_address}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("@images//icon_location.png")} style={{ width: 30, height: 30 }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.name_address}>Home</Text>
                                <Text>63 Lê Đức Thọ, Nam Từ Liêm, Hà Nội</Text>
                            </View>
                        </View>
                        <AntDesign name="right" style={{ fontSize: 23, color: '#51e180' }} />
                    </View>
                </View>

                <View style={styles.container_list_product}>
                    <Text style={styles.text_title}>Sản phẩm</Text>
                    <ComponentPayment.ProductBycart />
                    <ComponentPayment.ProductBycart />
                    <ComponentPayment.ProductBycart />
                </View>

                {/* method payment */}
                <View style={styles.container_method_payment}>
                    <ComponentPayment.MethodPayment icon={'wallet'} name={'Payment Methods'} text={'E-Wallet'} />
                    <View style={styles.line} />
                    <ComponentPayment.MethodPayment icon={'shopping-sale'} name={'Get Discounts'} text={'Discount 20%'} />
                </View>

                {/* detail payment */}
                <View style={styles.container_detail_payment}>
                    <ComponentPayment.DetailsPayment text={'Subtotal'} price={'24.00'} />
                    <ComponentPayment.DetailsPayment text={'Delivery'} price={'2.00'} />
                    <ComponentPayment.DetailsPayment text={'Promo'} price={'4.80'} />
                    <View style={styles.line} />
                    <ComponentPayment.DetailsPayment text={'ToTal'} price={'21.20'} />
                </View>

                <TouchableOpacity style={styles.buton_payment} onPress={() => navigation.navigate("Main")}>
                    <Text style={styles.text_payment}>Thanh Toán - $21.20</Text>
                </TouchableOpacity>



            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 1.5,
        width: '100%',
        backgroundColor: '#e4e4e4',
        marginVertical: 15,
    },

    // header
    container_header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10
    },
    text_title: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 5,
    },

    // address
    container_address: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 10,
        marginTop: 10,
        padding: 15
    },
    title_address: {
        fontWeight: 'bold',
        fontSize: 19,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#e4e4e4'
    },
    container_content_address: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    name_address: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    // list_product
    container_list_product: {
        marginHorizontal: 10,
        marginVertical: 15,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
    },

    // method payment 
    container_method_payment: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 20
    },

    // detail payment
    container_detail_payment: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 15,
        padding: 15,
        borderRadius: 20,
    },

    // button payment
    buton_payment: {
        backgroundColor: '#1bac4b',
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 50,
        alignItems: 'center',
    },
    text_payment: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    }
})
