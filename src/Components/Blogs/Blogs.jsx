import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmark , handleSpentTime}) => {

    const [ blogs , setBlogs ,] = useState([]) ;

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <p className="text-3xl mb-4">Total Blogs = {blogs.length}</p>
            {
                blogs.map( blog => <Blog key={blog.id} blog={blog} handleSpentTime={handleSpentTime} handleAddToBookmark={handleAddToBookmark}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {

    handleAddToBookmark : PropTypes.func ,
    handleSpentTime : PropTypes.func , 
}

export default Blogs;