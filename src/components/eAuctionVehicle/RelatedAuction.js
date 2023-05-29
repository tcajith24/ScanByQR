import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEAuctionBike, getEAuctionCar } from "../../actions/Car";
import RelatedAuctionFAQs from "./RelatedAuctionFAQs";

var _ = require('lodash');
const RelatedAuction = ({ RelatedeAuctionDetail }) => {
    const dispatch = useDispatch();
    const countDownDate = new Date(RelatedeAuctionDetail.auctionEndDate).getTime();
    const [countDown, setCountDown] = useState(
        RelatedeAuctionDetail.auctionStartDate - new Date().getTime()
    );
    const [similarAuction, setSimilarAuction] = useState([]);
    const [mostViewedAuction, setMostViewedAuction] = useState([]);
    useEffect(() => {
        if (RelatedeAuctionDetail.assetCategory.toLowerCase() === "bike") {
            dispatch(getEAuctionBike());
        } else if (RelatedeAuctionDetail.assetCategory.toLowerCase() === "car") {
            dispatch(getEAuctionCar());
        } else {
            console.log("No related auction");
        }
    }, []);
    const { eAuctionBike } = useSelector(state => state.Car);
    useEffect(() => {
        if (eAuctionBike) {
            setSimilarAuction(eAuctionBike.filter((item) => item.eAuctionId !== RelatedeAuctionDetail.eAuctionId && item.sellerName === RelatedeAuctionDetail.sellerName));
            setMostViewedAuction(_.orderBy(eAuctionBike.filter((item) => item.eAuctionId !== RelatedeAuctionDetail.eAuctionId && item.sellerName === RelatedeAuctionDetail.sellerName), ['viewcount'], ['desc']));
        }
    }, [eAuctionBike]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);
        return () => clearInterval(interval);
    }, [countDownDate]);

    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    if (!RelatedeAuctionDetail) return null;
    return (
        <div className='col-lg-4 mg-t-20 mg-lg-t-0'>
            <div className="d-lg-flex d-xl-block">
                <div className="card mg-t-20 mg-lg-t-0 mg-xl-t-20 mg-lg-l-20 mg-xl-l-0">
                    <div className="card-header">
                        <h6 className="card-title tx-14 mg-b-5">Auction Ends IN</h6>
                        <p className="tx-12 lh-4 tx-gray-500 mg-b-0">{RelatedeAuctionDetail.state} / {RelatedeAuctionDetail.area} {RelatedeAuctionDetail.city}</p>
                    </div>
                    <div className="card-body">
                        <div className="countdown-timer">
                            <div className="countdown-timer tx-bold tx-inverse mg-b-5">
                                <div className="countdown-timer-item">
                                    <div className="countdown-timer-value">{days}</div>
                                    <div className="countdown-timer-label">Days</div>
                                </div>
                                <span>:</span>
                                <div className="countdown-timer-item">
                                    <div className="countdown-timer-value">{hours}</div>
                                    <div className="countdown-timer-label">Hours</div>
                                </div>
                                <span>:</span>
                                <div className="countdown-timer-item">
                                    <div className="countdown-timer-value">{minutes}</div>
                                    <div className="countdown-timer-label">Minutes</div>
                                </div>
                                <span>:</span>
                                <div className="countdown-timer-item">
                                    <div className="countdown-timer-value">{seconds}</div>
                                    <div className="countdown-timer-label">Seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-dashboard-four">
                <label className="az-content-label tx-base mg-b-25">Similar Auction's</label>
                <div className="az-media-list-activity mg-b-20">
                    {similarAuction.map((item, index) => (
                        <div className="media" key={index}>
                            <div className="media-icon bg-success">
                                <i className="typcn typcn-tick-outline"></i>
                            </div>
                            <div className="media-body">
                                <h6>{item.auctiontitle},{item.city}</h6>
                                <span>Auction ID: #{item.eAuctionId}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <label className="az-content-label tx-base mg-b-25">Most Viewed Auction's</label>
                <div className="az-media-list-activity mg-b-20">
                    {mostViewedAuction.map((item, index) => (
                        <div className="media" key={index}>
                            <div className="media-icon bg-success">
                                <i className="typcn typcn-tick-outline"></i>
                            </div>
                            <div className="media-body">
                                <h6>{item.auctiontitle},{item.city}</h6>
                                <span>Auction ID: #{item.eAuctionId}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <label className="az-content-label tx-base mg-b-25">Related Auction's  FAQ's</label>
                <div className="az-media-list-activity mg-b-20">
                    <RelatedAuctionFAQs RelatedAuction={RelatedeAuctionDetail} />
                </div>
            </div>
        </div>
    )
}

export default RelatedAuction;