import CartModel, { Cart } from "@model/Model_Cart";
import axios from "axios";
import ProductService from "./Product_Sevice";

export class CartService {
    static url = "http://192.168.1.13:5000/cart";

    static addProductToCart = async (data: CartModel) => {
        try {
            const reponse = (await axios.post(`${this.url}/addProductToCart`, data)).data;
            return reponse;
        } catch (err) {
            console.log(err);
        }
    }

    static getAllProductInCart = async () => {
        try {
            const reponse = (await axios.get(`${this.url}/getAllProductInCart?limit=${30}`)).data;
            if (reponse) {
                const promises = await reponse.map(async (item: Cart) => {
                    const product = await ProductService.getProductById(item.idProduct);
                    return { cart: item, product };
                });
                const promise = await Promise.all(promises);
                return promise;
            } else {
                return [];
            }
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    static updateQuantityById = async (id: string, quantity: number) => {
        try {
            const reponse = (await axios.patch(`${this.url}/updateQuantityById`,{
                id: id,
                quantity: quantity
            }));

            if(reponse){
                return await this.getAllProductInCart();
            }else{
                console.log('Lỗi thay đổi số lượng');
                return [];
            }
        } catch (err) {
            console.log(err);
        }
    }
    static deleteProductFromCart = async (id: string) => {
        try {
            const response = await axios.delete(`${this.url}/deleteProductFromCart/${id}`);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
    
}