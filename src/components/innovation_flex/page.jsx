import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import Image from "next/image";
import flex_img from "@/images/innovation4.png";
import styles from "@/components/innovation_flex/innovation_flex.module.css";
const Page = () => {
  const text =
    "Royale Touche Plywood is a premium-grade Structural Plywood made from carefully selected hardwood timber, offering exceptional strength, high load-bearing capacity, durability against all weather conditions, fire retardant properties, and protection against termites and borer. Utilizing an advanced vacuum pressure treatment system with nano-molecule chemicals ensures top-notch performance and longevity of the plywood.".split(
      " "
    );
  const imageAnimationControls = useAnimation();
  return (
    <div>
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div ref={ref} className={styles.innovation_flex}>
            <InView triggerOnce={true}>
              {({ inView: inViewImg, ref: refImg }) => (
                <motion.div
                  ref={refImg}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inViewImg ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                    delay: inViewImg ? 1 : 0,
                  }}
                  className={styles.innovation_flex_fifty_side1}
                >
                  <Image
                    src={flex_img}
                    alt="image"
                    className={styles.flex_img_fifty}
                  />
                </motion.div>
              )}
            </InView>
            <div className={styles.innovation_flex_fifty_side2}>
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{
                    duration: 1,
                    delay: inView ? i / 20 : 0,
                  }}
                  key={i}
                  className={styles.innovation_flex_fifty_text}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </InView>
    </div>
  );
};
export default Page;
