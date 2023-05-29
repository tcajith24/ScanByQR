import React, { useState, useEffect } from "react";

import { menuItems } from "./menuItems";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [click, setClick] = useState("");
    const location = useLocation();
    const [url, setUrl] = useState("");
    useEffect(() => {
        setUrl(window.location.pathname);
    }, [location]);

    const handleClick = (title) => (e) => {
        e.preventDefault();
        if (click === title) {
            return setClick("");
        }
        setClick(title);
    };
    return (
        <ul className="nav">
            {menuItems.map((item, index) => {
                return (
                    <li key={index} className={item.title == click ? (url.indexOf(item.url) > -1 ? "nav-item show active" : "nav-item show") : (url.indexOf(item.url) > -1 ? "nav-item active" : "nav-item")}>
                        {item.submenu.length > 0 ? (
                            <>
                                <a className="nav-link with-sub" onClick={handleClick(item.title)}>
                                    <i className="typcn typcn-chart-area-outline"></i>
                                    {item.title}
                                </a>
                                <div className="az-menu-sub az-menu-sub-mega">
                                    <div className="container">
                                        <>
                                            {item.submenu.map((subitem, index) => {
                                                return (
                                                    subitem.subChildMenu?.length > 0 ? (<div key={index}>
                                                        {subitem.subChildMenu.map((subChildItem, index) => {
                                                            return (
                                                                <nav className="nav" key={index}>
                                                                    {index == 0 && <span>{subitem.scope}</span>}
                                                                    <Link className="nav-link" to={subChildItem.url}>{subChildItem.title}</Link>
                                                                </nav>
                                                            );
                                                        })}
                                                    </div>) : (
                                                        <div key={index}>
                                                            <nav className="nav" key={index}>
                                                                {subitem.scope != "" && <span>{subitem.scope}</span>}
                                                                <Link className="nav-link" to={subitem.url}>{subitem.title}</Link>
                                                            </nav>
                                                        </div>
                                                    )
                                                );
                                            })}
                                        </>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <Link to={item.url} className="nav-link"><i className={item.title == "contact us" ? "typcn typcn-chart-bar-outline" : "typcn typcn-chart-area-outline"}></i>{item.title}</Link>
                        )}
                    </li>
                );
            })}
        </ul>
    )
}

export default Navbar;