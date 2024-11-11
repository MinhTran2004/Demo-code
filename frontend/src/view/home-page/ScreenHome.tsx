import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ComponentHome from "@component/Component_Home";
import { ViewModelHome } from "@viewmodel/VM-Product/Home";
import ProductHozirontalItem from "../../componen/home-page/ProductHozirontalItem";
import ProductVerticalItem from "../../componen/home-page/ProductVerticalItem";

export default function ScreenHome({ navigation }: any) {
    const viewModel = ViewModelHome(navigation);

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
                    <ComponentHome.InputScreach input={viewModel.search} event={viewModel.setSearch} />
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
                    {viewModel.dataProductHorizontal.length > 0 ?
                        (viewModel.dataProductHorizontal.map((item) => (
                            <ProductHozirontalItem key={item._id} _id={item._id} image={item.image} name={item.name} idCategory={item.idCategory} price={item.price} navigation={navigation} />
                        )))
                        :
                        (<Text>Không có dữ liệu</Text>)
                    }
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

                {viewModel.dataProductVertical.length > 0 ? (
                    viewModel.dataProductVertical.map((item) => (
                        <ProductVerticalItem key={item._id} _id={item._id} image={item.image} name={item.name} idCategory={item.idCategory} price={item.price} navigation={navigation} />
                    )))
                    :
                    (<Text>Không có dữ liệu</Text>)
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