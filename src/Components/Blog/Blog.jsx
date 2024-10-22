import PropTypes from 'prop-types';

const Blog = ({blog}) => {

    const {id , cover , title, author , author_img ,
         posted_date , reading_time , hashtags} = blog
    
    return (
        <div className=''>
            <img className='rounded-2xl' src={cover} alt="" />
            <div className='flex justify-between'>
                <img className='w-12 rounded-full' src={author_img} alt="" />
                <div>
                <p>{reading_time} min read time</p>
                </div>
            </div>
           <h3 className='text-3xl font-semibold'>{title}</h3>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired
}

export default Blog;