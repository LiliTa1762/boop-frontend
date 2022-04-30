import React from 'react';
import bruce from './images/doggies/bruce_borderCollie.jpg';
import milo from './images/doggies/milo_germanShepherd.jpg';
import codie from './images/doggies/codie_borderCollie.jpg';
import lucky from './images/doggies/lucky_borderCollie.jpg';
import kenneth from './images/owners/kenneth_martin.jpg';
import jhon from './images/walkers/jhon_barjuca.jpg';
import joshua from './images/owners/joshua_taylor.jpg';
import { motion } from 'framer-motion';

const Home = () =>{
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 5 }}
      exit={{ opacity:0 }}
      className="bg-white"
    >
      <div className="text-center">
        <h1 className="pt-20 pb-10 text-6xl font-sans font-bold uppercase leading-normal mb-6 text-purple-700">Doggies wanna match</h1>
      </div>
      <div className="flex justify-center pb-12">
        <div className="w-6/12 sm:w-4/12 px-4">
          <img src={bruce} alt="choose doggie two" className="object-contain h-56 w-auto sm:mx-0 sm:shrink-0"></img>
            <div className='pt-3 text-center font-bold  text-black'>
              <p className='text-base'>Bruce</p>
              <p className='text-base'>2 years old</p>
            </div>
        </div>
        <div className="w-6/12 sm:w-4/12 px-4">
          <img src={milo} alt="choose doggie three" className="object-contain h-56 w-auto sm:mx-0 sm:shrink-0"></img>
          <div className="pt-3 text-center font-bold text-black">
              <p className="text-base">Milo</p>
              <p className="text-base">2 years old</p>
            </div>
        </div>
        <div className="w-6/12 sm:w-4/12 px-4">
          <img src={codie} alt="choose doggie four" className="object-contain h-56 w-auto sm:mx-0 sm:shrink-0"></img>
          <div className="pt-3 text-center font-bold text-black">
              <p className="text-base">Codie</p>
              <p className="text-base">2 years old</p>
            </div>
        </div>
      </div>
      <div className="bg-gray-100 py-10 flex justify-center pl-36">
        <img src={joshua} alt="owner smiling with two dogs"></img>
        <div className="grid content-around">
          <p className="pl-6 text-8xl text-black hover:font-mono"><strong className="hover:text-violet-700">Boop Boop</strong> be happy</p>
        </div>
      </div>
      {/* ABOUT US */}
      <div className="bg-white grid justify-items-center py-28">
        <div className="my-16">
          <h2 className="text-violet-700 text-6xl font-bold uppercase leading-normal">About Us</h2>
        </div>
        <div className="carousel rounded-box object-cover h-48 w-96">
          <div className="carousel-item ">
            <img src={lucky} alt="cash bulldog doggie" />
          </div> 
          <div className="carousel-item">
            <img src={jhon} alt="walker jhon" />
          </div> 
          <div className="carousel-item">
            <img src={kenneth} alt="owner kenneth" />
          </div> 
        </div>
        <div>
          <p className="text-black text-xl pt-10 pb-5 text-center">
            BooP is an app where you, as <strong className="underline decoration-violet-700">doggie </strong> lover <br /> can find everything you need,
            from a <strong className="underline decoration-violet-700">match </strong>for your puppy to a<br /> <strong className="underline decoration-violet-700">walker </strong>who takes him out for a walk every day!
          </p>
        </div>
      </div>
    </motion.div>
    </>
  );
}
export default Home;
