import axios from "axios";

class ProductService {
    static url = "http://192.168.1.13:5000/product";

    static getAllProductByLimit = async () => {
        try {
            const reponse = (await axios(`${this.url}/getAllProductByLimit?limit=${20}`)).data;
            return reponse;
        } catch (err) {
            console.log(err);
        }
    }
    // Tìm kiếm sản phẩm theo tên
    static searchProduct = async (name:string) => {
        try {
            // Gửi yêu cầu tìm kiếm với từ khóa 'name'
            const response = (await axios(`${this.url}/searchProduct?name=${name}`)).data;
            return response;
          
        } catch (err) {
            console.log("Lỗi khi tìm kiếm sản phẩm:", err);
        }
    }
}

export default ProductService;