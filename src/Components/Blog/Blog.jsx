import PropTypes from 'prop-types';

const Blog = ({blog}) => {

    const {id , cover , title, author , author_img ,
         posted_date , reading_time , hashtags} = blog
    
    return (
        <div className=''>
            <img src={cover} alt="" />
           <h3>{title}</h3>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired
}

export default Blog;