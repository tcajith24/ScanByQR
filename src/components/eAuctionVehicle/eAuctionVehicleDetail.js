import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEAuctionById } from '../../actions/Car';
import RelatedAuction from './RelatedAuction';

import $ from 'jquery';

import '../../../node_modules/jquery.steps/dist/jquery-steps.js';
// import '../../../node_modules/jquery-steps/build/jquery.steps.min';
require('jquery-steps/build/jquery.steps.min');

const EAuctionVehicleDetail = () => {
    const [bank, setBank] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();
    const eAuctionItemIDColl = id.split('-');
    const eAuctionItemID = eAuctionItemIDColl[eAuctionItemIDColl.length - 1];
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

    useEffect(() => {
        dispatch(getEAuctionById(eAuctionItemID));
    }, []);
    const { eAuctionDetail } = useSelector(state => state.Car);
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
                            {/* <div className='page-header'>
                                <h3 className='page-title'>Upcoming Bike Auction </h3>
                                <hr className='mg-y-8' />
                            </div> */}
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
                        {eAuctionDetail != undefined && (
                            <div className='row row-sm mg-b-20'>
                                <div className='col-lg-8'>
                                    <div className='card-body'>
                                        <div className='az-list-item'>
                                            <div>
                                                <h4>{eAuctionDetail.auctiontitle}</h4>
                                                <span>
                                                    <small style={{ fontSize: "80%" }}>
                                                        <img alt='Bank of Baroda' src='https://findauction.in/static/images/banklogo/bankofbaroda.png' style={{ width: "16px", height: "16px", marginBottom: "2px" }} />
                                                        <span style={{ marginLeft: "5px" }}>{eAuctionDetail.sellerName}</span>
                                                    </small>
                                                </span>
                                                <span>
                                                    <small style={{ fontSize: "80%" }}>
                                                        <img alt='Bank of Baroda' src='https://findauction.in/static/images/banklogo/bankofbaroda.png' style={{ width: "16px", height: "16px", marginBottom: "2px" }} />
                                                        <span style={{ marginLeft: "5px" }}>{eAuctionDetail.auctionDate}</span>
                                                    </small>
                                                </span>
                                                <span>
                                                    <small style={{ fontSize: "80%" }}>
                                                        <img alt='Bank of Baroda' src='https://findauction.in/static/images/banklogo/bankofbaroda.png' style={{ width: "16px", height: "16px", marginBottom: "2px" }} />
                                                        <span style={{ marginLeft: "5px" }}>{eAuctionDetail.eAuctionId}</span>
                                                    </small>
                                                </span>
                                            </div>
                                            <div>
                                                <span>View Count : {eAuctionDetail.viewcount}</span>
                                            </div>
                                        </div>
                                        <div className='media-body'>
                                            <div className='card card-minimal-three'>
                                                <div className='card-body'>
                                                    <div className='az-tab-content'>
                                                        <div className='az-tab-item active' id='azTab1'>
                                                            <div className='tab-pane-body'>
                                                                <h6 className='az-content-label tx-13'>COMPLETE AUCTION DETAILS</h6>
                                                                <div className='table-responsive'>
                                                                    <table className='table mg-b-0'>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className='bg-success'></span>
                                                                                </td>
                                                                                <td>
                                                                                    Auction Start Date</td>
                                                                                <td>{eAuctionDetail.auctionStartDate}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className='bg-success'></span>
                                                                                </td>
                                                                                <td>
                                                                                    Auction End Date</td>
                                                                                <td>{eAuctionDetail.auctionEndDate}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className='bg-success'></span>
                                                                                </td>
                                                                                <td>
                                                                                    Auction Type</td>
                                                                                <td>{eAuctionDetail.propertyStatus}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className='bg-success'></span>
                                                                                </td>
                                                                                <td>
                                                                                    Property Type</td>
                                                                                <td>{eAuctionDetail.propertyType}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className='bg-success'></span>
                                                                                </td>
                                                                                <td>
                                                                                    Description</td>
                                                                                <td>{eAuctionDetail.description}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className='bg-success'></span>
                                                                                </td>
                                                                                <td>
                                                                                    State</td>
                                                                                <td>{eAuctionDetail.state}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className='bg-success'></span>
                                                                                </td>
                                                                                <td>
                                                                                    City</td>
                                                                                <td>{eAuctionDetail.city}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className='bg-success'></span>
                                                                                </td>
                                                                                <td>
                                                                                    Reserve Price</td>
                                                                                <td>{eAuctionDetail.reservePrice}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className='bg-success'></span>
                                                                                </td>
                                                                                <td>
                                                                                    Emd Amount</td>
                                                                                <td>{eAuctionDetail.emdamount}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className='bg-success'></span>
                                                                                </td>
                                                                                <td>
                                                                                    Bid Increment</td>
                                                                                <td>{eAuctionDetail.bidincrement}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card card-minimal-three'>
                                                <div className='card-body'>
                                                    <div className='tab-pane-body'>
                                                        <h6 className='az-content-label tx-13'>COMPLETE vehicle DETAILS</h6>
                                                        <div className='table-responsive'>
                                                            {eAuctionDetail.eAuctionDetails.length > 0 ? (
                                                                <table className='table mg-b-0'>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <span className='bg-success'></span>
                                                                            </td>
                                                                            <td>
                                                                                Model</td>
                                                                            <td>{eAuctionDetail.eAuctionDetails[0].model}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <span className='bg-success'></span>
                                                                            </td>
                                                                            <td>
                                                                                Year Of Manufacturing</td>
                                                                            <td>{eAuctionDetail.eAuctionDetails[0].yearOfManufacturing}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <span className='bg-success'></span>
                                                                            </td>
                                                                            <td>
                                                                                Registered State</td>
                                                                            <td>{eAuctionDetail.eAuctionDetails[0].registeredState}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <span className='bg-success'></span>
                                                                            </td>
                                                                            <td>
                                                                                Kilometers Driven</td>
                                                                            <td>{eAuctionDetail.eAuctionDetails[0].kilometers}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <span className='bg-success'></span>
                                                                            </td>
                                                                            <td>
                                                                                Location</td>
                                                                            <td>{eAuctionDetail.eAuctionDetails[0].city}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <span className='bg-success'></span>
                                                                            </td>
                                                                            <td>
                                                                                Transmission System</td>
                                                                            <td>{eAuctionDetail.eAuctionDetails[0].transmissionSystem}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <span className='bg-success'></span>
                                                                            </td>
                                                                            <td>
                                                                                Seating Capacity</td>
                                                                            <td>{eAuctionDetail.eAuctionDetails[0].seatingCapacity}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <span className='bg-success'></span>
                                                                            </td>
                                                                            <td>
                                                                                Ownership</td>
                                                                            <td>{eAuctionDetail.eAuctionDetails[0].ownership}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <span className='bg-success'></span>
                                                                            </td>
                                                                            <td>
                                                                                Color</td>
                                                                            <td>{eAuctionDetail.eAuctionDetails[0].color}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <span className='bg-success'></span>
                                                                            </td>
                                                                            <td>
                                                                                Fuel Type</td>
                                                                            <td>{eAuctionDetail.eAuctionDetails[0].fuelType}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='az-dashboard-nav'>
                                                    <nav className='nav'> </nav>
                                                    <nav className='nav'>
                                                        <a className='nav-link' href='#'>
                                                            <i className='far fa-save'></i>
                                                            View Piblished Source
                                                        </a>
                                                        <a className='nav-link' href='#'>
                                                            <i className='far fa-save'></i>
                                                            View Image or Video
                                                        </a>
                                                        <a className='nav-link' href='#'>
                                                            <i className='far fa-envelope'></i>
                                                            Send to Email
                                                        </a>
                                                        <a className='nav-link' href='#'>
                                                            <i className='fas fa-ellipsis-h'></i>
                                                        </a>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='wizard3'>
                                            <h3>Personal Information</h3>
                                            <section>
                                                <p>Try the keyboard navigation by clicking arrow left or right!</p>
                                            </section>
                                            <h3>Billing Information</h3>
                                            <section>
                                                <p>Wonderful transition effects.</p>
                                            </section>
                                            <h3>Payment Details</h3>
                                            <section>
                                                <p>The next and previous buttons help you to navigate through your content.</p>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <RelatedAuction RelatedeAuctionDetail={eAuctionDetail} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )


}

export default EAuctionVehicleDetail;