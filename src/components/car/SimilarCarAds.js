import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarCatalogs } from '../../actions/Car';
import defaultImage from "../../images/default_car.jpg";
var _ = require('lodash');

const SimilarCarAds = ({ carItem }) => {
    const dispatch = useDispatch();
    const [carColl, setCarColl] = useState([]);
    useEffect(() => {
        const bankData = async () => {
            dispatch(getCarCatalogs());
        }
        bankData();
        // setCarColl(carCatalog);
    }, []);

    const carCatalog = useSelector(state => state.Car);
    console.log(carCatalog);
    useEffect(() => {
        // setCarColl(carCatalog);
        if (carCatalog.length > 0) {
            //filter car catalog by car brand
            const filterColl = _.filter(carCatalog, function (o) {
                return o.brand === carItem.brand && o.carSid !== carItem.carSid;
            });
            setCarColl(filterColl);
        }
    }, [carCatalog]);
    console.log(carColl);
    // check given image URL is valid or not and return default image if not valid
    const checkImageURL = (imageURL) => {
        let image = new Image();
        image.src = imageURL;
        if (image.height === 0) {
            return defaultImage;
        } else {
            return imageURL;
        }
    }

    const getPriceInLakhFormat = (price, isDigitONly = false) => {
        let priceInLakh = price.replace(/[^0-9]/g, "");

        let priceInLakhFormat = priceInLakh.slice(0, -5) + "." + priceInLakh.slice(-5, -3) + " Lakh";
        if (isDigitONly) {
            return priceInLakh.slice(0, -5) + "." + priceInLakh.slice(-5, -3);
        }
        return priceInLakhFormat;
    }
    if (carColl.length == 0) {
        return null;
    }
    return (
        <div>
            <div className='page-header'>
                <h2 className='az-content-title tx-18 mg-b-5'>Similar Car Ads</h2>
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12 col-12 product-item'>
                <div className='row product-item-wrapper'>
                    {carColl.map((item, index) => (
                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 product-item' key={index}>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className="action-holder">
                                        <div className='sale-badge bg-success'>New</div>
                                        <span className='favorite-button'><i className='typcn typcn-heart-outline'></i></span>
                                    </div>
                                    <div className='product-img-outer'>
                                        <img src={checkImageURL(item.thumbnailUrl)} alt='Product Image' className='product_image' />
                                    </div>
                                    <a href={"/car/car-detail/" + item.carSid} target="_blank"><p className="product-title">{item.registrationYear} {item.title}</p></a>
                                    <p className="product-price">₹ {getPriceInLakhFormat(item.finalPrice)}</p>
                                    <p className="product-actual-price">{getPriceInLakhFormat(item.price)}</p>
                                    <ul className="product-variation">
                                        <li><a href="#">{item.kmDriven}</a></li>
                                        <li><a href="#">{item.fuelType}</a></li>
                                        <li><a href="#">{item.transmission}</a></li>
                                    </ul>
                                    <p className="card-product-description">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SimilarCarAds;