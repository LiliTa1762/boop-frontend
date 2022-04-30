import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import codie from './images/doggies/codie_borderCollie.jpg';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { motion } from 'framer-motion';

function DoggiesByID() {
  const [qb, setQb] = useState([]);
  const MySwal = withReactContent(Swal);

  let { id } = useParams();

  useEffect (() => {
    
      axios.get(`http://localhost:9000/doggie/${id}`).then((res)=>{
        let data = res.data;
        setQb(data);
      }).catch(error=>{
        console.log(error);
    })
  },[id]);

  // Handle buttons - remove a Doggie and go back

  const navigate = useNavigate();
  
  const handleDeleteDoggie = async (id) => {
    await axios.delete(`http://localhost:9000/doggie/delete/${id}`);
    console.log('Doggie has been deleted');
    MySwal.fire({
      title: <strong>You have succesfully remove {qb.name}</strong>,
      icon: 'warning'
    });
    navigate('/doggies');
   }

  const handleBack = (e) => {
    navigate('/doggies');
   }

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity:0 }}
    >
      <div className="flex justify-center my-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className=" w-full" src={codie} alt="Codie running to you" />
          <div className="px-6 py-4">
            <div className="font-bold text-center text-xl mb-2">{qb.name}
            </div>
            <p className="text-gray-700 text-base text-center">{qb.age} years old</p>
            <p className="text-gray-700 text-base text-center">{qb.breed}</p>
            <p className="text-gray-700 text-base text-center italic">"{qb.interests}"</p>
            <p className="text-gray-700 text-base text-center">{qb.number_of_child} puppies</p>
            <p className="text-gray-700 text-base text-center">{qb.city}</p>
            <p className="text-gray-700 text-base text-center">{qb.country}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#boop</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#doggies_lover</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#dogs</span>
          </div>
        </div>
      </div>
      <div className="text-center mb-8">
        <button
          type="button"
          onClick={()=>handleDeleteDoggie(qb.id)}
          className="bg-violet-700 text-white mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-red-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Delete
        </button>
        <button
          type="button"
          className="bg-violet-700 text-white mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-slate-400 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={()=>handleBack()}
          className="bg-white  border-slate-700 text-violet-700 mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-violet-700 hover:text-white focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Back
        </button>
      </div>
    </motion.div>
    </>
  );
}

export default DoggiesByID;
