import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getFAQ } from "../../actions/More";
import { useParams } from "react-router-dom";

import('bootstrap');
// import { Collapse } from "bootstrap";

var _ = require('lodash');
const FAQ = () => {
    const faqs = useSelector(state => state.More);
    const dispatch = useDispatch();
    const { id } = useParams();
    let FAQItemID = "", FAQItemIDColl = [];
    // if (!id) return;

    const [FAQColl, setFAQColl] = useState([]);
    if (id) {
        FAQItemIDColl = id.split('-');
        FAQItemID = FAQItemIDColl[FAQItemIDColl.length - 1];
    }

    useEffect(() => {
        const faqData = async () => {
            await dispatch(getFAQ());
        }
        faqData();
    }, [dispatch]);

    console.log(faqs);

    useEffect(() => {
        if (!id) {
            setFAQColl(faqs);
        } else {
            const Faqfilter = async () => {
                console.log(faqs);
                console.log(FAQItemIDColl[0]);
                const faqFilterData = faqs.filter((item) => {
                    return item.category === FAQItemIDColl[0];
                });
                console.log(faqFilterData);
                setFAQColl(faqFilterData);
            }
            Faqfilter();
        }
    }, [faqs]);

    console.log(FAQColl);

    // group by faq collection by category
    const grouped = _.groupBy(FAQColl, 'category');
    console.log(grouped);

    return <div className="az-content az-content-profile">
        <div className="container mn-ht-100p">
            <div className="content-wrapper w-100">
                <div className="page-header">
                    <h3 className="page-title">FAQ</h3>
                    <hr className="mg-y-10" />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-body">
                            {Object.keys(grouped).map((key, index) => {
                                return (
                                    <div key={index} className="faq-section">
                                        <div className="container-fluid bg-success py-2">
                                            <p className="mb-0">{key}</p>
                                        </div>
                                        <div className={"accordion mt-4"} id={"accordion" + index}>
                                            {grouped[key].map((item, indexx) => {
                                                return (
                                                    <div key={indexx}>
                                                        <div className="card">
                                                            <div className="card-header" id={"heading" + index + "-" + indexx}>
                                                                <h5 className="mb-0">
                                                                    <a className={(FAQItemID != undefined && FAQItemID == item.faqId) ? ("accordion-button ") : ("accordion-button collapse")} data-bs-toggle="collapse" type="button" data-bs-target={"#collapse" + index + "-" + indexx} aria-expanded={(FAQItemID != undefined && FAQItemID == item.faqId) ? "true" : "false"} aria-controls={"collapse" + index + "-" + indexx}>
                                                                        {item.question}
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id={"collapse" + index + "-" + indexx} className={(FAQItemID != undefined && FAQItemID == item.faqId) ? "collapse show" : "collapse"} aria-labelledby={"heading" + index + "-" + indexx} data-bs-parent={"#accordion" + index}>
                                                                <div className="card-body">
                                                                    {item.answer}
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default FAQ;