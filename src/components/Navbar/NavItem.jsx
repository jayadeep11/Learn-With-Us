import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavItem = ({ name, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
  };

  return (
    <div className="flex items-center cursor-pointer p-2 rounded-md" onClick={handleClick}>
      <span>{name}</span>
    </div>
  );
};

export default NavItem;

