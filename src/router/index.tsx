import React, {Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import MainLayout from '../layout/MainLayout';


const Router = () => {
  return (
    <Suspense fallback={<p>Youtube loading...</p>}>
      <Routes>
        <Route index path='/' element={<MainLayout/>}/>
      </Routes>
    </Suspense>
  )
}

export default Router;

