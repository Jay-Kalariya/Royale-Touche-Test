import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '@/components/quality_text/quality_text.module.css';

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const SmallText = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // This can be adjusted based on when you want the animation to start
  });

  return (
    <div className={styles.smallText}>
      <div className={styles.wrapper}>
        <motion.p
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
          variants={textVariants}
        >
          <span>Royale Touché Marine Grade Plywood (IS:710)</span> is a
          renowned product known for its superior quality and durability. It is
          specially designed for applications that require resistance to
          moisture, water, and other environmental factors.
        </motion.p>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.3 }}
          variants={textVariants}
        >
          Royale Touche Marine-grade plywood is a high-quality engineered wood
          product and it is conforming to the IS:710 Indian Standard, indicating
          its compliance with stringent quality and performance requirements.
        </motion.p>
      </div>
    </div>
  );
};

export default SmallText;
