import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default class ComponentHome {
    static InputScreach = ({ input, event }: any) => {
        return (
            <View style={styles.container_sreach}>
                <Image source={require("@images//search.png")} style={styles.image_search} />
                <TextInput placeholder="Nhập tên san phẩm cần tìm" value={input} onChangeText={(text) => event(text)} />
            </View>
        )
    }

    static TextTitle = ({ text }: any) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                <Text style={styles.text_title}>{text}</Text>
                <Text style={[styles.text_title, { color: '#37c666' }]}>See All</Text>
            </View>
        )
    }

    static SelectCategoryProductVertical = ({ navigation, icon, text }: any) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('CategoryProduct')} style={styles.container_select_vertical}>
                <Image source={icon} style={styles.icon_select_vertical} />
                <Text style={styles.text_select_vertical}>{text}</Text>
            </TouchableOpacity>
        )
    }

    static SelectCategoryProuctHozizontal = ({ icon, text }: any) => {
        return (
            <TouchableOpacity>
                <View style={styles.container_select_hozirontal}>
                    <Image source={icon} style={{ width: 20, height: 20 }} />
                    <Text style={styles.text_select_hozirontal}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    // Input_Screach
    container_sreach: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ebebeb',
        borderRadius: 10,
        marginTop: 15,
        paddingHorizontal: 10
    },
    image_search: {
        width: 25,
        height: 25,
    },

    // Text_Title
    text_title: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },

    // SelectCategoryProductVertical
    container_select_vertical: {
        width: '25%',
        alignItems: 'center'
    },
    icon_select_vertical: {
        width: 40,
        height: 40,
    },
    text_select_vertical: {
        fontWeight: '500',
        color: 'black',
        marginTop: 5,
    },

    // SelectCategoryProuctHozizontal
    container_select_hozirontal: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#2fbf5f',
        borderRadius: 20,
        marginRight: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    text_select_hozirontal: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        marginLeft: 5
    },
})