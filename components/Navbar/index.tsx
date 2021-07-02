import { useState } from 'react';
import { FaStripe } from 'react-icons/fa';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Button from '../Button';
import ModalList from '../ModalList';
import siteLinks from '../../constants/siteLinks';

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('');
  console.log(activeMenu);
  return (
    <>
      <header className='flex justify-center'>
        <div className='flex justify-between items-center px-4 py-3 w-full max-w-4xl'>
          <div>
            <FaStripe size='48' className='fill-current text-white' />
          </div>
          <div className='flex'>
            <AnimateSharedLayout>
              {Object.entries(siteLinks).map((item) => {
                const title = item[1].title;
                return (
                  <div key={title} className='relative'>
                    <button
                      className='px-5 py-4 cursor-pointer text-white font-medium'
                      onMouseEnter={() => setActiveMenu(title)}
                      onMouseLeave={() => setActiveMenu('')}
                    >
                      {title}
                    </button>
                    {title === activeMenu && (
                      <motion.div
                        layoutId='hover'
                        className='rounded-t-full absolute bg-white w-3 h-3 inset-x-2/4 top-12'
                      />
                    )}
                  </div>
                );
              })}
            </AnimateSharedLayout>
            <button className='px-5 py-3 cursor-pointer text-white font-medium'>
              <a href=''>Pricing</a>
            </button>
          </div>
          <div>
            <Button label='Sign in' color='gray' />
          </div>
          <ModalList
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            siteLinks={siteLinks}
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;
