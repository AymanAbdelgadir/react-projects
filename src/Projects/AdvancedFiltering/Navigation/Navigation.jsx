import "./Navigation.css"
import {FiHeart } from "react-icons/fi";
import {AiOutlineShoppingCart , AiOutlineUser} from "react-icons/ai";

const Navigation = () => {
    return (
        <nav>
            <div className="nav-container">
                <input type="text" className="Search-input" placeholder="Search by name" />

            </div>
            <div className="profile-container">
                <a href="#" className="nav-icons"><FiHeart /></a>
                <a href="#" className="nav-icons"><AiOutlineShoppingCart /></a>
                <a href="#" className="nav-icons"><AiOutlineUser /></a>
            </div>
        </nav>
    );
};

export default Navigation;