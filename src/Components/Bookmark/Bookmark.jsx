import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    const {title} = bookmark

    return (
        
            <ul className="bg-slate-200 m-4 p-4 rounded-xl mb-2">
                <li className="text-3xl font-medium list-disc "> {title}</li>
            </ul>

    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object.isRequired
}

export default Bookmark;

