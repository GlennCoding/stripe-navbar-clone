import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import ModalList from '../SiteHeaderModals';
import siteHeaderList from '../../constants/siteHeaderList';

const SiteHeaders: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('');
  return (
    <>
      <AnimateSharedLayout>
        {siteHeaderList.map((header) => {
          const title = header.title;
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
      <AnimatePresence>
        {activeMenu && (
          <ModalList
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            siteHeaderList={siteHeaderList}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SiteHeaders;
