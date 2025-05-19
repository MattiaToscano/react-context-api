import React from 'react'
import post from './data/posts'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Homepage} />
            <Route path="/posts" Component={Posts} />
            <Route path="/contacts" Component={Contacts} />
            <Route patch="/aboutus" Component={About} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
