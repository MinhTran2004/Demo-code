import ComponentHome from '@component/Component_Home';
import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

//Dữ liệu test
const products = [
    { id: '1', name: 'Pizza thập cẩm', price: '$55.000', image: require('@images//image_product_demo.png') },
    { id: '2', name: 'Pizza bò', price: '$50.000', image: require('@images//image_product_demo.png') },
    { id: '3', name: 'Vegetarian Noodles', price: '$23.000', image: require('@images/image_product_demo.png') },
    { id: '4', name: 'Mixed Salad BonBum', price: '$32.000', image: require('@images/image_product_demo.png') },
];

const ScreenSearch = ({ navigation }: any) => {
    const [search, setSearch] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [favourite, setFavourite] = useState(false);

    const handleSearch = (text: string) => {
        setSearch(text);
        if (text) {
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('@images//ic_back.png')} style={styles.icback} />
                </TouchableOpacity>

                <View style={{ flex: 1 }}>
                    <ComponentHome.InputScreach input={search} event={handleSearch} />
                </View>
            </View>

            {search.length > 0 && filteredProducts.length === 0 ? (
                <Text style={styles.noProductText}>Không có sản phẩm cần tìm</Text>
            ) : (
                <FlatList
                    data={filteredProducts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate("DetailProduct")}>
                            <Image source={item.image} style={styles.productImage} />
                            <View style={{ width: '100%', marginLeft: 10, justifyContent: 'space-between' }}>
                                <View style={styles.productInfo}>
                                    <View>
                                        <Text style={styles.productName}>{item.name}</Text>
                                        <Text>Hambuger</Text>
                                    </View>
                                    <View style={{ width: '72%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={styles.productPrice}>{item.price}</Text>
                                        <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                                            {favourite ?
                                                (<Image source={require('@images/icon_showFavourite.png')} style={{ width: 20, height: 20 }} />)
                                                :
                                                (<Image source={require('@images/icon_unFavourite.png')} style={{ width: 20, height: 20 }} />)
                                            }
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    searchHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    icback: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    noProductText: {
        textAlign: 'center',
        color: '#a0a0a0',
        fontSize: 16,
    },
    productItem: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 15,
    },
    productImage: {
        width: 90,
        height: 90,
        borderRadius: 10
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    productPrice: {
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
        marginTop: 5
    },
});

export default ScreenSearch;
