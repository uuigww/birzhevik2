import { Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect, Suspense } from 'react';
import './App.css'
/* компоненты */
import Preloader from "./components/Preloader";

/* роуты */
import Profile from "./pages/Profile";



const App = () => {

  let user = {};

  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<Profile user={user} />} />
        <Route path="*" element={<Profile user={user} />} />
      </Routes>
    </Suspense>
  );
}

export default App
