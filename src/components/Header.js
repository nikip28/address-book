import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper" style={{marginLeft:'10px'}}>
                    <Link to = "/" className="left brand-logo">
                        Address Book
                    </Link>
                </div>
            </nav>   
        );
    }
}

export default Header;