import {Link} from "react-router-dom"
import { Key } from "react";
const HamburgerMenu = ({ data }: any) => {
    
    console.log(data);
    return (
        <div className="container-fluid container position-relative">
            <div className="row flex-nowrap">
                <div className="col-sm-auto bg-red sticky-top position-absolute">
                    <div className=" flex-sm-column flex-row flex-nowrap bg-red sticky-top">
                        {data.Result.TreeList?.map((item: any,key: Key) => (
                            <ul key={key} className="sidenav-menu list-unstyled flex">
                                {item.DisplayOrder > 0 && (
                                <li className="sidenav-item">
                                    <Link className="sidenav-link" to={`/category/${item.ID}`}>
                                        <button className="btn text-white category">
                                        {item.DisplayName}

                                        </button>
                                        <button className="btn text-white" >
                                            <i
                                className="bi bi-plus-lg"

                            />
                                        </button>
                                    </Link>
                                    {item.SubCategoryList.map((subItem:any , subKey: Key ) => (
                                        
                                    <ul key={subKey} className="list-unstyled ps-4 ">
                                        <li>
                                            <Link to={`/products/${subItem.ID}`}>
                                                <button className="btn text-white subCategory">
                                                {subItem.DisplayName}
                                                </button>
                                            </Link>
                                        </li>
                                    </ul>
                                    ))}
                                </li>
                                )}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
        
    );
};

export default HamburgerMenu;
