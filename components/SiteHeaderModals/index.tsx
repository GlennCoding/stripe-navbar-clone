import { Dispatch, SetStateAction } from 'react';
import Modal from '../Modal';
import LinkWithIcon from '../LinkWithIcon';
import { SiteHeader } from '../../interfaces/siteHeader';
import { AnimatePresence } from 'framer-motion';

interface Props {
  activeMenu: string;
  setActiveMenu: Dispatch<SetStateAction<string>>;
  siteHeaderList: SiteHeader[];
}

const ModalList: React.FC<Props> = ({
  activeMenu,
  setActiveMenu,
  siteHeaderList,
}) => {
  const products = siteHeaderList[0];
  const useCases = siteHeaderList[1];
  const developers = siteHeaderList[2];
  const company = siteHeaderList[3];

  return (
    <div className='absolute right-0 bottom-0 right-0 w-full top-16 flex justify-center items-start'>
      <div
        onMouseEnter={() => setActiveMenu(activeMenu)}
        onMouseLeave={() => setActiveMenu('')}
      >
        <Modal>
          {activeMenu === 'Products' ? (
            <div className='grid grid-cols-2 gap-x-6'>
              <div className='w-64'>
                <h3 className='mb-4 text-gray-400'>Payments</h3>
                <LinkWithIcon
                  icon={products.links[0].icon}
                  title={products.links[0].title}
                  description={products.links[0].description}
                />
              </div>
              <div className='w-64'>
                <h3 className='mb-4 text-gray-400'>Financial Services</h3>
                <LinkWithIcon
                  icon={products.links[1].icon}
                  title={products.links[1].title}
                  description={products.links[1].description}
                />
              </div>
            </div>
          ) : activeMenu === 'Use cases' ? (
            <div className='grid grid-cols-2 gap-x-6'>
              {useCases.links.map((link, index) => (
                <LinkWithIcon
                  key={index}
                  icon={link.icon}
                  title={link.title}
                  description={link.description}
                />
              ))}
            </div>
          ) : activeMenu === 'Developers' ? (
            developers.links.map((link, index) => (
              <LinkWithIcon
                key={index}
                icon={link.icon}
                title={link.title}
                description={link.description}
              />
            ))
          ) : (
            activeMenu === 'Company' && (
              <div className='grid grid-cols-2 gap-x-6'>
                {company.links.map((link, index) => (
                  <div key={index} className='w-44'>
                    <LinkWithIcon
                      icon={link.icon}
                      title={link.title}
                      description={link.description}
                      arrow={false}
                    />
                  </div>
                ))}
              </div>
            )
          )}
        </Modal>
      </div>
    </div>
  );
};

export default ModalList;
