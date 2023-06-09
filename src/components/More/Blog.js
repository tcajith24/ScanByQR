import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../../actions/More';
import carImge from '../../images/car-image.jpg';

const Blog = () => {
    // const [blogs, setBlogs] = useState([]);
    const blogs = useSelector(state => state.More);
    // console.log(blog);
    const dispatch = useDispatch();
    useEffect(() => {
        const blogData = async () => {
            dispatch(getBlog());
        }
        blogData();
    }, [dispatch]);
    return (
        <div className='az-content az-content-profile'>
            <div className='container mn-ht-100p'>
                <div className='content-wrapper w-100'>
                    <div className='page-header'>
                        <h3 className='page-title'>Popular Stories</h3>
                        <hr className='mg-y-10' />
                    </div>
                    {blogs && blogs.length > 0 ?
                        <div className='card-columns'>
                            {blogs.map((item, index) => {
                                return (
                                    <div className='card' key={index}>
                                        <img className='card-img-top' src={(item.thumbnailUrl !== "" && item.thumbnailUrl !== "string") ? item.thumbnailUrl : carImge } alt='Card_image_cap' />
                                        <div className='card-body'>
                                            <h5 className='card-title'><a href={"/blog/blogDetail/" + item.postId} target='_blank'>{item.title}</a></h5>
                                            <p className='card-text'>{item.content.length > 150 ? (<><>{item.content.substring(0, 150)}...</><a href={"/blog/blogDetail/" + item.postId} target='_blank'>Read More</a></>):(item.content)  }</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        : null}
                </div>
            </div>
        </div>
    )
}

export default Blog;