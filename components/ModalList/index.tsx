import { Dispatch, SetStateAction } from 'react';
import Modal from '../Modal';
import LinkWithIcon from '../LinkWithIcon';
import { SiteHeader } from '../../interfaces/siteHeader';
import { AnimatePresence } from 'framer-motion';

interface Props {
  activeMenu: string;
  setActiveMenu: Dispatch<SetStateAction<string>>;
  siteLinks: {
    products: SiteHeader;
    useCases: SiteHeader;
    developers: SiteHeader;
    company: SiteHeader;
  };
}

const ModalList: React.FC<Props> = ({
  activeMenu,
  setActiveMenu,
  siteLinks,
}) => {
  const { products, useCases, developers, company } = siteLinks;

  return (
    <div className='absolute right-0 bottom-0 right-0 w-full h-96 top-16'>
      <AnimatePresence>
        {activeMenu === 'Products' ? (
          <div
            className='relative w-100 flex justify-center'
            onMouseEnter={() => setActiveMenu('Products')}
            onMouseLeave={() => setActiveMenu('')}
          >
            <Modal>
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
            </Modal>
          </div>
        ) : activeMenu === 'Use cases' ? (
          <div
            className='relative w-100 flex justify-center'
            onMouseEnter={() => setActiveMenu('Use cases')}
            onMouseLeave={() => setActiveMenu('')}
          >
            <Modal>
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
            </Modal>
          </div>
        ) : activeMenu === 'Developers' ? (
          <div
            className='relative w-100 flex justify-center'
            onMouseEnter={() => setActiveMenu('Developers')}
            onMouseLeave={() => setActiveMenu('')}
          >
            <Modal>
              {developers.links.map((link, index) => (
                <LinkWithIcon
                  key={index}
                  icon={link.icon}
                  title={link.title}
                  description={link.description}
                />
              ))}
            </Modal>
          </div>
        ) : (
          activeMenu === 'Company' && (
            <div
              className='relative w-100 flex justify-center'
              onMouseEnter={() => setActiveMenu('Company')}
              onMouseLeave={() => setActiveMenu('')}
            >
              <Modal>
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
              </Modal>
            </div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalList;
