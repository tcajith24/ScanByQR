import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getFAQ } from '../../actions/More';

const RelatedAuctionFAQs = ({ RelatedAuction }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const RelatedAuctionFAQsData = async () => {
            dispatch(getFAQ());
        }
        RelatedAuctionFAQsData();
    }, []);
    const RelatedAuctionFAQs = useSelector(state => state.More);

    return (
        <>
            {RelatedAuctionFAQs.map((item, index) => (
                <div className='media' key={index}>
                    <div className='media-body' key={index}>
                        <a href={`/more/faq/${item.category}-${item.faqId}`} target='_blank' className='nav-link'>
                            <h6>{item.question}</h6>
                        </a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default RelatedAuctionFAQs;