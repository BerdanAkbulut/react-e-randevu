import React from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="bg-gray-200 flex items-center p-6 px-16">
      <p
        onClick={() => {
          navigate('/');
        }}
        className=" chng text-[24px]  cursor-pointer hover:scale-110 transition-all ease-in-out hover:opacity-80 "
      >
        E-randevu
      </p>
    </div>
  );
};

export default Header;
