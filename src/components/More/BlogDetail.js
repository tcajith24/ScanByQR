import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogById } from "../../actions/More";
import { useParams } from "react-router-dom";

var moment = require('moment');

const BlogDetail = () => {
    const dispatch = useDispatch();
    const blogDetail = useSelector(state => state.More);
    console.log(blogDetail);
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const bankData = async () => {
            dispatch(getBlogById(id));
        }
        bankData();
    }, []);
    useEffect(() => {
        if (blogDetail) {
            setBlog(blogDetail);
        }
    }, [blogDetail]);

    if (!blog) {
        return null;
    }

    return (
        <div className='az-content az-content-profile'>
            <div className='container mn-ht-100p'>
                <div className='content-wrapper w-100'>
                    <div className='col-12'>
                        <div className='card-body'>
                            <div className="row grid-margin">
                                <div className="col-lg-12">
                                    <div className="alert alert-warning" role="alert">
                                        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row row-sm-mg-b-20'>
                            <div className="col-lg-8">
                                <div className="card card-dashboard-pageviews">
                                    <div className="card-body">
                                        <div className="az-list-item">
                                            <div>
                                                <h4>{blog.title}</h4>
                                                <span>Modified On {moment(blog.modifiedDate).format("MMM DD, YYYY hh:MM A")} by Sponsored for {blog.category}</span>
                                            </div>
                                            <div />
                                        </div>
                                        <img src={blog.thumbnailUrl} className="d-block w-100" alt="Responsive image" />
                                        <p className="text-gray mb-4">{blog.content}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                                <div className="card card-dashboard-four">
                                    <div className="card-header">
                                        <div className="az-dashboard-nav">
                                            <nav className="nav">
                                                <a href="#" className="nav-link">Recent</a>
                                                <a href="#" className="nav-link">Trending</a>
                                                <a href="#" className="nav-link">Similar</a>
                                                <a href="#" className="nav-link">More</a>
                                            </nav>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table mg-b-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>

                                                                <img src="https://bootstrapdash.com/demo/azia/v1.0.0/img/faces/face11.jpg" className="img-fluid" alt="Responsive image" />
                                                            </td>
                                                            <td>
                                                                <h6 className="mg-b-0 tx-inverse">Socrates Itumay</h6>
                                                                <small className="tx-11 tx-gray-500">Posted Date : june 2023</small>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="https://bootstrapdash.com/demo/azia/v1.0.0/img/faces/face11.jpg" className="img-thumbnail" alt="Responsive image" />

                                                            </td>
                                                            <td>
                                                                <h6 className="mg-b-0 tx-inverse">Joyce Chua</h6>
                                                                <small className="tx-11 tx-gray-500">View Count : 200  </small>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="https://bootstrapdash.com/demo/azia/v1.0.0/img/faces/face11.jpg" className="img-thumbnail" alt="Responsive image" />

                                                            </td>
                                                            <td>
                                                                <h6 className="mg-b-0 tx-inverse">Joyce Chua</h6>
                                                                <small className="tx-11 tx-gray-500">Category  : Car  </small>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <label className="az-content-label tx-13 mg-b-20">check for violation tickets</label>
                                        <div class="card card-body pd-20">

                                            <div class="form-group">
                                                <label class="az-content-label tx-11 tx-medium tx-gray-600">Enter  vehicle number</label>
                                                <input type="text" class="form-control" required="" />
                                            </div>

                                            <div class="form-group">
                                                <label class="az-content-label tx-11 tx-medium tx-gray-600">Enter Your Mobile Number</label>
                                                <div class="pos-relative">
                                                    <input type="text" class="form-control pd-r-80" required="" />
                                                </div>
                                            </div>
                                            <div class="form-group mg-b-20">
                                            </div>
                                            <button class="btn btn-az-primary btn-block">Check  violation tickets</button>
                                            <div class="form-group mg-b-20">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body row"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;