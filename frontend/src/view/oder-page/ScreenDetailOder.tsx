
import CompmentOder from "@component/CompomentOder";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function ScreenDetailOder({ navigation }: any) {
    return (
        <ScrollView>
            <View>
                {/* header */}
                <View style={styles.container_header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                        <Feather name="arrow-left" style={{ fontSize: 28 }} />
                    </TouchableOpacity>
                    <Text style={styles.text_title}>Chi tiết đơn hàng</Text>
                </View>



                {/* address */}
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    marginHorizontal: 10,
                    marginTop: 10,
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Image source={require("@images/icon_location.png")} style={{ width: 30, height: 30 }} />
                    <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: 'bold' }}>Nguyễn Văn Toàn</Text>
                    <Text style={{ marginLeft: 10, color: 'gray', fontWeight: 'bold' }}>(+84) 0867198410</Text>

                </View>

                <View style={styles.container_address}>
                    <Text style={styles.title_address}>Địa chỉ nhận hàng</Text>
                    <View style={styles.container_content_address}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("@images/icon_location.png")} style={{ width: 30, height: 30 }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.name_address}>Home</Text>
                                <Text>63 Lê Đức Thọ, Nam Từ Liêm, Hà Nội</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.container_list_product}>
                    <Text style={styles.text_title}>Sản phẩm</Text>
                    <ScrollView style={{
                        maxHeight: 500,
                        marginHorizontal: 10,
                        marginVertical: 15,
                        padding: 10,
                        backgroundColor: 'white',
                        borderRadius: 20,
                    }} nestedScrollEnabled={true} contentContainerStyle={{ flexGrow: 0 }}>
                        <CompmentOder.ProductOder />
                        <CompmentOder.ProductOder />
                        <CompmentOder.ProductOder />
                        <CompmentOder.ProductOder />
                    </ScrollView>
                </View>





                <View style={styles.container_address}>
                    <Text style={styles.title_address}>Phương thức thanh toán</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Fontisto name={'wallet'} style={{ fontSize: 23, color: '#1bac4b' }} />
                            <Text style={{ marginLeft: 10, fontSize: 15 }}>Payment Methods</Text>
                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>E-wallet</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Fontisto name={'shopping-sale'} style={{ fontSize: 23, color: '#1bac4b' }} />
                            <Text style={{ marginLeft: 10, fontSize: 15 }}>Get Discounts</Text>
                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>20%</Text>
                    </View>
                </View>

                
                <View style={styles.container_detail_payment}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Tổng phụ</Text>
                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>50.500</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Vận chuyển</Text>
                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>50.500</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Ngày đặt hàng</Text>
                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>20/02/2004</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Seri đơn hàng</Text>
                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>883287647836872346</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15,fontWeight:'bold' }}>Tổng</Text>
                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 15 ,fontWeight:'bold'}}>100000</Text>
                    </View>
                </View>
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