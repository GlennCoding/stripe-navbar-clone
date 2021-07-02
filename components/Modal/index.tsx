import { motion, AnimatePresence } from 'framer-motion';

const modal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  hiddenDelay: { opacity: 0, transition: { delay: 1 } },
};

const Modal: React.FC = ({ children }) => {
  return (
    <motion.div
      className='shadow-lg px-6 py-7 bg-white rounded-lg absolute'
      variants={modal}
      initial='hidden'
      animate='visible'
      exit='hiddenDelay'
    >
      {children}
    </motion.div>
  );
};

export default Modal;
