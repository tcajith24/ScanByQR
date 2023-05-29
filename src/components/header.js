import React, {useState} from "react";
import 'typicons.font/src/font/typicons.css';
import 'ionicons/dist/ionicons.js';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import face1 from "../images/faces/face1.jpg";

const Header = () => {
    const [click, setClick] = useState("");
    const handleClick = (title) => (e) => {
        console.log(title);
        e.preventDefault();
        if (click === title) {
            return setClick("");
        }
        setClick(title);
    }
    return (
        <div className="az-header">
            <div className="container">
                <div className="az-header-left">
                    <Link to={"/"} className="az-logo"><span></span> SCANBYQR</Link>
                    {/* <a href="index.html" className="az-logo"><span></span> SCANBYQR</a> */}
                    <a href="" id="azMenuShow" className="az-header-menu-icon d-lg-none"><span></span></a>
                </div>
                <div className="az-header-menu">
                    <Navbar />
                </div>
                <div className="az-header-right">

                    <div className={click == "Notification" ? "dropdown az-header-notification show" : "dropdown az-header-notification"}>
                        <a onClick={handleClick("Notification")} className="new"><i className="typcn typcn-bell"></i></a>
                        <div className="dropdown-menu">
                            <div className="az-dropdown-header mg-b-20 d-sm-none">
                                <a href="" className="az-header-arrow"><i className="icon ion-md-arrow-back"></i></a>
                            </div>
                            <h6 className="az-notification-title">Notifications</h6>
                            <div className="az-notification-list">
                                <div className="media">
                                    <div className="az-img-user"><img src={face1} alt=""/></div>
                                    <div className="media-body">
                                        <p><strong>Adrian Monino</strong> added new comment on your photo</p>
                                        <span>Mar 12 10:40pm</span>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-footer"><a href="">View All Notifications</a></div>
                        </div>
                    </div>
                    <div className={click == "Profile" ? "dropdown az-profile-menu show" : "dropdown az-profile-menu"}>
                        <a onClick={handleClick("Profile")} className="az-img-user"><img src={face1} alt="" /></a>
                        <div className="dropdown-menu">
                            <div className="az-dropdown-header d-sm-none">
                                <a href="" className="az-header-arrow"><i className="icon ion-md-arrow-back"></i></a>

                            </div>
                            <div className="az-header-profile">
                                <div className="az-img-user">
                                    <img src={face1} alt="" />
                                </div>
                                <h6>Aziana Pechon</h6>
                                <span>Premium Member</span>
                            </div>

                            <a href="" className="dropdown-item"><i className="typcn typcn-user-outline"></i> My Profile</a>
                            <a href="" className="dropdown-item"><i className="typcn typcn-edit"></i> Edit Profile</a>
                            <a href="" className="dropdown-item"><i className="typcn typcn-time"></i> Activity Logs</a>
                            <a href="" className="dropdown-item"><i className="typcn typcn-cog-outline"></i> Account Settings</a>
                            <a href="page-signin.html" className="dropdown-item"><i className="typcn typcn-power-outline"></i> Sign Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;