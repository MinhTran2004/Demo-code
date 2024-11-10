import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, Dimensions, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import ComponentHome from "@component/Component_Home";
import ViewModelProduct from "@viewmodel/VM_Product";

export default function ScreenHome({ navigation }: any) {
    const [search, setSearch] = useState("");
    const [currentBanner, setCurrentBanner] = useState(0);
    const { width: bannerWidth } = Dimensions.get("window");
    const scrollViewRef = useRef<ScrollView>(null);
    const viewModel = ViewModelProduct(navigation);

    const banners = [
        require("@images/logo_demo.jpg"),
        require("@images/logo_app.png"),
        require("@images/logo_demo.jpg")
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
        }, 3000); // Chuyển ảnh mỗi 3 giây

        return () => clearInterval(interval); // Xóa interval khi component unmount
    }, []);

    useEffect(() => {
        // Tự động chuyển ảnh khi currentBanner thay đổi
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: currentBanner * bannerWidth, animated: true });
        }
    }, [currentBanner]);

    const handleScrollEnd = (event: any) => {
        // Xác định vị trí banner hiện tại sau khi cuộn
        const position = Math.floor(event.nativeEvent.contentOffset.x / bannerWidth);
        setCurrentBanner(position);
    };

    const getIconColor = (index: number) => {
        return index === currentBanner ? 'green' : 'gray';
    };

    return (
        <ScrollView>
            <View style={styles.main}>
                {/* Header */}
                <View style={styles.container_header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require("@images/user.png")} style={{ width: 45, height: 45 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[styles.text_header, { fontWeight: "normal", color: '#8c8d8e' }]}>Thành viên</Text>
                            <Text style={styles.text_header}>Trần Công Minh</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <View style={styles.icon_header}>
                            <Image source={require("@images/cart.png")} style={{ width: 30, height: 30 }} />
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <ComponentHome.InputScreach input={search} event={setSearch} />
                </TouchableOpacity>

                {/* Banner */}
                <ScrollView
                    ref={scrollViewRef}
                    horizontal
                    pagingEnabled
                    onMomentumScrollEnd={handleScrollEnd} // Cập nhật vị trí khi cuộn xong
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16} // Giúp theo dõi cuộn mượt mà
                >
                    {banners.map((banner, index) => (
                        <Image key={index} source={banner} style={{ width: bannerWidth, height: 180 }} />
                    ))}
                </ScrollView>

                {/* Icons biểu tượng slide */}
                <View style={styles.iconContainer}>
                    {banners.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.iconDot,
                                { backgroundColor: getIconColor(index) }
                            ]}
                        />
                    ))}
                </View>
                <ComponentHome.TextTitle text={"Special Offers"} />

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_hambuger.png")} text={"Hambuger"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_pizza.png")} text={"Pizza"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_noodles.png")} text={"Noodles"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_chicken.png")} text={"Chicken"} />
                </View>

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_potato.png")} text={"Potato"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_drink.png")} text={"Drink"} />
                    <ComponentHome.SelectCategoryProductVertical navigation={navigation} icon={require("@images/icon_cake.png")} text={"Dessert"} />
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
                            return <ComponentHome.ProductVertical product={item} navigation={navigation} key={index} />
                        })
                    ) : (
                        <Text>No data available</Text>
                    )
                }
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#f6f6f7',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
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
    img_body: {
        width: 300, // Chiều rộng của banner, điều chỉnh phù hợp nếu cần
        height: 180,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    iconDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
});