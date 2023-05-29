import React from 'react';
import { useNavigate } from 'react-router-dom';
import { location, calendar, logoUsd, statsChart } from 'ionicons/icons/index';
import { IonIcon } from '@ionic/react';

var moment = require('moment');

const EAuctionVehicle = ({ item }) => {
    const navigate = useNavigate();

    const openAuction = () => {
        navigate(`/eAuction/eAuctionDetail/${item.auctiontitle}-${item.eAuctionId}`, {
            replace: true
        });
    }
    return (
        <div className='card card-dashboard-pageviews'>
            <div className='card-header'>
                <div className='row row-sm'>
                    <div className='col-4 col-md-4 col-xl'>
                        <div className='media'>
                            <div>
                                <IonIcon icon={statsChart} />
                            </div>
                            <div className='media-body'>
                                <label>
                                    <h6>Auction-ID : #{item.eAuctionId}</h6>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 col-md-4 col-xl'>
                        <div className='media'>
                            <div>
                                <IonIcon icon={calendar} />
                            </div>
                            <div className='media-body'>
                                <label>
                                    <h6>Date : {moment(item.auctionDate).format("DD-MM-YYYY hh:mm A")}</h6>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 col-md-4 col-xl'>
                        <div className='media'>
                            <div>
                                <IonIcon icon={location} />
                            </div>
                            <div className='media-body'>
                                <label>
                                    <h6>Location : {item.city}</h6>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 col-md-4 col-xl'>
                        <div className='media'>
                            <div>
                                <IonIcon icon={logoUsd} />
                            </div>
                            <div className='media-body'>
                                <label>
                                    <h6>Price : {item.reservePrice}</h6>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <div className='az-list-item'>
                    <div>
                        <h4>{item.auctiontitle}</h4>
                        <span>{item.description}</span>
                    </div>
                    <div>
                        <h6 className='tx-primary'>
                            <a className='btn btn-light' href={`/eAuction/eAuctionDetail/${item.auctiontitle}-${item.eAuctionId}`} target='_blank' type='button'>View More</a>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EAuctionVehicle;