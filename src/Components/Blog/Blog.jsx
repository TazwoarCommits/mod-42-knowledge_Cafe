import PropTypes from 'prop-types';
import { IoBookmark } from "react-icons/io5";

const Blog = ({ blog , handleAddToBookmark}) => {

    const {cover, title, author, author_img,
        posted_date, reading_time, hashtags } = blog   

    return (
        <div className='mb-20'>
            <img className='rounded-2xl mb-4' src={cover} alt="" />
            <div className=' mb-4 flex justify-between'>
                <div className='flex items-center gap-4'>
                    <img className='w-12 h-12 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl font-semibold">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <p>{reading_time} min read</p>
                    <button className="text-indigo-900" onClick={() =>{handleAddToBookmark(blog)}}><IoBookmark></IoBookmark></button>
                </div>
            </div>
            <h3 className='mb-4 text-3xl font-semibold'>{title}</h3>
            <p className='flex gap-2 text-blue-800'>
                {hashtags.map((hashtag, idx) => <span key={idx}><a href="">#{hashtag}</a></span>)}
            </p>
            <button className='mt-4 text-blue-800 underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func
}

export default Blog;