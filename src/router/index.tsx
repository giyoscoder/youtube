import React, {Suspense} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import MainLayout from '../layout/MainLayout';


const Router = () => {
  return (
    <Suspense fallback={<p>Youtube loading...</p>}>
      <Routes>
        <Route index path='/' element={<MainLayout/>}/>
        
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </Suspense>
  )
}

export default Router;

