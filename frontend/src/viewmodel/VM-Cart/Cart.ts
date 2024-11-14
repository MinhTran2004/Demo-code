import { Cart } from "@model/Model_Cart";
import { Product } from "@model/Model_Product";
import { CartService } from "@service/Cart_Service";
import { useEffect, useState } from "react";

interface TypeCart {
    cart: Cart,
    product: Product,
}

export const ViewModelCart = () => {
    const [data, setData] = useState<TypeCart[]>([]);
    const [total, setToTal] = useState(0);

    // Lấy tất cả sản phẩm trong giỏ hàng
    const getAllProductInCart = async () => {
        const response = await CartService.getAllProductInCart();
        calculate(response);
        setData(response);
    }

    // Cập nhật số lượng sản phẩm
    const updateQuantityById = async (_id: string, quantity: number, status: boolean) => {
        if (status) {
            const response = await CartService.updateQuantityById(_id, quantity + 1);
            if (response) {
                calculate(response);
            }
            setData(response || []);
        } else {
            if (quantity > 1) {
                const response = await CartService.updateQuantityById(_id, quantity - 1);
                if (response) {
                    calculate(response);
                }
                setData(response || []);
            } else {
                console.log('Số lượng tối thiểu là 1');
            }
        }
    }

    // Xóa sản phẩm khỏi giỏ hàng
    const deleteProductById = async (_id: string) => {
        const response = await CartService.deleteProductFromCart(_id);  // Gọi API để xóa sản phẩm
        if (response) {
            // Sau khi xóa, làm mới lại giỏ hàng
            getAllProductInCart();
        }
    }

    // Tính tổng giá trị giỏ hàng
    const calculate = (response: any) => {
        const sum = response.reduce((sum: any, item: any) => {
            return sum + (item.cart.quantity * item.product.price);
        }, 0);
        setToTal(sum);
    }

    useEffect(() => {
        getAllProductInCart();
    }, []);

    return {
        data, total,
        updateQuantityById, deleteProductById, // Trả về hàm xóa
    }
}
