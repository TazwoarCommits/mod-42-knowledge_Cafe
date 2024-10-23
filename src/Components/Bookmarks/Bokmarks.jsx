import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
  // console.log(bookmarks)
    return (

        <div className="">
          <p>Bookmarked : {bookmarks.length}</p>
          <div className="bg-stone-300 py-8 px-2 my-4 rounded-xl">
          {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
          }
          </div>
        </div>
    );
};

Bookmarks.propTypes = {
  bookmarks : PropTypes.array
}

export default Bookmarks;