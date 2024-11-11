import { Cart } from "@model/Model_Cart";
import { Product } from "@model/Model_Product";
import { CartService } from "@service/Cart_Service";
import { useEffect, useMemo, useState } from "react";

interface TypeCart {
    cart: Cart,
    product: Product,
}

export const ViewModelCart = () => {
    const [data, setData] = useState<TypeCart[]>([])
    const [total, setToTal] = useState(0);

    const getAllProductInCart = async () => {
        const reponse = await CartService.getAllProductInCart();

        const sum = reponse.reduce((sum, item) => {
            return sum + (item.cart.quantity * item.product.price);
        }, 0)

        setToTal(sum);
        setData(reponse);
    }

    const updateQuantityById = async (_id: string, quantity: number, status: boolean) => {
        if (status) {
            const reponse = await CartService.updateQuantityById(_id, quantity + 1);
            if (reponse) {
                const sum = reponse.reduce((sum, item) => {
                    return sum + (item.cart.quantity * item.product.price);
                }, 0)
                setToTal(sum);
            }
            setData(reponse || []);
        } else {
            if (quantity > 1) {
                const reponse = await CartService.updateQuantityById(_id, quantity - 1);
                if (reponse) {
                    const sum = reponse.reduce((sum, item) => {
                        return sum + (item.cart.quantity * item.product.price);
                    }, 0)
                    setToTal(sum);
                }
                setData(reponse || []);
            } else {
                console.log('Số lượng tối thiều là 1');
            }
        }
    }

    useEffect(() => {
        getAllProductInCart();
    }, []);

    return {
        data, total,
        updateQuantityById,
    }
}