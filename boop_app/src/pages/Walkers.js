import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import jhon from './images/walkers/jhon_barjuca.jpg';
import { motion } from 'framer-motion';

function Walkers() {
  const [qb, setQb] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/walkers");
      await setQb(response.data);
    } catch (error) {
        console.log(error);
    }
  };

  useEffect (() => {
    getData();
  },
  []);


  const handleProceed = (id) => {
    navigate(`/walker/${id}`);
  };

  const handleForm = () => {
    navigate('/walker/create');
  };

    return (
      <>
      <motion.div
        className="bg-violet-700 pt-20 pb-40"
        initial={{ opacity: 3 }}
        animate={{ opacity: 6 }}
        exit={{ opacity: 3 }}
      >
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold uppercase leading-normal">Discover Walkers</h1>
          <p className="text-white text-sm italic py-3">"Properly trained, a man can be dog's best friend." C.F.</p>
        </div>
        <div className="bg-violet-700 shadow grid grid-cols-4 gap-4 mt-40 pb-auto mx-6 p-4 text-center">
          {qb.map((walker) => (
            <div key={walker.id}
              className="bg-white shadow mx-6 p-4 rounded text-center text-sm">
                <img src={jhon} alt="profile pict of dog" className="shadow max-w-full h-auto align-middle border-none mb-5"></img>
                <p className="leading-loose"><span className="font-bold">Name </span><span>{walker.name}</span></p>
                <p className="leading-loose"><span className="font-bold">Lastname </span><span>{walker.lastname}</span></p>
                <p className="leading-loose"><span className="font-bold">Price of service </span><span>{walker.price_per_walk}</span></p>
                <p className="leading-loose"><span className="font-bold">City </span><span>{walker.city}</span></p>
                <p className="leading-loose"><span className="font-bold">Country </span><span>{walker.country}</span></p>
              <button
                type="button"
                onClick={()=>handleProceed(walker.id)}
                className="bg-violet-700 text-white mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-gray-300 hover:text-black outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  More info
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={handleForm}
            className="bg-violet-500 text-white active:bg-violet-100 mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              Register as Walker!
          </button>
        </div>
      </motion.div>
      </>
    );
}

export default Walkers;
