import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import jhon from './images/walkers/jhon_barjuca.jpg';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { motion } from 'framer-motion';

function WalkersByID() {
  const [qb, setQb] = useState([]);
  const MySwal = withReactContent(Swal);

  let { id } = useParams();

  useEffect (() => {
    
      axios.get(`http://localhost:9000/walker/${id}`).then((res)=>{
        let data = res.data;
        setQb(data);
      }).catch(error=>{
        console.log(error);
    })
  },[id]);

  // Handle buttons - remove a Walker and go back

  const navigate = useNavigate();
  
  const handleDeleteWalker = async (id) => {
    await axios.delete(`http://localhost:9000/walker/delete/${id}`);
    console.log('Walker has been deleted');
    MySwal.fire({
      title: <strong>You have succesfully remove {qb.name}</strong>,
      icon: 'warning'
    });
    navigate('/walkers');
   }

  const handleBack = (e) => {
    navigate('/walkers');
   }

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity:0 }}
    >
      <div className="flex justify-center my-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-violet-700">
          <img className=" w-full" src={jhon} alt="Jhon avatar smiling" />
          <div className="px-6 py-4">
            <div className="text-slate-200 font-bold text-center text-2xl mb-2">{qb.name} {qb.lastname}
            </div>
            <p className="text-white text-base text-center leading-loose">{qb.email}</p>
            <p className="text-white text-base text-center leading-loose">{qb.phone}</p>
            <p className="text-white text-base text-center italic">"{qb.about_me}"</p>
            <p className="text-white text-base text-center leading-loose">{qb.price_per_walk} - price per hour</p>
            <p className="text-white text-base text-center leading-loose">{qb.city}</p>
            <p className="text-white text-base text-center leading-loose">{qb.country}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#walker</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#doggies_lover</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#boop</span>
          </div>
        </div>
      </div>
      <div className="text-center mb-8">
        <button
          type="button"
          onClick={()=>handleDeleteWalker(qb.id)}
          className="bg-violet-700 text-white mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-red-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Delete
        </button>
        <button
          className="bg-violet-700 text-white mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-slate-400 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >  
          Edit
        </button>
        <button
          type="button"
          onClick={()=>handleBack()}
          className="bg-white  border-slate-700 text-violet-700 mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-violet-500 hover:text-white focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Back
        </button>
      </div>
    </motion.div>
    </>
  );
}

export default WalkersByID;
