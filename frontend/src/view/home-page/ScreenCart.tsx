import { ViewModelCart } from "@viewmodel/VM-Cart/Cart";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import CartItem from "../../componen/cart/CartItem";

export default function ScreenCart({ navigation }: any) {
    const viewModel = ViewModelCart();
    return (
        <View style={styles.main}>

            <ScrollView style={{ padding: 10 }}>
                {/* header */}
                <View style={styles.container_header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Feather name="arrow-left" style={{ fontSize: 30 }} />
                    </TouchableOpacity>
                    <Text style={styles.text_title}>Giỏ hàng</Text>
                </View>

                {/* body */}
                {viewModel.data != null ?
                    viewModel.data.map((item) => (
                        <CartItem key={item.cart._id} cart={item.cart} product={item.product} event={viewModel.updateQuantityById}/>
                    ))
                    :
                    <Text>Không có dữ liệu</Text>
                }

            </ScrollView>

            {/* footer */}
            <View style={styles.container_footer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.text_total}>Tổng tiền</Text>
                    <Text style={styles.text_total}>$ {viewModel.total}</Text>
                </View>

                <TouchableOpacity style={styles.btn_payment} onPress={() => navigation.navigate('Payment')}>
                    <Text style={styles.text_payment}>Thanh toán</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-between',
    },
    // header
    container_header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    text_title: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 5,
    },

    // footer
    container_footer: {
        backgroundColor: 'white',
        padding: 10
    },
    text_total: {
        color: 'black',
        fontWeight: '500',
        fontSize: 23
    },
    btn_payment: {
        backgroundColor: '#33c262',
        marginTop: 10,
        padding: 10,
        borderRadius: 20
    },
    text_payment: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})