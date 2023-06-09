import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import face1 from '../../images/faces/face1.jpg';
// import SimilarCarAds from './SimilarCarAds';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';
import { BikeCatalogById } from '../../actions/Bike';

const BikeDetail = () => {
    const dispatch = useDispatch();
    const BikeCatalog = useSelector(state => state.Bike);
    console.log(BikeCatalog);
    const [bikeCatalogById, setBikeCatalogById] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const bankData = async () => {
            dispatch(BikeCatalogById(id));
        }
        bankData();
    }, []);
    console.log(BikeCatalog);
    useEffect(() => {
        if (BikeCatalog.bikeCatalogById) {
            setBikeCatalogById(BikeCatalog.bikeCatalogById);
        }
    }, [BikeCatalog.bikeCatalogById]);

    const getPriceInThousandsFormat = (price) => {
        let priceInThousands = price?.replace(/[^0-9]/g, "");
        let priceInThousandsFormat = priceInThousands?.slice(0, -3) + "," + priceInThousands?.slice(-3);
        return priceInThousandsFormat;
    }
    if (!bikeCatalogById) {
        return <div>Loading...</div>
    }

    return (
        <div className='az-content pd-y-20 pd-lg-y-30 pd-xl-y-40'>
            <div className='container'>
                <div className='az-content-body pd-lg-l-10 d-flex flex-column'>
                    <hr className='mg-y-10' />
                    <div className='row product-item-wrapper'>
                        <div className='col-lg-8 col-md-12 col-sm-12 col-12 product-item'>
                            <div className='card card-dashboard-progress'>
                                <div className='card-body custom-body'>
                                    <div className='action-holder'>
                                        <div className='sale-badge bg-success'>
                                            New
                                        </div>
                                        <span className='favorite-button'>
                                            <i className='typcn icon typcn-heart-outline' />
                                        </span>
                                    </div>
                                    <div className='product-img-outer'>
                                        <div id='carouselExampleIndicators1' className="carousel_slide">
                                            <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
                                                <div className="carousel-item1">
                                                    <img className="product_image d-block w-100" src="https://d308ljkq6e62o1.cloudfront.net/img/H2BjA25XSjCtp1qXgpxoHQ/mobile/file.JPG?w=300&dpr=1.0" alt="First slide" />
                                                </div>
                                                <div className="carousel-item1">
                                                    <img className="product_image d-block w-100" src="https://d308ljkq6e62o1.cloudfront.net/img/e%2Bhl8tNiTg%2BNxgm7DU8%2BmA/mobile/file.JPG?w=300&dpr=1.0" alt="Second slide" />
                                                </div>
                                                <div className="carousel-item1">
                                                    <img className="product_image d-block w-100" src="https://d308ljkq6e62o1.cloudfront.net/img/Tu08M0pPRfC3d3bj%2Bk1EAA/mobile/file.JPG?w=300&dpr=1.0" alt="Third slide" />
                                                </div>
                                            </Carousel>
                                        </div>
                                    </div>
                                    <p className='product-title'>{bikeCatalogById.registrationYear} {bikeCatalogById.title}</p>
                                    <p className='product-price'>{getPriceInThousandsFormat(bikeCatalogById.finalPrice)}</p>
                                    <p className='product-actual-price'>{getPriceInThousandsFormat(bikeCatalogById.price)}</p>
                                    <nav className='nav'>
                                        <a href='#' className='nav-link'>
                                            <i className='fas fa-mobile-alt' />
                                            Get all details
                                        </a>
                                        <a href='#' className='nav-link'>
                                            <i className='far fa-envelope' />
                                            Schedule a visit
                                        </a>
                                        <a href='#' className='nav-link'>
                                            <i className='far fa-clock' />
                                            Finalize the price
                                        </a>
                                    </nav>
                                    <p className='product-description'>
                                        <label className='az-content-label tx-13 mg-b-10 mg-sm-b-0'>Description : </label>

                                        <span>{bikeCatalogById.description}</span>

                                    </p>
                                </div>
                                <div id='wizard3' className='wizard clearfix vertical'>
                                    <h3 >Bike Overview</h3>
                                    <section>
                                        <span>Engine Size : {bikeCatalogById.engineCc}</span>
                                        <span>Fuel Type : {bikeCatalogById.fuelType}</span>
                                        <span>mileage : {bikeCatalogById.mileage}</span>
                                        <span>registrationYear : {bikeCatalogById.registrationYear}</span>
                                        <span>Address : {bikeCatalogById.address}</span>
                                        <span>Comments: {bikeCatalogById.eComments}</span>
                                    </section>
                                    <h3>Highlights</h3>
                                    <section>
                                        <span>{bikeCatalogById.highlights}</span>

                                    </section>
                                    <h3>Bike Specifications</h3>
                                    <section >
                                        <span>Color : {bikeCatalogById.color}</span>
                                        <span>Insurence : {bikeCatalogById.insuranceType}</span>
                                        <span>Insurance Validity : {moment(bikeCatalogById.insuranceValidity).format("DD MMM YYYY")}</span>
                                        <span>Registration No. : {bikeCatalogById.registrationNo}</span>
                                    </section>
                                    <h3>Inspection Report</h3>
                                    <section >
                                        {bikeCatalogById.inspectionCondition}
                                    </section>
                                    <h3>Features of this Bike</h3>
                                    <section >
                                        <span>Transmission : {bikeCatalogById.transmission}</span>
                                        <span>Variant : {bikeCatalogById.variant}</span>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 mg-t-20 mg-lg-t-0'>
                            <div className='card card-dashboard-progress'>
                                <div className='card-body'>
                                    <div className='d-sm-flex justify-content-between mg-b-20'>
                                        <label className='az-content-label tx-13 mg-b-10 mg-sm-b-0'>Bike Overview</label>
                                        <ul className='progress-legend'>
                                            <li>500 views </li>
                                            <li>29 shortlisted </li>
                                        </ul>
                                    </div>
                                    <div className='card mg-t-20 mg-lg-t-0 mg-xl-t-20 mg-lg-l-20 mg-xl-l-0'>
                                        <div className='az-sidebar-loggedin'>
                                            <div className='az-img-user online'>
                                                <img src={face1} alt='' />
                                            </div>
                                            <div className='media-body'>
                                                <h6>Aziana Pechon</h6>
                                                <span>Premium Member</span>
                                            </div>
                                            <div className='media-body'>
                                                <a href='' className='btn btn-primary'>Call</a>
                                            </div>
                                        </div>
                                        <nav className='nav'>
                                            <a href='#' className='nav-link' data-toggle="tooltip" aria-label="Archive" data-bs-original-title="Archive">
                                                <i className='icon ion-ios-filing' />
                                                Mobile & Mail verified
                                            </a>
                                            <a href='#' className='nav-link' data-toggle="tooltip" aria-label="Archive" data-bs-original-title="Archive">
                                                <i className='icon ion-ios-filing' />
                                                View Profile
                                            </a>
                                        </nav>
                                    </div>
                                    <div className='card mg-t-20 mg-lg-t-0 mg-xl-t-20 mg-lg-l-20 mg-xl-l-0'>
                                        <div className='card-header'>
                                            <h6 className='card-title tx-14 mg-b-5'>Make year</h6>
                                            <p className='tx-12 lh-4 tx-gray-500 mg-b-0'>{bikeCatalogById.makeYear}</p>
                                        </div>
                                        <div className='card-header'>
                                            <h6 className='card-title tx-14 mg-b-5'>Registration year</h6>
                                            <p className='tx-12 lh-4 tx-gray-500 mg-b-0'>{bikeCatalogById.registrationYear}</p>
                                        </div>
                                        <div className='card-header'>
                                            <h6 className='card-title tx-14 mg-b-5'>Fuel type</h6>
                                            <p className='tx-12 lh-4 tx-gray-500 mg-b-0'>{bikeCatalogById.fuelType}</p>
                                        </div>
                                        <div className='card-header'>
                                            <h6 className='card-title tx-14 mg-b-5'>Km driven</h6>
                                            <p className='tx-12 lh-4 tx-gray-500 mg-b-0'>{bikeCatalogById.kmDriven}</p>
                                        </div>
                                        <div className='card-header'>
                                            <h6 className='card-title tx-14 mg-b-5'>Transmission</h6>
                                            <p className='tx-12 lh-4 tx-gray-500 mg-b-0'>{bikeCatalogById.transmission}</p>
                                        </div>
                                        <div className='card-header'>
                                            <h6 className='card-title tx-14 mg-b-5'>No. of Owner</h6>
                                            <p className='tx-12 lh-4 tx-gray-500 mg-b-0'>{bikeCatalogById.noofOwner}</p>
                                        </div>
                                        <div className='card-header'>
                                            <h6 className='card-title tx-14 mg-b-5'>Insurance validity</h6>
                                            <p className='tx-12 lh-4 tx-gray-500 mg-b-0'>{moment(bikeCatalogById.insuranceValidity).format("MMM YYYY")}</p>
                                        </div>
                                        <div className='card-header'>
                                            <h6 className='card-title tx-14 mg-b-5'>Insurance type</h6>
                                            <p className='tx-12 lh-4 tx-gray-500 mg-b-0'>{bikeCatalogById.insuranceType}</p>
                                        </div>
                                        <div className='card-header'>
                                            <h6 className='card-title tx-14 mg-b-5'>RTO</h6>
                                            <p className='tx-12 lh-4 tx-gray-500 mg-b-0'>{bikeCatalogById.rto}</p>
                                        </div>
                                        <div className='card-header'>
                                            <h6 className='card-title tx-14 mg-b-5'>Car location</h6>
                                            <p className='tx-12 lh-4 tx-gray-500 mg-b-0'>{bikeCatalogById.location}</p>
                                        </div>
                                    </div>
                                    <div className='card mg-t-20 mg-lg-t-0 mg-xl-t-20 mg-lg-l-20 mg-xl-l-0'>
                                        <div className='card-body'>
                                            <div className='d-sm-flex justify-content-between mg-b-20'>
                                                <label className='az-content-label tx-13 mg-b-10 mg-sm-b-0'>Buyer Guidelines</label>
                                                <ul className='progress-legend'>
                                                    <li>Know More</li>
                                                </ul>
                                            </div>
                                            <div className='media'>
                                                <div className='media-body'>
                                                    Ask questions to be clear on vehicle detailsehicle test-drive
                                                </div>
                                            </div>
                                            <div className='media'>
                                                <div className='media-body'>
                                                    Ask questions to be clear on vehicle details
                                                </div>
                                            </div>
                                            <div className='media'>
                                                <div className='media-body'>
                                                    Ask questions to be clear on vehicle details
                                                </div>
                                            </div>
                                            <div className='media'>
                                                <div className='media-body'>
                                                    Be aware of time & place when going for vehicle test-drive
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row product-item-wrapper'>
                        {/* <SimilarCarAds /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BikeDetail;