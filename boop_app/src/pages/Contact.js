import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      className="bg-violet-700 pt-20 pb-40"
      initial={{ opacity: 3 }}
      animate={{ opacity: 5 }}
      exit={{ opacity: 3 }}
    >
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold uppercase leading-normal">Contact us</h1>
        <span className="text-white text-sm italic">Get in touch and let us know how we can help</span>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-40 pb-auto">
        <div className="bg-white mx-6 p-4 rounded border-double border-4 border-violet-500 text-center">
          <h2 className="text-violet-500 text-l font-bold uppercase mb-3">Doggies</h2>
          <p className="text-violet-500 text-sm">We'd love to meet your doggies and match them with a lovely partner</p>
          <button className="bg-violet-500 text-white active:bg-violet-600 mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Add a doggie
          </button>
        </div>
        <div className="bg-white mx-6 p-4 rounded border-double border-4 border-violet-500 text-center">
          <h2 className="text-violet-500 text-l font-bold uppercase mb-3">Walkers</h2>
          <p className="text-violet-500 text-sm">Be part of our awesome staff, we love doggies!</p>
          <button className="bg-violet-500 text-white active:bg-violet-600 mt-10 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            I wanna be a walker!
          </button>
        </div>
        <div className="bg-white mx-6 p-4 rounded border-double border-4 border-violet-500 text-center">
          <h2 className="text-violet-500 text-l font-bold uppercase mb-3">Media</h2>
          <p className="text-violet-500 text-sm">Get news, doggies info and media resources</p>
          <button className="bg-violet-500 text-white active:bg-violet-600 mt-10 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Visit newsroom
          </button>
        </div>
      </div>
    </motion.div>
  );
}
export default Contact;
