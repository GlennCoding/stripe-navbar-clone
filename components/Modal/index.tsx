import { motion } from 'framer-motion';

const modal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};
const Modal: React.FC = ({ children }) => {
  return (
    <motion.div
      className={`shadow-lg p-10`}
      variants={modal}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      {children}
    </motion.div>
  );
};

export default Modal;
