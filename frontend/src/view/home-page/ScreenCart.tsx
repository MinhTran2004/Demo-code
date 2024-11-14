import { ViewModelCart } from "@viewmodel/VM-Cart/Cart";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import CartItem from "../../componen/cart/CartItem";

export default function ScreenCart({ navigation }: any) {
    const viewModel = ViewModelCart();
    const isCartEmpty = viewModel.data == null || viewModel.data.length === 0;

    return (
        <View style={styles.main}>

            {/* header */}
            <View style={styles.container_header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Feather name="arrow-left" style={{ fontSize: 30 }} />
                </TouchableOpacity>
                <Text style={styles.text_title}>Giỏ hàng</Text>
            </View>

            <ScrollView contentContainerStyle={isCartEmpty ? styles.emptyCartContainer : { padding: 10 }}>
                {/* body */}
                {isCartEmpty ? (
                    <Text style={styles.emptyCartText}>Giỏ hàng trống</Text>
                ) : (
                    viewModel.data.map((item) => (
                        <CartItem 
                            key={item.cart._id} 
                            cart={item.cart} 
                            product={item.product} 
                            event={viewModel.updateQuantityById}
                            deleteEvent={viewModel.deleteProductById} // Truyền deleteEvent vào CartItem
                        />
                    ))
                )}
            </ScrollView>

            {/* footer */}
            {!isCartEmpty && (
                <View style={styles.container_footer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text_total}>Tổng tiền</Text>
                        <Text style={styles.text_total}>$ {viewModel.total}</Text>
                    </View>

                    <TouchableOpacity style={styles.btn_payment} onPress={() => navigation.navigate('Payment')}>
                        <Text style={styles.text_payment}>Thanh toán</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-between',
    },
    container_header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    text_title: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 5,
    },
    emptyCartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCartText: {
        fontSize: 20,
        color: 'gray',
    },
    container_footer: {
        backgroundColor: 'white',
        padding: 10,
    },
    text_total: {
        color: 'black',
        fontWeight: '500',
        fontSize: 23,
    },
    btn_payment: {
        backgroundColor: '#33c262',
        marginTop: 10,
        padding: 10,
        borderRadius: 20,
    },
    text_payment: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});
