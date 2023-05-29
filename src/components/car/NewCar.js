import React, { useEffect, useState } from "react";
import { carsCollections } from "./carCollections";
import { useDispatch, useSelector } from "react-redux";
import { getCarCatalogs } from "../../actions/Car";

const NewCar = () => {
    const [car, setCar] = useState([{
        brand: "",
        model: "",
        year: "",
        price: "",
        image: "",
        description: "",
        fuel: "",
        kmDriven: "",
        owners: "",
        transmission: "",
        location: "",
        name: "",
        contactNumber: "",
        email: "",
        actualPrice: "",
    }]);

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     const bankData = async () => {
    //         dispatch(getCarCatalogs());
    //     }
    //     bankData();
    //     // const carsColl = carsCollections
    //     // setCar(carsColl);
    // }, []);
    // const carCatalog = useSelector(state => state.Car);
    // console.log(carCatalog);
    
    return (
        <div className="az-content pd-y-20 pd-lg-y-30 pd-xl-y-40">
            <div className="container">
                <div className="az-content-body pd-lg-l-40 d-flex flex-column">
                    <div className="row product-item-wrapper">
                        {car.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12 product-item">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="action-holder">
                                                <div className="sale-badge bg-success">New</div>
                                                <span className="favorite-button"><i className="typcn typcn-heart-outline"></i></span>
                                            </div>
                                            <div className="product-img-outer">
                                                <img className="product_image" src={item.image} alt="product_image" />
                                            </div>
                                            <p className="product-title">{item.year} {item.brand} {item.model}</p>
                                            <p className="product-price">₹ {item.price} Lakh</p>
                                            <p className="product-actual-price">{item.actualPrice}</p>
                                            <ul className="product-variation">
                                                <li><a href="#">{item.kmDriven}</a></li>
                                                <li><a href="#">{item.fuel}</a></li>
                                                <li><a href="#">{item.transmission}</a></li>
                                            </ul>
                                            <p className="card-product-description">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCar;