import React from 'react';
import Logo_white from '../boop-white.png';

const Footer = () =>{
  return (
    <>
      {/* Footer section */}
      <footer className="flex items-center justify-center py-3 bg-violet-700">
          <div className="">
            <div className="ml-0">
                <img src={Logo_white} alt="Boop logo in color white" className="mb-0" width="150" height="50" />
            </div>
            <div className="ml-7">
              <span className="text-slate-300 text-xs">©Boop 2022</span>
            </div>
            <div className="ml-3">
                <ul className="flex flex-row mt-7">
                  <li className="mx-3">
                    <a href="https://www.facebook.com/HolbertonSchool/" aria-label="">
                      <i className="fa fa-facebook-square text-white" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="mx-3">
                    <a href="https://twitter.com/holbertonschool" aria-label="">
                      <i className="fa fa-twitter-square text-white" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="mx-3">
                    <a href="https://www.instagram.com/holbertonschool/" aria-label="">
                      <i className="fa fa-instagram text-white" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
            </div>
          </div>
    </footer>
    </>
  );
}
export default Footer;
