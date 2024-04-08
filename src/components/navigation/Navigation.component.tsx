import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu.component";

const Navigation = ({data}:any) => {
    const [Clicked, setClicked] = useState(false);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-red">
                <div className="container">
                    <div>
                        <button
                            className="btn fw-bold text-white btn-lg "
                            onClick={() => {
                                setClicked(!Clicked);
                            }}
                        >
                            <i
                                className={
                                    Clicked
                                        ? "bi bi-chevron-down pe-md-2"
                                        : "bi bi-list pe-md-2"
                                }
                            />
                            <span className="d-none d-md-inline ">
                                Tüm Ürünler
                            </span>
                        </button>
                        <button className="btn fw-bold text-white btn-lg">
                            <i className="bi bi-search pe-2 " />
                            <span className="d-none d-md-inline ">
                                Ürün Ara
                            </span>
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-lg text-white fw-bold">
                            <span>Kampanyalar</span>
                        </button>
                        <button className="btn btn-lg text-white fw-bold">
                            <i className="bi bi-bag" />
                        </button>
                    </div>
                </div>
            </nav>
            {Clicked && <HamburgerMenu data={data}/>}
        </div>
    );
};

export default Navigation;
