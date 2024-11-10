import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import ComponentHome from "@component/Component_Home";

export default function ScreenCategoryProduct({ navigation }: any) {
    return (
        <View>
            {/* header */}
            <View style={styles.container_header}>
                <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                    <Feather name="arrow-left" style={{ fontSize: 28 }} />
                </TouchableOpacity>
                <Text style={styles.text_title}>Pizza</Text>
            </View>

            {/* body */}
            <View>
                <ComponentHome.ProductVertical />
                <ComponentHome.ProductVertical />
                <ComponentHome.ProductVertical />
                <ComponentHome.ProductVertical />
                <ComponentHome.ProductVertical />
                <ComponentHome.ProductVertical />
                <ComponentHome.ProductVertical />
            </View>


        </View>
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