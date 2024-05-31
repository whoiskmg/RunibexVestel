import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fectProductDetails } from "../../api/api";
import ImageGallery from "react-image-gallery";
import Loading from "../loading/Loading.component";

const Product = () => {
    const { productId } = useParams();
    const { isLoading, error, data } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => fectProductDetails(productId),
    });
    if (isLoading) {
        return <Loading />;
    }
    if (error) {
        return "An error has occurred: " + error.message;
    }
    const images = data.Result.ImageSetList[0].ImageList.map((url) => ({
        original: url.Path,
    }));
    const item = data.Result;

    console.log(data);
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-xl-6">
                        <ImageGallery
                            items={images}
                            showThumbnails={true}
                        />
                    </div>
                    <div className="col-xl-6">
                        <div>
                            <h1 className="">{item.DisplayName}</h1>
                            <div className="fs-4 my-2">
                                <i className="bi bi-caret-right-fill text-red" />
                                <span className="text-muted ps-3">
                                    {
                                        item.VisibleAttributeList[0]
                                            .CustomValueText
                                    }
                                </span>
                            </div>
                            <div className="fs-4 my-2">
                                <i className="bi bi-caret-right-fill text-red" />
                                <span className="text-muted ps-3">
                                    {
                                        item.VisibleAttributeList[1]
                                            .CustomValueText
                                    }
                                </span>
                            </div>
                            <div className="fs-4 my-2">
                                <i className="bi bi-caret-right-fill text-red" />
                                <span className="text-muted ps-3">
                                    {
                                        item.VisibleAttributeList[2]
                                            .CustomValueText
                                    }
                                </span>
                            </div>
                            <div className="fs-4 my-2">
                                <i className="bi bi-caret-right-fill text-red" />
                                <span className="text-muted ps-3">
                                    {
                                        item.VisibleAttributeList[3]
                                            .CustomValueText
                                    }
                                </span>
                            </div>
                            <div className="fs-4 my-2">
                                <i className="bi bi-caret-right-fill text-red" />
                                <span className="text-muted ps-3">
                                    {
                                        item.VisibleAttributeList[4]
                                            .CustomValueText
                                    }
                                </span>
                            </div>
                            <h2 className="text-red py-5">
                                {item.ActualPriceToShowOnScreen} TL
                            </h2>
                            <button
                                type="button"
                                className="btn text-white bg-red"
                            >
                                Sepete Ekle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
