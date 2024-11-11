
import { useState, useEffect, useRef } from "react";
import { Dimensions, ScrollView } from "react-native";
import ProductService from "@service/Product.Sevice";

export const ViewModelProduct = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [currentBanner, setCurrentBanner] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);
    const { width: bannerWidth } = Dimensions.get("window"); // lấy bannerWidth từ Dimensions

    const banners = [
        require("@images/logo_demo.jpg"),
        require("@images/logo_app.png"),
        require("@images/logo_demo.jpg")
    ];

    // Lấy tất cả sản phẩm với giới hạn
    const getAllProductByLimit = async () => {
        const response = await ProductService.getAllProductByLimit();
        setData(response?.product || []);
    };

    useEffect(() => {
        getAllProductByLimit();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
        }, 3000); // Chuyển ảnh mỗi 3 giây

        return () => clearInterval(interval); 
    }, []);

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: currentBanner * bannerWidth, animated: true });
        }
    }, [currentBanner]);

    const handleScrollEnd = (event: any) => {
        const position = Math.floor(event.nativeEvent.contentOffset.x / bannerWidth);
        setCurrentBanner(position);
    };

    const getIconColor = (index: number) => {
        return index === currentBanner ? "green" : "gray";
    };

    return {
        data,
        search,
        setSearch,
        banners,
        bannerWidth, 
        scrollViewRef,
        currentBanner,
        handleScrollEnd,
        getIconColor,
    };
};

export default ViewModelProduct;
