import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bokmarks'

function App() {

  const [bookmarks , setBookmarks] = useState([]) ; 

  const handleAddToBookmark = (blog) =>{
    console.log(blog)
  }

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
      </div>

      <main className="max-w-6xl md:flex space-x-12 container mx-auto">

        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>

      </main>

    </>
  )
}

export default App
