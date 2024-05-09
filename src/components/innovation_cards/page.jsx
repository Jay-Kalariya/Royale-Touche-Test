import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

import styles from "@/components/innovation_cards/innovation_cards.module.css";
const Page = ({
  link1,
  link2,
  link3,
  image1,
  image2,
  image3,
  card1Text,
  card2Text,
  card3Text,
}) => {
  const text =
    "Revitalize your living spaces with plywood - where craftsmanship meets everyday luxury.".split(
      " "
    );

  return (
    <div>
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div ref={ref}>
            <div className={styles.innovation_cards_outer}>
              <div className={styles.innovation_cards_text}>
                {text.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: inView ? i / 15 : 0,
                    }}
                    key={i}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </div>
              <div className={styles.flex_border}></div>

              <div className={styles.innovation_cards_flex}>
                <InView triggerOnce={true}>
                  {({ inView: inViewImg1, ref: refImg1 }) => (
                    <motion.div
                      ref={refImg1}
                      initial={{ opacity: 0, y: 30 }}
                      animate={inViewImg1 ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 1,
                        delay: inViewImg1 ? 0.7 : 0,
                      }}
                      className={styles.flexing}
                    >
                      <div className={styles.innovation}>
                        <div className={styles.innovation_flex_card1}>
                          <Image
                            src={image1}
                            alt="image"
                            className={styles.flex_img}
                          />
                        </div>
                        <div>
                          <p className={styles.flex_cards_name}>{card1Text}</p>
                          {link1 && (
                            <Link
                              className={styles.flex_cards_link}
                              href={link1}
                            >
                              View More
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </InView>

                <InView triggerOnce={true}>
                  {({ inView: inViewImg2, ref: refImg2 }) => (
                    <motion.div
                      ref={refImg2}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inViewImg2 ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        duration: 1,
                        delay: inViewImg2 ? 1 : 0,
                      }}
                      className={styles.flexing}
                    >
                      <div className={styles.innovation}>
                        <div className={styles.innovation_flex_card2}>
                          <Image
                            src={image2}
                            alt="image"
                            className={styles.flex_img}
                          />
                        </div>
                        <div>
                          <p className={styles.flex_cards_name}>{card2Text}</p>
                          {link2 && (
                            <Link
                              className={styles.flex_cards_link}
                              href={link2}
                            >
                              View More
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </InView>

                <InView triggerOnce={true}>
                  {({ inView: inViewImg3, ref: refImg3 }) => (
                    <motion.div
                      ref={refImg3}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inViewImg3 ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 1,
                        delay: inViewImg3 ? 1.3 : 0,
                      }}
                      className={styles.flexing}
                    >
                      <div className={styles.innovation}>
                        <div className={styles.innovation_flex_card3}>
                          <Image
                            src={image3}
                            alt="image"
                            className={styles.flex_img}
                          />
                        </div>
                        <div>
                          <p className={styles.flex_cards_name}>{card3Text}</p>
                          {link3 && (
                            <Link
                              className={styles.flex_cards_link}
                              href={link3}
                            >
                              View More
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </InView>
              </div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
};

export default Page;
