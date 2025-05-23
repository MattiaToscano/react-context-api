import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import Posts from './pages/posts/Posts'
import Contacts from './pages/Contacts'
import About from './pages/AboutUs'
import DefaultLayout from './layouts/DefaultLayout'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
