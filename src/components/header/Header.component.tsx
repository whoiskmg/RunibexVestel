import vestel from "../../assets/vestel.svg";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="d-flex justify-content-center py-4 ">
            <Link to={"/"}>
                <img
                    src={vestel}
                    alt=""
                    style={{ width: "160px" }}
                    className=""
                />
            </Link>
        </header>
    );
};

export default Header;
