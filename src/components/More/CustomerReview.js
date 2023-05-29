import React, { useState, useEffect } from 'react';

const CustomerReview = () => {
    const [customerReview, setCustomerReview] = useState([]);
    useEffect(() => {
        let rating = [
            {
                name: 'Manoj Gupta',
                review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
                location: 'San Francisco, CA',
                date: 'May 13, 2023',
                badgeType: "Customer",
            },
            {
                name: 'Nivya Shah',
                review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
                location: 'San Francisco, CA',
                date: 'May 13, 2023',
                badgeType: "Customer",
            },
            {
                name: 'Annette Joseph',
                review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
                location: 'San Francisco, CA',
                date: 'May 13, 2023',
                badgeType: "Dealer",
            },
        ];
        setCustomerReview(rating);
    }, []);
    return (
        <div className='az-content az-content-profile'>
            <div className='container mn-ht-100p'>
                <div className='content-wrapper w-100'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div claassName='card-body'>
                                <div claassName='page-header'>
                                    <h3 className='page-title'>Customer Reviews </h3>
                                    <hr className='mg-y-10' />
                                </div>
                                <div className='row project-list-showcase'>
                                    {customerReview.map((item, index) => {
                                        return (
                                            <div className='col-lg-4 col-md-4 col-sm-6 col-12 project-grid' key={index}>
                                                <div className='project-grid-inner'>
                                                    <div className='d-flex align-items-start'>
                                                        <div className='wrapper'>
                                                            <h5 className='project-title'>{item.name}</h5>
                                                            <p className='project-location'>
                                                                {item.location} {item.date}
                                                            </p>
                                                        </div>
                                                        <div className='badge badge-success'>{item.badgeType}</div>
                                                    </div>
                                                    <div claassName='project-description'>
                                                        <p>{item.review}
                                                            <a href='' data-bs-toggle='modal' data-bs-target='#exampleModal'>Read Review</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview;