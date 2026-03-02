import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ onItemClick }) => {
  const items = [
    { name: "AI / ML", path: "/solutions/aiml" },
    { name: "Cloud Migration", path: "/solutions/cloud-migration" },
    { name: "VDI", path: "/solutions/vdi" },
    { name: "Generative AI", path: "/solutions/generative-ai" },
    { name: "Managed Cloud Services", path: "/solutions/managed-cloud-services" },
    { name: "Modernization", path: "/solutions/modernization" },
    { name: "Pinpoint", path: "/solutions/pinpoint" },
  ];

  return (
    <ul className="w-56 bg-white text-black border border-gray-200 rounded shadow-lg">
      {items.map((item) => (
        <li key={item.name}>
          <Link
            to={item.path}
            onClick={onItemClick} // This is the key change
            className="block  py-2 text-black hover:bg-violet-700 hover:text-white hover:shadow-md transition-all duration-200 ease-in-out p-2 px-3 "
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
