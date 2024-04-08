import { Key } from "react";
import { Link } from "react-router-dom";
const Categories = ({ data }: any) => {
    return (
        <div className="container my-5">
            <div className="row">
                {data.Result.TreeList.map(
                    (item: any, key: Key) =>
                        item.DisplayOrder > 0 && (
                            <div
                                key={key}
                                className="col-sm-6 col-lg-4 col-xl-3"
                            >
                                <Link
                                    to={`/category/${item.ID}`}
                                    className=" text-decoration-none fw-bold"
                                >
                                    <div className="card mt-5">
                                        <div className="card-head">
                                            <img
                                                src={
                                                    item.ImageUri === ""
                                                        ? "/src/assets/vestel-loader.gif"
                                                        : item.ImageUri
                                                }
                                                className="card-img-top br-red"
                                                alt={item.Code}
                                            />
                                        </div>
                                    </div>
                                    <div className="card-text my-3 text-center  text-black">
                                        {item.DisplayName}
                                    </div>
                                </Link>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default Categories;
