import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/finl.png'



const MobileMenu = ({ toggle }) => {
  
 const [showSolutions, setShowSolutions] = useState(false);

  const solutionItems = [
    { name: "AI / ML", path: "/solutions/aiml" },
    { name: "Cloud Migration", path: "/solutions/cloud-migration" },
    { name: "VDI", path: "/solutions/vdi" },
    { name: "Generative AI", path: "/solutions/generative-ai" },
    { name: "Managed Cloud Services", path: "/solutions/managed-cloud-services" },
    { name: "Modernization", path: "/solutions/modernization" },
    { name: "Pinpoint", path: "/solutions/pinpoint" },
  ];

  return (
    <div className="fixed top-0 left-0 w-72 h-full bg-dark text-white p-4 z-50 shadow-lg transition-transform transform translate-x-0 md:hidden border-r-2 border-stone-700">
      {/* Close Button */}
      <div className="flex justify-between items-center  mb-6 ">
        <div className='w-[120px]'>

          <Link to='/' >
            <img src={logo} alt="" className='w-full' />

          </Link>
        </div>
        <button onClick={toggle} aria-label="Close menu" className="text-2xl">
          ✕
        </button>
      </div>

      <ul className="space-y-1 text-sm font-medium">
        <li>
          <Link
            to="/"
            onClick={toggle}
            className="block py-2 hover:bg-violet-700 hover:text-white hover:shadow-md transition-all duration-200 ease-in-out p-2 px-3 rounded-lg"
          >
            Home
          </Link>
        </li>

        {/* Solutions Dropdown */}
        <li>
          <button
            onClick={() => setShowSolutions(!showSolutions)}
            className="w-full text-x text-left flex uppercase justify-between items-center py-2  hover:bg-violet-700 hover:text-white hover:shadow-md transition-all duration-200 ease-in-out p-2 px-3 rounded-lg"
          >
            <span>Solutions</span>
            <span
              className={`transform transition-transform duration-300 ${showSolutions ? 'rotate-180' : 'rotate-0'
                }`}
            >
              ▼
            </span>
          </button>

          {showSolutions && (
            <ul className="ml-4 mt-1 space-y-1">
              {solutionItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={toggle}
                    className="block  py-1 text-sm  hover:bg-violet-700 hover:text-white hover:shadow-md transition-all duration-200 ease-in-out p-2 px-3 rounded-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <Link
            to="/tech-studio"
            onClick={toggle}
            className="block py-2  hover:bg-violet-700 hover:text-white hover:shadow-md transition-all duration-200 ease-in-out p-2 px-3 rounded-lg"
          >
            Tech Studio
          </Link>
        </li>
        <li>
          <Link
            to="/contect"
            onClick={toggle}
            className="block  py-2 hover:bg-violet-700 hover:text-white hover:shadow-md transition-all duration-200 ease-in-out p-2 px-3 rounded-lg"
          >
            Contact
          </Link>
          <Link
            to="/resource"
            onClick={toggle}
            className="block  py-2  hover:bg-violet-700 hover:text-white hover:shadow-md transition-all duration-200 ease-in-out p-2 px-3 rounded-lg"
          >
            Resource
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
