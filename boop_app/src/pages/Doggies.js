import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import milo from './images/doggies/milo_germanShepherd.jpg';
import { motion } from 'framer-motion';

function Doggies() {
  //Function to fetch the data from boop_db
  const [qb, setQb] = useState([]);

  //Hook that executes the fetch function on the first render 
  useEffect (() => {
    getData();
  },
  []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/doggies");
      setQb(response.data);
    } catch (error) {
        console.log(error);
    }
  };

  // Navigate to other path
  const navigate = useNavigate();

  //Create a nice alert
  const MySwal = withReactContent(Swal);

  // Handle navigation
  const handleProceed = (id) => {
    navigate(`/doggie/${id}`);
  };

  const handleRegister = () => {
    navigate('/owner/create');
    MySwal.fire({
    title: <strong>Before your dog, let's start with the owner</strong>,
    icon: 'success'
    })
  };

  return (
    <>
    <motion.div
      className="bg-violet-700 pt-10 pb-40"
      initial={{ opacity: 3 }}
      animate={{ opacity: 6 }}
      exit={{ opacity: 3 }}
    >
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold uppercase leading-normal">Discover Doggies</h1>
        <p className="text-white text-sm italic py-3">Dogs just wanna have fun... With another one!</p>
        <span className="text-white text-sm">Peers - Friends - Lovers</span>
      </div>
      <div className="bg-white grid grid-cols-4 gap-4 mt-40 pb-auto mx-6 p-4 rounded text-center">
        {qb.map((doggie) => (
          <div key={doggie.id}
            className="bg-violet-700 mx-6 p-4 text-center text-sm text-white rounded shadow-xl">
              <img src={milo} alt="profile pict of dog" className="shadow max-w-full h-auto align-middle border-none mb-5"></img>
              <p className="leading-loose"><span className="font-bold">Name: </span><span>{doggie.name}</span></p>
              <p className="leading-loose"><span className="font-bold">Age: </span><span>{doggie.age} years</span></p>
              <p className="leading-loose"><span className="font-bold">Breed: </span><span>{doggie.breed}</span></p>
              <p className="leading-loose"><span className="font-bold">Country: </span><span>{doggie.country}</span></p>
            <button
              type="button"
              onClick={()=>handleProceed(doggie.id)}
              className="bg-violet-500 text-white mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-gray-300 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                More info
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button
          type="button"
          onClick={handleRegister}
          className="bg-violet-500 text-white active:bg-violet-100 mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Register my doggie!
        </button>
      </div>
    </motion.div>
    </>
  );
}

export default Doggies;
