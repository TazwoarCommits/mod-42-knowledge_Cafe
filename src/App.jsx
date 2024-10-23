import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bokmarks'
import SpentTime from './Components/SpentTime/SpentTime'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const [ spentTime ,setSpentTime] = useState(0) ;

  const handleSpentTime = (time) => {
    const newTime = spentTime + time 
    setSpentTime(newTime) ;
  }


  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
      </div>

      <main className="max-w-7xl md:flex space-x-20 container mx-auto">

        <Blogs handleSpentTime={handleSpentTime} handleAddToBookmark={handleAddToBookmark}></Blogs>

        <div className="w-1/3">
          <SpentTime time={spentTime}></SpentTime>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>

      </main>

    </>
  )
}

export default App
