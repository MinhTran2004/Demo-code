import { Image, StyleSheet, Text, View } from "react-native"
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class ComponentPayment {
    static ProductBycart = () => {
        return (
            <View style={styles.container_product_vertical}>
                <Image source={require("@images//image_product_demo.png")} style={styles.image_product_vertical} />
                <View style={{ width: '77%', marginLeft: 10, justifyContent: 'space-between' }}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.name_product_vertical}>Vegetarian Noodles</Text>
                        <Text>Hambuger</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                        <Text style={styles.price_product_vertical}>$23.000</Text>
                        <Text style={styles.quantity_product}>x6</Text>
                    </View>
                </View>
            </View>
        )
    }

    static MethodPayment = ({ icon, name, text }: any) => {
        return (
            <View style={styles.container_method_payment}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Fontisto name={icon} style={{ fontSize: 23, color: '#1bac4b' }} />
                    <Text style={{ marginLeft: 10, fontSize: 15 }}>{name}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 10, fontSize: 15 }}>{text}</Text>
                    <AntDesign name="right" style={{ fontSize: 22, color: '#1bac4b' }} />
                </View>
            </View>
        )
    }

    static DetailsPayment = ({text, price}:any) => {
        return (
            <View style={styles.container_detail_payment}>
                <Text style={styles.text_detail}>{text}</Text>
                <Text style={styles.price_detail}>${price}</Text>
           
            </View>
        )
    }

}


const styles = StyleSheet.create({
    // CartVertical
    container_product_vertical: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        borderTopWidth: 1,
        borderColor: '#e4e4e4',
        padding: 10,
    },
    image_product_vertical: {
        width: '23%',
        height: 90,
        borderRadius: 10
    },
    name_product_vertical: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    price_product_vertical: {
        width: 150,
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
        marginTop: 5
    },
    quantity_product: {
        fontSize: 20,
        marginRight: 30,
        color: '#42bb6a',
    },

    // method payment
    container_method_payment: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    //detail payment
    container_detail_payment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    text_detail: {
        fontSize: 17,
    },
    price_detail: {
        fontSize: 17,
        fontWeight: 'bold'
    }

})