import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Doggies from "../pages/Doggies";
import Walkers from "../pages/Walkers";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import DoggiesByID from "../pages/DoggiesByID";
import WalkersByID from "../pages/WalkersByID";
import DoggiesForm from "../pages/DoggiesForm";
import WalkersForm from "../pages/WalkersForm";
import OwnersForm from "../pages/OwnersForm";
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/doggies' element={<Doggies />} />
        <Route path='/doggie/:id' element={<DoggiesByID />} />
        <Route path='/owner/create' element={<OwnersForm />} />
        <Route path='/doggie/create/:id' element={<DoggiesForm />} />
        <Route path='/walkers' element={<Walkers />} />
        <Route path='/walker/:id' element={<WalkersByID />} />
        <Route path='/walker/create' element={<WalkersForm />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;
