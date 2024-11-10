import ComponentHome from "@component/Component_Home";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';

export default function ScreenFavourite({ navigation }: any) {
    return (
        <ScrollView>
            {/* header */}
            <View style={styles.container_header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" style={{ fontSize: 30 }} />
                </TouchableOpacity>
                <Text style={styles.text_title}>Yêu thích</Text>
            </View>
            <View style={{paddingHorizontal: 8}}>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
                <ComponentHome.ProductVertical navigation={navigation}/>
            </View>
        </ScrollView>
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