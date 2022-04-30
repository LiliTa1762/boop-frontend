import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { motion } from 'framer-motion';

function OwnersForm() {
  const [inputs, setInputs] = useState("");
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const handleChange = (e) => {
    setInputs(({...inputs, [e.target.name]: e.target.value}));
  }

  const handleBack = (e) => {
    navigate('/doggies');
    //Alert warning
    MySwal.fire({
      title: <strong>The registration has been canceled</strong>,
      icon: 'warning'
    })
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const ownerData = {
        name: inputs.name,
        lastname: inputs.lastname,
        email: inputs.email,
        phone: parseInt(inputs.phone),
        interests: inputs.interests,
        neighborhood: inputs.neighborhood,
        city: inputs.city,
        country: inputs.country
      }
      axios.post('http://localhost:9000/owner/create',
      ownerData).then((response) => {
      setInputs({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        interests: '',
        neighborhood: '',
        city: '',
        country: ''
      })
      //Alert success
      MySwal.fire({
        title: <strong>Welcome {inputs.name}!</strong>,
        icon: 'success'
      })
      const newID = response.data.dataForm.id;
      navigate(`/doggie/create/${newID}`);
    })
  }

  return (
    <>
    <motion.div
      className="bg-violet-700 pt-20 pb-40 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity:0 }}
    >
      <div className="text-center">
          <h1 className="text-white text-4xl font-bold uppercase leading-normal">Owners Register</h1>
          <p className="text-white text-sm py-3 italic">Let's create a profile for your dog... but first let's get to know you!</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="text-center bg-violet-700 mt-10">
          <label
            className="text-base text-white text-right"
          >
            Name
            <input
              placeholder="Peter"
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange} 
              className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
            />
          </label><br />
          <label
            className="text-base text-white text-right mr-6"
          >
            Lastname
            <input
              placeholder="Kavisqui"
              type="text"
              name="lastname"
              value={inputs.lastname || ""}
              onChange={handleChange}
              className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
            />
          </label><br />
          <label
            className="text-base text-white text-right"
          >
            E-Mail
            <input
              placeholder="peterk@mail.com"
              type="email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
              className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
            />
          </label><br />
          <label
            className="text-base text-white text-right"
          >
            Phone
            <input
              placeholder="24478573"
              type="number"
              name="phone"
              value={inputs.phone || ""}
              onChange={handleChange}
              className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
            />
          </label><br />
          <label
            className="text-base text-white text-right mr-6"
          >
            About Me
            <input
              placeholder="Write something you'd love others to know"
              type="text"
              maxLength="200"
              name="interests"
              value={inputs.interests || ""}
              onChange={handleChange}
              className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
            />
          </label><br />
          <p className="text-slate-200 text-xs italic">0/200</p>
          <label
            className="text-base text-white text-right mr-14"
          >
            Neighborhood
            <input
              placeholder="Key Biscayne"
              type="text"
              maxLength="25"
              name="neighborhood"
              value={inputs.neighborhood || ""}
              onChange={handleChange}
              className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
            />
          </label><br />
          <label
            className="text-base text-white text-right ml-3"
          >
            City
            <input
              placeholder="Miami"
              type="text"
              maxLength="10"
              name="city"
              value={inputs.city || ""}
              onChange={handleChange}
              className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
            />
          </label><br />
          <label
            className="text-base text-white text-right mr-4"
          >
            Country
            <input
              placeholder="EE.UU"
              type="text"
              maxLength="10"
              name="country"
              value={inputs.country || ""}
              onChange={handleChange}
              className="ml-4 py-1 my-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
            />
          </label>
      <div className="text-center bg-violet-700">
        <button
          type="submit"
          className="bg-white text-slate-600 mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-violet-700 hover:text-white outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Continue
        </button>
        <button
          type="button"
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

export default OwnersForm;
