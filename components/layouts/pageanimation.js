import { motion } from 'framer-motion';

const AnimationLayout = ({ children, i }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };
  return (
    <motion.div
      variants={variants}
      initial={'hidden'}
      animate={'enter'}
      exit={'exit'}
      transition={{ duration: 0.4, delay: i * 0.1, type: 'easeInOut' }}>
      {children}
    </motion.div>
  );
};

export default AnimationLayout;
