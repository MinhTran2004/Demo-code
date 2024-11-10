import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather"
import { useState } from "react";

export default function ScreenDetailProduct({navigation}:any) {
    const [favourite, setFavourite] = useState(false);
    return (
        <View style={{ flex: 1 }}>

            <TouchableOpacity style={styles.icon_return} onPress={() => navigation.navigate("Main")}>
                <Feather name="arrow-left" style={{ fontSize: 30, color: "white" }} />
            </TouchableOpacity>

            <Image source={require('@images/image_product_demo.png')} style={styles.image_product} />
            <View style={styles.container_infor}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.name_product}>Mixed Salad BonBum</Text>
                        <Text style={styles.price_product}>$ 23.000.000</Text>
                    </View>
                    <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                        {favourite ?
                            (<Image source={require('@images/icon_showFavourite.png')} style={{ width: 25, height: 25 }} />)
                            :
                            (<Image source={require('@images//icon_unFavourite.png')} style={{ width: 25, height: 25 }} />)
                        }
                    </TouchableOpacity>
                </View>
                <Text style={styles.des_product}>Giới thiệu sản phẩm</Text>
                <Text style={{ fontSize: 17 }}>Pizza là một món ăn truyền thống nổi tiếng của Ý, thường được làm từ bột mì, nước, muối, và men, rồi được nướng với các loại topping đa dạng như sốt cà chua, phô mai, thịt, rau củ và gia vị. Với hương vị đậm đà và sự kết hợp phong phú</Text>

            </View>

            <View style={styles.container_add_product}>
                <TouchableOpacity style={styles.btn_messenger}>
                    <Image source={require("@images//icon_messenger.png")} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_cart}>
                    <Image source={require("@images//cart.png")} style={{ width: 35, height: 35 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_sell}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Mua ngay</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    icon_return:{
        position: 'absolute',
        top: 10,
        left: 5,
        zIndex: 100,
    },
    image_product: {
        width: '100%',
        height: 350,
        objectFit: 'fill'
    },
    container_infor: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 15,
        borderTopStartRadius: 25,
        borderTopRightRadius: 25,
        position: 'absolute',
        bottom: -330,
    },
    name_product: {
        fontWeight: 'bold',
        fontSize: 23
    },
    price_product: {
        fontSize: 19,
        marginTop: 5
    },
    des_product: {
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 20,
    },


    // container add product
    container_add_product: {
        width: '100%',
        flexDirection: 'row',
        position: "absolute",
        bottom: 0
    },
    btn_messenger: {
        flex: 1,
        backgroundColor: '#2fcc64',
        alignItems: 'center',
        padding: 10,
        borderRightWidth: 1
    },
    btn_cart: {
        flex: 1,
        backgroundColor: '#2fcc64',
        alignItems: 'center',
        padding: 8,
    },
    btn_sell: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }
})