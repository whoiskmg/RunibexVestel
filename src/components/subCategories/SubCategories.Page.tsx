import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fecthSubCategories } from "../../api/api";
import { Link } from "react-router-dom";
import { Key } from "react";
import Loading from "../loading/Loading.component";

function SubCategories() {
    const { categoryId } = useParams();
    const { isLoading, error, data } = useQuery({
        queryKey: ["subCategory", categoryId],
        queryFn: () => fecthSubCategories(categoryId),
    });
    if (isLoading) {
        return <Loading />;
    }
    if (error) {
        return "An error has occurred: " + error.message;
    }
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <h5 className="display-6 text-center fw-bold">
                        {data.Result.CategoryName}
                    </h5>
                    {data.Result.TopCategory.SubCategoryList.map(
                        (item: any, key: Key) => (
                            <div
                                key={key}
                                className="col-sm-6 col-lg-4 col-xl-3"
                            >
                                <Link
                                    className="text-decoration-none fw-bold"
                                    to={`/products/${item.ID}`}
                                >
                                    <div className="card subCategory-card mt-5">
                                        <div className="card-head subCategory-card-head">
                                            <img
                                                src={
                                                    !item.ImageUri
                                                        ? "/src/assets/vestel-loader.gif"
                                                        : item.ImageUri
                                                }
                                                className="card-img-top"
                                                alt={item.DisplayName}
                                            />
                                        </div>
                                    </div>
                                    <div className="card-text title my-3 text-center  text-black">
                                        {item.DisplayName}
                                    </div>
                                </Link>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default SubCategories;
