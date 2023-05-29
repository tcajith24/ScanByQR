import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getEAuctionBike } from '../../actions/Car';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import EAuctionVehicle from './eAuctionVehicle';

const EAuctionBike = () => {
    const [bank, setBank] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const bankData = async () => {
            dispatch(getEAuctionBike());
        }
        bankData();
    }, []);
    const { eAuctionBike } = useSelector(state => state.Car);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

    // const openAuction = (urlStr) => {
    //     navigate(`/eAuctionBikeDetail/${urlStr}`);
    // }

    useEffect(() => {
        const bankColl = [
            {
                id: 1,
                name: 'SBI Bank',
                city: 'Mumbai',
                branch: 'Mumbai',
                status: 'Active'
            },
            {
                id: 2,
                name: 'HDFC Bank',
                city: 'Delhi',
                branch: 'Delhi',
                status: 'Active'
            },
            {
                id: 3,
                name: 'ICICI Bank',
                city: 'Bangalore',
                branch: 'Bangalore',
                status: 'Active'
            },
            {
                id: 4,
                name: 'Axis Bank',
                city: 'Hyderabad',
                branch: 'Hyderabad',
                status: 'Active'
            },
            {
                id: 5,
                name: 'Kotak Bank',
                city: 'Chennai',
                branch: 'Chennai',
                status: 'Active'
            },
        ]
        setBank(bankColl);
    }, []);
    return (
        <div className='az-content az-content-profile'>
            <div className='container mn-ht-100p'>
                <div className='content-wrapper w-100'>
                    <div className='col-12'>
                        <div className='card-body'>
                            <div className='page-header'>
                                <h3 className='page-title'>Upcoming Bike Auction </h3>
                                <hr className='mg-y-8' />
                            </div>
                            <div className='row grid-margin'>
                                <div className='az-nav-tabs p-0 mb-3' style={{ margin: "0 auto", width: "98%" }}>
                                    <div id='auction' className='col-md-12' style={{ margin: "0 auto", width: "90%" }}>
                                        <Slider {...settings}>
                                            {bank.map((item, index) => (
                                                <div className="tab-item" key={index}>
                                                    <a href={"#azTab" + index} className="tab-link">{item.name}</a>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div className='alert alert-warning' role='alert'>
                                        <strong>Heads up!</strong>
                                        This alert needs your attention, but it's not super important.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row row-sm mg-b-20'>
                            <div className='col-lg-4 mg-t-20 mg-lg-t-0'>
                                <div className='card card-dashboard-four'>
                                    <div className='card-body row'>
                                        <div className='az-form-group'>
                                            <label className='form-label'>Select Bank</label>
                                            <select className='form-control'>
                                                <option value=''>Select Bank</option>
                                                <option value='1'>SBI Bank</option>
                                                <option value='2'>HDFC Bank</option>
                                                <option value='3'>ICICI Bank</option>
                                                <option value='4'>Axis Bank</option>
                                                <option value='5'>Kotak Bank</option>
                                            </select>
                                        </div>
                                        <div className='az-form-group'>
                                            <label className='form-label'>Select City</label>
                                            <select className='form-control'>
                                                <option value=''>Select City</option>
                                                <option value='1'>Mumbai</option>
                                                <option value='2'>Delhi</option>
                                                <option value='3'>Bangalore</option>
                                                <option value='4'>Hyderabad</option>
                                                <option value='5'>Chennai</option>
                                            </select>
                                        </div>
                                        <div className='az-form-group'>
                                            <label className='form-label'>Select Branch</label>
                                            <select className='form-control'>
                                                <option value=''>Select Branch</option>
                                                <option value='1'>Mumbai</option>
                                                <option value='2'>Delhi</option>
                                                <option value='3'>Bangalore</option>
                                                <option value='4'>Hyderabad</option>
                                                <option value='5'>Chennai</option>
                                            </select>
                                        </div>
                                        <div className='form-group mg-b-20'></div>
                                        <button className='btn btn-az-primary btn-block'>Search</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-8'>
                                {eAuctionBike && eAuctionBike.map((item, index) => (
                                    <EAuctionVehicle key={index} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EAuctionBike;