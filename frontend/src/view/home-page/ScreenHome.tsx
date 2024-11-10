import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import ComponentHome from "@component/Component_Home";
import ViewModelProduct from "@viewmodel/VM_Product";

export default function ScreenHome({ navigation }: any) {
    const [search, setSearch] = useState("");

    const viewModel = ViewModelProduct(navigation);
    // console.log(viewModel.data);
    
    return (
        <ScrollView>
            <View style={styles.main}>
                {/* Header */}
                <View style={styles.container_header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require("@images//user.png")} style={{ width: 45, height: 45 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[styles.text_header, { fontWeight: "normal", color: '#8c8d8e' }]}>Thành viên</Text>
                            <Text style={styles.text_header}>Trần Công Minh</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <View style={styles.icon_header}>
                            <Image source={require("@images//cart.png")} style={{ width: 30, height: 30 }} />
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <ComponentHome.InputScreach input={search} event={setSearch} />
                </TouchableOpacity>

                {/* body  */}
                <ComponentHome.TextTitle text={"Special Offers"} />
                <Image source={require("@images//logo_demo.jpg")} style={styles.img_body} />

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_hambuger.png")} text={"Hambuger"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_pizza.png")} text={"Pizza"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_noodles.png")} text={"Noodles"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_chicken.png")} text={"Chicken"} />
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_potato.png")} text={"Potato"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_drink.png")} text={"Drink"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_cake.png")} text={"Dessest"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_more.png")} text={"More"} />
                </View>

                <ComponentHome.TextTitle text={"Discount Guaranteed!"} />

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
                        <ComponentHome.ProductHozirontal navigation={navigation} />
                        <ComponentHome.ProductHozirontal navigation={navigation} />
                        <ComponentHome.ProductHozirontal navigation={navigation} />
                        <ComponentHome.ProductHozirontal navigation={navigation} />
                        <ComponentHome.ProductHozirontal navigation={navigation} />
                        <ComponentHome.ProductHozirontal navigation={navigation} />
                    </View>
                </ScrollView>

                <ComponentHome.TextTitle text={"Recommended For You"} />

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', marginBottom: 15 }}>
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_all.png")} text={"All"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_hambuger.png")} text={"Hambuger"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_pizza.png")} text={"Pizza"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_noodles.png")} text={"Noodles"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_chicken.png")} text={"Chicken"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_potato.png")} text={"Potato"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_drink.png")} text={"Drink"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_cake.png")} text={"Dessest"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_more.png")} text={"More"} />
                </ScrollView>

                {
                    Array.isArray(viewModel.data) && viewModel.data.length > 0 ? (
                        viewModel.data.map((item, index) => {
                            return <ComponentHome.ProductVertical product={item} navigation={navigation} />
                        })
                    ) : (
                        <Text>No data available</Text>  // Hoặc bạn có thể hiển thị một component khác khi không có dữ liệu
                    )
                }


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#f6f6f7',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    // header 
    container_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text_header: {
        fontSize: 17,
        fontWeight: "bold",
        color: 'black'
    },
    icon_header: {
        borderWidth: 0.5,
        borderColor: '#c2c2c2',
        borderRadius: 50,
        padding: 9,
    },
    // body
    img_body: {
        width: '100%',
        height: 180,
        objectFit: 'fill',
        borderRadius: 10,
        marginBottom: 20,
    },

})