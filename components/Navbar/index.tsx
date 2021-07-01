import React from 'react';
import { FaStripe } from 'react-icons/fa';
import Button from '../Button';

const Navbar: React.FC = () => {
  return (
    <div>
      <div>
        <FaStripe />
      </div>
      <div>
        <a>Products</a>
        <a>Use cases</a>
        <a>Developers</a>
        <a>Company</a>
        <a>Pricing</a>
      </div>
      <div>
        <Button label='Sign in' color='gray' />
      </div>
    </div>
  );
};

export default Navbar;
