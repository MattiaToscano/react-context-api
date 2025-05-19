import React from 'react'
import post from './data/posts'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
