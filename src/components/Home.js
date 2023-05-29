import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
    return (
        <div className='az-content az-content-dashboard'>
            <div className='container'>
                <div className='az-content-body'>
                    <div className='az-dashboard-one-title'>
                        <div>
                            <h2 className='az-dashboard-title'>Hi, welcome back!</h2>
                            <p className='az-dashboard-text'>Your web analytics dashboard template.</p>
                        </div>
                        <div className='az-content-header-right'>
                            <div className='media'>
                                <div className='media-body'>
                                    <input type='text' className='form-control' placeholder='Enter your Vehicle Number' />
                                </div>
                            </div>
                            <a href='' className='btn btn-purple'>Check</a>
                        </div>
                    </div>
                    <div className='az-dashboard-nav'>
                        <nav className='nav'>
                            <a href='' className='nav-link active' data-toggle="tab">Overview</a>
                            <a href='' className='nav-link' data-toggle="tab">Audiences</a>
                            <a href='' className='nav-link' data-toggle="tab">Demographics</a>
                            <a href='' className='nav-link' data-toggle="tab">More</a>
                        </nav>
                        <nav className='nav'>
                            <a href='' className='nav-link'><i className='far fa-save'></i> Save Report</a>
                            <a href='' className='nav-link'><i className='far fa-file-pdf'></i> Export to PDF</a>
                            <a href='' className='nav-link'><i className='far fa-envelope'></i>Send to Email</a>
                            <a href='' className='nav-link'><i className='fas fa-ellipsis-h'></i></a>
                        </nav>
                    </div>
                    <div className='row row-sm mg-b-20'>
                        <div className='col-lg-6 mg-t-20'>
                            <div className='card card-dashboard-twenty ht-md-100p'>
                                <div className='card-body'>
                                    <h6 className='az-content-label tx-13 mg-b-5'>
                                        Account Retention
                                        <span>(This Year)</span>
                                    </h6>
                                    <p className="mg-b-25">Number of customers who have active subscription with you.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 mg-t-20'>
                            <div className='row row-sm'>
                                <div className='col-sm-6'>
                                    <div className='card card-dashboard-twenty'>
                                        <div className='card-body'>
                                            <label className="az-content-label tx-13 tx-primary">Expansions</label>
                                            <p>Customers who have upgraded the level of your products or service.</p>
                                            <div className="expansion-value">
                                                <strong>$1,500</strong>
                                                <strong>$1,120</strong>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar wd-70p" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="expansion-label">
                                                <span>This Month</span>
                                                <span>Previous Month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-6 mg-t-20 mg-sm-t-0'>
                                    <div className='card card-dashboard-twenty ht-md-100p'>
                                        <div className="card-body">
                                            <label className="az-content-label tx-13 tx-danger">Cancellations</label>
                                            <p>Customers who have ended their subscription with you.</p>
                                            <div className="expansion-value">
                                                <strong>$1,900</strong>
                                                <strong>$1,680</strong>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar wd-50p bg-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="expansion-label">
                                                <span>This Month</span>
                                                <span>Previous Month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col mg-t-20'>
                                    <div className='card card-dashboard-progress'>
                                        <div className="card-body">
                                            <div className="d-sm-flex justify-content-between mg-b-20">
                                                <label className="az-content-label tx-13 mg-b-10 mg-sm-b-0">MRR (September)</label>
                                                <ul className="progress-legend">
                                                    <li>Expansion</li>
                                                    <li>New</li>
                                                </ul>
                                            </div>
                                            <div className="media">
                                                <label>None:</label>
                                                <div className="media-body">
                                                    <div id="progressBar1" className="progress">
                                                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ width: "30%" }}>30%</div>
                                                        <div className="progress-bar bg-teal" role="progressbar" aria-valuenow="53" aria-valuemin="0" aria-valuemax="100" style={{ width: "53%" }}>53%</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <label>Partner:</label>
                                                <div className="media-body">
                                                    <div id="progressBar2" className="progress">
                                                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" style={{ width: "35%" }}>35%</div>
                                                        <div className="progress-bar bg-teal" role="progressbar" aria-valuenow="37" aria-valuemin="0" aria-valuemax="100" style={{ width: "37%" }}>37%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="az-content az-content-profile">
                        <div className="container mn-ht-100p">
                            <div className="content-wrapper w-100">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="product-nav-wrapper row">
                                                    <div className="col-lg-8 col-md-5">
                                                        <ul className="nav product-filter-nav">
                                                            <li className="active"><a href="#">USED CARS</a></li>
                                                            <li><a href="#">USED BIKES</a></li>
                                                            <li><a href="#">CAR DEALERS</a></li>
                                                            <li><a href="#">BIKE DEALERS</a></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                                <div className="row product-item-wrapper">
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="action-holder">
                                                                    <div className="sale-badge bg-success">New</div>
                                                                    <span className="favorite-button"><i className="typcn icon typcn-heart-outline"></i></span>
                                                                </div>
                                                                <div className="product-img-outer">
                                                                    <img className="product_image" src="https://d308ljkq6e62o1.cloudfront.net/img/lPxXIZZ7SpG4kwG3EenkIQ/mobile/file.JPG?w=300&amp;dpr=1.0" alt="prduct image" />
                                                                </div>
                                                                <p className="product-title">2014 Maruti Suzuki Ertiga VXI</p>
                                                                <p className="product-price">₹6.53 Lakh</p>
                                                                <p className="product-actual-price">$199.00</p>
                                                                <ul className="product-variation">
                                                                    <li><a href="#">64K km</a></li>
                                                                    <li><a href="#">Petrol</a></li>
                                                                    <li><a href="#">Manual</a></li>
                                                                </ul>
                                                                <p className="product-description">3 shortlisted this car</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="action-holder">
                                                                    <div className="sale-badge bg-success">New</div>
                                                                    <span className="favorite-button"><i className="typcn icon typcn-heart-outline"></i></span>
                                                                </div>
                                                                <div className="product-img-outer">
                                                                    <img className="product_image" src="https://d308ljkq6e62o1.cloudfront.net/img/0zilkOgaRx%2BC7hek8hlOJA/mobile/file.JPG?w=300&amp;dpr=1.0" alt="prduct image" />
                                                                </div>
                                                                <p className="product-title">2018 Toyota Innova Crysta 2.4 V 8 STR</p>
                                                                <p className="product-price">$999.00</p>
                                                                <p className="product-actual-price">$1999.00</p>
                                                                <ul className="product-variation">
                                                                    <li><a href="#">21K km </a></li>
                                                                    <li><a href="#">Diesel</a></li>
                                                                    <li><a href="#">Manual</a></li>
                                                                </ul>
                                                                <p className="product-description">193 shortlisted this car </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;