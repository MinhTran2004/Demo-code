import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class ComponentCart {
    static CartVertical = () => {
        return (
            <View style={styles.container_product_vertical}>
                <Image source={require("@images//image_product_demo.png")} style={styles.image_product_vertical} />
                <View style={{ width: '77%', marginLeft: 10, justifyContent: 'space-between' }}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.name_product_vertical}>Vegetarian Noodles</Text>
                        <Text>Hambuger</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        <Text style={styles.price_product_vertical}>$23.000</Text>

                        <View style={styles.container_operation}>
                            <TouchableOpacity>
                                <MaterialIcons name="add" style={styles.btn_operation} />
                            </TouchableOpacity>
                            <Text style={styles.text_quantity}>1</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="remove" style={styles.btn_operation} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
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
        marginRight: 10,
        marginTop: 10,
        padding: 15,
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
    container_operation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn_operation: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 20,
        padding: 5
    },
    text_quantity: {
        fontSize: 20,
        color: 'black',
        marginHorizontal: 8,
    }
})