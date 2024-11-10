import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ProductService from '../../service/Product.Sevice'; // Giả sử bạn đã tạo một service để gọi API
import ComponentHome from '@component/Component_Home';

const ScreenSearch = ({ navigation }: any) => {
    const [search, setSearch] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);  // Dữ liệu hiển thị
    const [favouriteProducts, setFavouriteProducts] = useState<{ [key: string]: boolean }>({});

    // Hàm gọi API tìm kiếm sản phẩm
    const handleSearch = async (name: string) => {
        setSearch(name);

        if (name) {
            try {
                // Gọi API tìm kiếm từ ProductService
                const response = await ProductService.searchProduct(name);
                // Cập nhật danh sách sản phẩm tìm thấy
                setFilteredProducts(response.products || []);
            } catch (error) {
                console.error('Error searching products:', error);
                setFilteredProducts([]);  // Trường hợp có lỗi khi tìm kiếm
            }
        } else {
            // Nếu không có từ khóa tìm kiếm, hiển thị tất cả sản phẩm
            setFilteredProducts([]);
        }
    };

    const toggleFavourite = (id: string) => {
        setFavouriteProducts((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('@images/ic_back.png')} style={styles.icback} />
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
                            <Image source={{ uri: item.image }} style={styles.productImage} />
                            <View style={{ width: '100%', marginLeft: 10, justifyContent: 'space-between' }}>
                                <View style={styles.productInfo}>
                                    <View>
                                        <Text style={styles.productName}>{item.name}</Text>
                                        <Text>{item.category}</Text>  {/* Ví dụ thêm thông tin thể loại */}
                                    </View>
                                    <View style={{ width: '72%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={styles.productPrice}>{item.price}</Text>
                                        <TouchableOpacity onPress={() => toggleFavourite(item.id)}>
                                            {favouriteProducts[item.id] ? (
                                                <Image source={require('@images/icon_showFavourite.png')} style={{ width: 20, height: 20 }} />
                                            ) : (
                                                <Image source={require('@images/icon_unFavourite.png')} style={{ width: 20, height: 20 }} />
                                            )}
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