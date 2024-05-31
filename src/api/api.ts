import axios from "axios";
//.env kullandigimda garip bir hata ile karsilastim o yuzden kullanmadim
export const fecthCategories = async () => {
    const { data } = await axios.get(
        `https://store.vrunibex.com/mobile2/mbProduct/CategoryList`
    );
    return data;
};
export const fecthSubCategories = async (id: any) => {
    const { data } = await axios.get(
        `https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=${id}`
    );
    return data;
};
export const fetchProducts = async (id: string | undefined) => {
    const { data } = await axios.get(
        `https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=${id}`
    );
    return data;
};
export const fectProductDetails = async (id: string | undefined) => {
    const { data } = await axios.get(
        `https://store.vrunibex.com/mobile2/mbProduct/ProductDetail?productId=${id}`
    );
    return data;
};
