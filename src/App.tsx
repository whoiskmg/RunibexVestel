import { useQuery } from "@tanstack/react-query";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navigation from "./components/navigation/Navigation.component";
import Categories from "./components/categories/Categories.Page";

import { fecthCategories } from "./api/api";
import SubCategory from "./components/subCategories/SubCategories.Page";
import ProductsPage from "./components/productsPage/Products.Page";
import Product from "./components/productPage/Product.Page";
import Loading from "./components/loading/Loading.component";

function App() {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ["categories"],
        queryFn: fecthCategories,
    });
    if (isPending) {
        return <Loading />;
    }
    if (isError) {
        return <span>Error: {error.message}</span>;
    }
    return (
        <>
            <Navigation data={data} />
            <Routes>
                <Route
                    path="/"
                    element={<Categories data={data} />}
                />
                <Route
                    path="/category/:categoryId"
                    element={<SubCategory />}
                />
                <Route
                    path="/products/:productsId"
                    element={<ProductsPage />}
                />
                <Route
                    path="/products/:product_id/product-detail/:productId"
                    element={<Product />}
                />
            </Routes>
        </>
    );
}

export default App;
