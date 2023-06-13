import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BikeCatalog } from "../../actions/Bike.js";
import defaultImage from "../../images/default_car.jpg";

const UsedBike = () => {
    const [bikeColl, setBikeColl] = useState([]);
    const dispatch = useDispatch();
    const initialValues = {
        priceRange: "1-5",
        brand: "Maruti Suzuki",
        year: "2015",
        kmsDriven: "50000",
        fuelType: "Petrol",
        bodyType: "Hatchback",
        transmission: "Manual",
        owner: "1st Owner",
    };
    const [values, setValues] = useState(initialValues);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
        console.log(values);
    };

    const bikeCatalog = useSelector(state => state.Bike);
    console.log(bikeCatalog);

    useEffect(() => {
        const bankData = async () => {
           await dispatch(BikeCatalog());
        }
        bankData();
        setBikeColl(bikeCatalog);
    }, [dispatch]);

    useEffect(() => {
        if (bikeCatalog) {
            const filterData = bikeCatalog.filter((bike) => {
                if (values.priceRange === "1-5") {
                    console.log(getPriceInThousandsFormat(bike.finalPrice, true));
                    if (getPriceInThousandsFormat(bike.finalPrice, true) > 1 && getPriceInThousandsFormat(bike.finalPrice, true) <= 5) {
                        return true;
                    }
                } else if (values.priceRange === "5-10") {
                    if (getPriceInThousandsFormat(bike.finalPrice, true) > 5 && getPriceInThousandsFormat(bike.finalPrice, true) <= 10) {
                        return true;
                    }
                } else if (values.priceRange === "10-15") {
                    if (getPriceInThousandsFormat(bike.finalPrice, true) > 10 && getPriceInThousandsFormat(bike.finalPrice, true) <= 15) {
                        return true;
                    }
                } else if (values.priceRange === "15-20") {
                    if (getPriceInThousandsFormat(bike.finalPrice, true) > 15 && getPriceInThousandsFormat(bike.finalPrice, true) <= 20) {
                        return true;
                    }
                } else if (values.priceRange === "20-50") {
                    if (getPriceInThousandsFormat(bike.finalPrice, true) > 20 && getPriceInThousandsFormat(bike.finalPrice, true) <= 50) {
                        return true;
                    }
                } else if (values.priceRange === "50-100") {
                    if (getPriceInThousandsFormat(bike.finalPrice, true) > 50 && getPriceInThousandsFormat(bike.finalPrice, true) < 100) {
                        return true;
                    }
                } else if (values.priceRange === "100") {
                    if (getPriceInThousandsFormat(bike.finalPrice, true) >= 100) {
                        return true;
                    }
                } else {
                    return false;
                }

                if (values.brand !== bike.brand) return false;
                if (values.year !== bike.year) return false;
                if (values.kmsDriven !== bike.kmsDriven) return false;
                if (values.fuelType !== bike.fuelType) return false;
                if (values.bodyType !== bike.bodyType) return false;
                if (values.transmission !== bike.transmission) return false;
                return true;
            });
            console.log(filterData);
        }
    }, [values]);

    const getPriceInThousandsFormat = (price) => {
        let priceInThousands = price.replace(/[^0-9]/g, "");
        let priceInThousandsFormat = priceInThousands.slice(0, -3) + "," + priceInThousands.slice(-3);
        return priceInThousandsFormat; 
    }

    // check given image URL is valid or not and return default image if not valid
    function checkImageURL(imageURL) {
        let image = new Image();
        image.src = imageURL;
        if (image.height === 0) {
            return defaultImage;
        } else {
            return imageURL;
        }
    }

    console.log(bikeColl);

    if (bikeCatalog.length === 0) {
        return null;
    }
    return (
        <div className="az-content pd-y-20 pd-lg-y-30 pd-xl-y-40">
            <div className="container">
                <div className="az-content-left az-content-left-components">
                    <div className="component-item">
                        <label>Price Range</label>
                        <select className="form-control" name="priceRange" onChange={handleChange}>
                            <option className="nav-link" value={"1-5"}>₹ 1 Lakh - ₹ 5 Lakh</option>
                            <option className="nav-link" value={"5-10"}>₹ 5 Lakh - ₹ 10 Lakh</option>
                            <option className="nav-link" value={"10-20"}>₹ 10 Lakh - ₹ 20 Lakh</option>
                            <option className="nav-link" value={"20-50"}>₹ 20 Lakh - ₹ 50 Lakh</option>
                            <option className="nav-link" value={"50-100"}>₹ 50 Lakh - ₹ 1 Crore</option>
                            <option className="nav-link" value={"100"}>₹ 1 Crore & Above</option>
                        </select>
                        <label>Brands + Models</label>
                        <select className="form-control" name="brand" onChange={handleChange}>
                            <option className="nav-link" value={"Maruti Suzuki"}>Maruti Suzuki</option>
                            <option className="nav-link" value={"Hyundai"}>Hyundai</option>
                            <option className="nav-link" value={"Honda"}>Honda</option>
                            <option className="nav-link" value={"Toyota"}>Toyota</option>
                            <option className="nav-link" value={"Mahindra"}>Mahindra</option>
                            <option className="nav-link" value={"Tata"}>Tata</option>
                            <option className="nav-link" value={"Ford"}>Ford</option>
                            <option className="nav-link" value={"Renault"}>Renault</option>
                            <option className="nav-link" value={"Volkswagen"}>Volkswagen</option>
                            <option className="nav-link" value={"Nissan"}>Nissan</option>
                            <option className="nav-link" value={"Skoda"}>Skoda</option>
                            <option className="nav-link" value={"Datsun"}>Datsun</option>
                            <option className="nav-link" value={"Jeep"}>Jeep</option>
                            <option className="nav-link" value={"MG"}>MG</option>
                            <option className="nav-link" value={"Mercedes-Benz"}>Mercedes-Benz</option>
                            <option className="nav-link" value={"BMW"}>BMW</option>
                            <option className="nav-link" value={"Audi"}>Audi</option>
                            <option className="nav-link" value={"Volvo"}>Volvo</option>
                            <option className="nav-link" value={"Jaguar"}>Jaguar</option>
                            <option className="nav-link" value={"Land Rover"}>Land Rover</option>
                            <option className="nav-link" value={"Porsche"}>Porsche</option>
                        </select>
                        <label>Year</label>
                        <select className="form-control" name="year" onChange={handleChange}>
                            <option className="nav-link" value={"2012"}>2012 & Above</option>
                            <option className="nav-link" value={"2014"}>2014 & Above</option>
                            <option className="nav-link" value={"2016"}>2016 & Above</option>
                            <option className="nav-link" value={"2018"}>2018 & Above</option>
                            <option className="nav-link" value={"2020"}>2020 & Above</option>
                            <option className="nav-link" value={"2022"}>2022 & Above</option>
                        </select>
                        <label>Kms Driven</label>
                        <select className="form-control" name="kmsDriven" onChange={handleChange}>
                            <option className="nav-link" value={"0-20,000"}>0 - 20,000</option>
                            <option className="nav-link" value={"20,000 - 50,000"}>20,000 - 50,000</option>
                            <option className="nav-link" value={"20,000 - 50,000"}>20,000 - 50,000</option>
                            <option className="nav-link" value={"20,000 - 50,000"}>20,000 - 50,000</option>
                            <option className="nav-link" value={"1 Lakh & Above"}>1 Lakh & Above</option>
                        </select>
                        <label>Fuel Type</label>
                        <select className="form-control" name="fuelType" onChange={handleChange}>
                            <option className="nav-link" value={"Petrol"}>Petrol</option>
                            <option className="nav-link" value={"Diesel"}>Diesel</option>
                            <option className="nav-link" value={"CNG & Hybrids"}>CNG & Hybrids</option>
                            <option className="nav-link" value={"LPG"}>LPG</option>
                            <option className="nav-link" value={"Electric"}>Electric</option>
                        </select>
                        <label>Body Type</label>
                        <select className="form-control" name="bodyType" onChange={handleChange}>
                            <option className="nav-link" value={"Hatchback"}>Hatchback</option>
                            <option className="nav-link" value={"Sedan"}>Sedan</option>
                            <option className="nav-link" value={"SUV"}>SUV</option>
                            <option className="nav-link" value={"MUV"}>MUV</option>
                            <option className="nav-link" value={"Convertible"}>Convertible</option>
                            <option className="nav-link" value={"Coupe"}>Coupe</option>
                            <option className="nav-link" value={"Minivan"}>Minivan</option>
                            <option className="nav-link" value={"Pickup Truck"}>Pickup Truck</option>
                        </select>
                        <label>Transmission</label>
                        <select className="form-control" name="transmission" onChange={handleChange}>
                            <option className="nav-link" value={"Manual"}>Manual</option>
                            <option className="nav-link" value={"Automatic"}>Automatic</option>
                        </select>
                        <label>Owner</label>
                        <select className="form-control" onChange={handleChange} name="owner">
                            <option className="nav-link" value={"First Owner"}>First Owner</option>
                            <option className="nav-link" value={"Second Owner"}>Second Owner</option>
                            <option className="nav-link" value={"Third Owner"}>Third Owner</option>
                            <option className="nav-link" value={"Fourth Owner"}>Fourth Owner</option>
                        </select>
                    </div>
                </div>
                <div className="az-content-body pd-lg-l-40 d-flex flex-column">
                    <div className="row product-item-wrapper">
                        {bikeColl.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12 product-item">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="action-holder">
                                                <div className="sale-badge bg-warning">Used</div>
                                                <span className="favorite-button"><i className="typcn typcn-heart-outline"></i></span>
                                            </div>
                                            <div className="product-img-outer">
                                                <img className="product_image" src={checkImageURL(item.thumbnailUrl)} alt="product_image" />
                                            </div>
                                            <a href={"/bike/bike-detail/" + item.bikeSid} target="_blank"><p className="product-title">{item.registrationYear} {item.title}</p></a>
                                            <p className="product-price">₹ {getPriceInThousandsFormat(item.finalPrice)}</p>
                                            <p className="product-actual-price">{getPriceInThousandsFormat(item.price)}</p>
                                            <ul className="product-variation">
                                                <li><a href="#">{item.kmDriven}</a></li>
                                                <li><a href="#">{item.fuelType}</a></li>
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

export default UsedBike;