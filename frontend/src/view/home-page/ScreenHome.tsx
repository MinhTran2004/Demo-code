import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import ComponentHome from "@component/Component_Home";
import ViewModelProduct from "@viewmodel/VM_Product";

export default function ScreenHome({ navigation }: any) {
    const viewModel = ViewModelProduct(navigation);  

    return (
        <ScrollView>
            <View style={styles.main}>
                {/* Header */}
                <View style={styles.container_header}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require("@images/user.png")} style={{ width: 45, height: 45 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[styles.text_header, { fontWeight: "normal", color: "#8c8d8e" }]}>Thành viên</Text>
                            <Text style={styles.text_header}>Trần Công Minh</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                        <View style={styles.icon_header}>
                            <Image source={require("@images/cart.png")} style={{ width: 30, height: 30 }} />
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                    <ComponentHome.InputScreach input={viewModel.search} event={viewModel.setSearch} />
                </TouchableOpacity>

                {/* Banner */}
                <ScrollView
                    ref={viewModel.scrollViewRef}
                    horizontal
                    pagingEnabled
                    onMomentumScrollEnd={viewModel.handleScrollEnd} // Cập nhật vị trí khi cuộn xong
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                >
                    {viewModel.banners.map((banner, index) => (
                        <Image key={index} source={banner} style={{ width: viewModel.bannerWidth, height: 180 }} /> 
                    ))}
                </ScrollView>

                {/* Icons for banner slides */}
                <View style={styles.iconContainer}>
                    {viewModel.banners.map((_, index) => (
                        <View
                            key={index}
                            style={[styles.iconDot, { backgroundColor: viewModel.getIconColor(index) }]}
                        />
                    ))}
                </View>

                <ComponentHome.TextTitle text={"Special Offers"} />

                {/* Category Icons */}
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_hambuger.png")} text={"Hamburger"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_pizza.png")} text={"Pizza"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_noodles.png")} text={"Noodles"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_chicken.png")} text={"Chicken"} />
                </View>

                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_potato.png")} text={"Potato"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_drink.png")} text={"Drink"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_cake.png")} text={"Dessert"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_more.png")} text={"More"} />
                </View>

                <ComponentHome.TextTitle text={"Discount Guaranteed!"} />

                {/* Horizontal Product Scroll */}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: "row" }}>
                        {viewModel.data.map((item, index) => (
                            <ComponentHome.ProductHozirontal product={item} navigation={navigation} key={index} />
                        ))}
                    </View>
                </ScrollView>

                <ComponentHome.TextTitle text={"Recommended For You"} />

                {/* Recommended Categories */}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: "row", marginBottom: 15 }}>
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_all.png")} text={"All"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_hambuger.png")} text={"Hamburger"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_pizza.png")} text={"Pizza"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_noodles.png")} text={"Noodles"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_chicken.png")} text={"Chicken"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_potato.png")} text={"Potato"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_drink.png")} text={"Drink"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_cake.png")} text={"Dessert"} />
                    <ComponentHome.SelectCategoryProuctHozizontal icon={require("@images/icon_more.png")} text={"More"} />
                </ScrollView>

                {/* Vertical Products */}
                {Array.isArray(viewModel.data) && viewModel.data.length > 0 ? (
                    viewModel.data.map((item, index) => (
                        <ComponentHome.ProductVertical product={item} navigation={navigation} key={index} />
                    ))
                ) : (
                    <Text>No data available</Text>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#f6f6f7",
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    container_header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text_header: {
        fontSize: 17,
        fontWeight: "bold",
        color: "black",
    },
    icon_header: {
        borderWidth: 0.5,
        borderColor: "#c2c2c2",
        borderRadius: 50,
        padding: 9,
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10,
    },
    iconDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
});
