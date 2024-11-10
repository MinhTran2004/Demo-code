import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign";

export default class ComponentEditAddress {

    static SelectAddress = ({name}:any) => {
        const [listCity, setListCity] = useState(false);

        const data = ["Ha Noi", "Hung Yen", "Hai Duong", "Vinh Phuc", "Hai Phong", "Nam Dinh", "Sai Gon"];
        return (
            <View style={styles.container_Select_Address}>
                <TouchableOpacity style={styles.btn_select_address} onPress={() => setListCity(!listCity)}>
                    <Text>{name}</Text>
                    <AntDesign name="down" style={{ fontSize: 20 }} />
                </TouchableOpacity>
                {listCity &&
                    <FlatList
                        style={styles.container_list_address}
                        data={data}
                        keyExtractor={(index) => index.toString()}
                        renderItem={({ item }) => <TouchableOpacity><Text style={styles.name_Address}>{item}</Text></TouchableOpacity>} />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container_Select_Address: {
        marginBottom: 10
    },
    btn_select_address: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#e7e7e7',
        padding: 15,
        borderRadius: 10
    },
    container_list_address: {
        width: '100%',
        height: 150,
        position: 'absolute',
        backgroundColor: '#f2f2f2',
        bottom: -150,
        zIndex: 100,
    },
    name_Address: {
        fontSize: 20
    }
})