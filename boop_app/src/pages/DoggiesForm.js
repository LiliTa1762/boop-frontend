import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { motion } from 'framer-motion';

function DoggiesForm() {
  const [inputs, setInputs] = useState("");
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const { id } = useParams();

  const handleChange = (e) => {
    setInputs(({...inputs, [e.target.name]: e.target.value}));
  }

  const handleBack = (e) => {
    navigate('/doggies');
    MySwal.fire({
      title: <strong>The registration has been canceled</strong>,
      icon: 'warning',
      html: <p>Owners data has been saved, you can continue later</p>
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const doggieData = {
      name: inputs.name,
      age: inputs.age,
      breed: inputs.breed,
      interests: inputs.interests,
      number_of_child: parseInt(inputs.number_of_child),
      owner_id: parseInt(id),
      city: inputs.city,
      country: inputs.country
    }
    console.log(id);
    axios.post('http://localhost:9000/doggie/create',
    doggieData).then((response) => {
      console.log(response.status);
      setInputs({
        name: '',
        age: '',
        breed: '',
        interests: '',
        number_of_child: '',
        owner_id: '',
        city: '',
        country: ''
      })
      //Alert success
      MySwal.fire({
        title: <strong>Super! Enjoy BooP</strong>,
        icon: 'success'
      });
      navigate('/doggies');
    });
  }

  return (
    <>
    <motion.div
      className="bg-violet-700 pt-20 pb-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity:0 }}
    >
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold uppercase leading-normal">Doggies Register</h1>
        <p className="text-white text-sm py-3">Now we can make that the whole world knows your doggie!</p>
      </div>
      <form
      onSubmit={handleSubmit}
      className="text-center bg-violet-700 mt-10"
      >
        <label
          className="text-base text-white text-right"
        >
          Name
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
            className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          />
        </label><br />
        <label
          className="text-base text-white text-right ml-3"
        >
          Age
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
            className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          />
        </label><br />
        <label
          className="text-base text-white text-right"
        >
          Breed
          <input
            type="text"
            name="breed"
            value={inputs.breed || ""}
            onChange={handleChange}
            className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          />
        </label><br />
        <label
          className="text-base text-white text-right mr-6"
        >
          Interests
          <input
            type="text"
            name="interests"
            value={inputs.interests || ""}
            onChange={handleChange}
            className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          />
        </label><br />
        <label
          className="text-base text-white text-right mr-20"
        >
          Number of Children
          <input
            type="number"
            name="number_of_child"
            value={inputs.number_of_child || ""}
            onChange={handleChange}
            className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          />
        </label><br />
        <label
          className="text-base text-white text-right mr-20"
        >
          Owner ID
          <input
            readOnly
            type="number"
            name="owner_id"
            value={id}
            onChange={handleChange}
            className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          />
        </label><br />
        <label
          className="text-base text-white text-right ml-2"
        >
          City
          <input
            type="text"
            name="city"
            value={inputs.city || ""}
            onChange={handleChange}
            className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          />
        </label><br />
        <label
          className="text-base text-white text-right mr-6"
        >
          Country:
          <input
            type="text"
            name="country"
            value={inputs.country || ""}
            onChange={handleChange}
            className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          />
        </label><br />
        <div className="text-center bg-violet-700">
        <button
          type="submit"
          className="bg-white text-slate-600 mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-violet-700 hover:text-white outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Finish
        </button>
        <button
          type="submit"
          className="bg-white text-slate-600 mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-red-700 hover:text-white outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={handleBack}
          >
            Cancel Register
        </button>
      </div>
      </form>
    </motion.div>
    </>
  );
}

export default DoggiesForm;
