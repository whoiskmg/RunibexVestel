import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/api";
import { Key } from "react";
import Loading from "../loading/Loading.component";

const ProductsPage = () => {
    const { productsId } = useParams();
    const { isLoading, error, data } = useQuery({
        queryKey: ["subProducts", productsId],
        queryFn: () => fetchProducts(productsId),
    });
    if (isLoading) {
        return <Loading />;
    }
    if (error) {
        return "An error has occurred: " + error.message;
    }
    return (
        <div className="my-5">
            <h5 className="display-6 text-center fw-bold">
                {data.Result.CategoryName}
            </h5>
            <div className="container">
                <div className="row">
                    {data.Result.ProductList.map((item: any, key: Key) => (
                        <div
                            key={key}
                            className="col-sm-6 col-lg-4 col-xl-3"
                        >
                            <div className="card product-card my-5">
                                <div className="card-head text-center fw-bold">
                                    <img
                                        src={
                                            item.FirstProductImageURL
                                                ? item.FirstProductImageURL
                                                : "/src/assets/vestel-loader.gif"
                                        }
                                        className="card-img-top"
                                        alt={item.DisplayName}
                                    />
                                    <div className="card-text p-1">
                                        {item.DisplayName}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-muted text-center  pb-1">
                                        {item.AttributeList[0].DisplayName}
                                    </p>

                                    <h4 className="fw-bold text-center">
                                        {item.StrikeThroughPriceToShowOnScreen}
                                        TL
                                    </h4>
                                </div>
                                <div className="d-flex justify-content-center pb-2">
                                    <Link to={`product-detail/${item.ID}`}>
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger btn-lg"
                                        >
                                            Detaylar
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
