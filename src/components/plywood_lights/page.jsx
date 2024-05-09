import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import plywood_wall_light from "@/images/wall_light.png";
import plywood_standing_lamp from "@/images/standing_lamp.png";
import plywood_desk from "@/images/product_overview_new.png";
import Promax_image from "@/images/Promax.png";
import Promaxplus_image from "@/images/Promax-plusNew.png";
import styles from "@/components/plywood_lights/plywood.module.css";
const Page = () => {
  // const deskControls = useAnimation();
  // const lampControls = useAnimation();
  // const wallLightControls = useAnimation();
  // const textControls = useAnimation();
  // const [deskRef, deskInView] = useInView({
  //   triggerOnce: true,
  // });
  // const [lampRef, lampInView] = useInView({
  //   triggerOnce: true,
  // });
  // const [wallLightRef, wallLightInView] = useInView({
  //   triggerOnce: true,
  // });
  // Animation for plywood_desk_outer
  // const deskAnimation = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.8, ease: "easeOut" },
  //   },
  // };
  // Animation for plywood_standing_lamp
  // const lampAnimation = {
  //   hidden: { opacity: 0, x: 50 },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { duration: 0.8, ease: "easeOut" },
  //   },
  // };
  // Animation for plywood_wall_light_outer
  // const wallLightAnimation = {
  //   hidden: { opacity: 0, y: -50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.8, ease: "easeOut" },
  //   },
  // };
  // const startSequentialAnimation = async () => {
    // await wallLightControls.start("visible");
    // await lampControls.start("visible");
    // await deskControls.start("visible");
    // await textControls.start("visible");
  // };
  // if (deskInView) {
  //   startSequentialAnimation();
  // }
  const text = [
    "Royale",
    "Touche",
    "Plywood",
    "is",
    "a",
    "premium-grade",
    "Structural",
    "Plywood",
    "made",
    "from",
    "carefully",
    "selected",
    "hardwood",
    "timber,",
    "offering",
    "exceptional",
    "strength,",
    "high",
    "load-bearing",
    "capacity,",
    "durability",
    "against",
    "all",
    "weather",
    "conditions,",
    "fire",
    "retardant",
    "properties,",
    "and",
    "protection",
    "against",
    "termites",
    "and",
    "borer.",
    "Utilizing",
    "an",
    "advanced",
    "vacuum",
    "pressure",
    "treatment",
    "system",
    "with",
    "nano-molecule",
    "chemicals",
    "ensures",
    "top-notch",
    "performance",
    "and",
    "longevity",
    "of",
    "the",
    "plywood.",
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  // const textAnimation = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { type: "spring", stiffness: 200, damping: 20 },
  //   },
  // };
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.plywood_lights_outer}>
        <div className={styles.plywood_lights_one}>
          <div className={styles.plywood_lights_text_outer} ref={ref}>
            <motion.div
              className={styles.plywood_lights_text}
              // animate={textControls}
              // initial="hidden"
              // variants={textAnimation}
            >
              Product Overview
            </motion.div>
            <p className={styles.plywood_lights_small_text}>
              {
                "Royale Touche Performance Ply is a premium-grade waterproof plywood made from carefully selected hardwood timber, offering exceptional strength, high load- bearing capacity, durability against all weather conditions and protection against termites and borers. Utilizing an advanced vacuum pressure treatment system with nano-molecule chemicals ensures top-notch performance and longevity of the plywood. With E-0 compliance and fire retardant properties, it is an all in one plywood in its true sense."
              }
            </p>
            <div className={styles.promaxxx_img}>
            <div>
              <Image
                className={styles.plywood_promax}
                src={Promax_image}
                alt="image"
              />
            </div>
            <div>
              <Image
                className={styles.plywood_promaxplus}
                src={Promaxplus_image}
                alt="image"
              />
            </div>
            </div>
          </div>
          <motion.div
            className={styles.plywood_wall_light_outer}
            // ref={wallLightRef}
            // animate={wallLightControls}
            // initial="hidden"
            // variants={wallLightAnimation}
          >
            {/* <Image
              className={styles.plywood_wall_light}
              src={plywood_wall_light}
              alt="image"
            /> */}
          </motion.div>
        </div>
        <div className={styles.plywood_lights_two}>
          <div className={styles.plywood_standing_lamp}>
            <motion.div
              className={styles.plywood_standing_lamp_lamp}
              // ref={lampRef}
              // animate={lampControls}
              // initial="hidden"
              // variants={lampAnimation}
            >
              {/* <Image src={plywood_standing_lamp} alt="image" /> */}
            </motion.div>
          </div>
          <motion.div
            className={styles.plywood_desk_outer}
            // ref={deskRef}
            // animate={deskControls}
            // initial="hidden"
            // variants={deskAnimation}
          >
            <Image className={styles.plywood_desk} src={plywood_desk} alt="" />
          </motion.div>
          <motion.div
            className={styles.plywood_wall_light_outer}
            // ref={wallLightRef}
            // animate={wallLightControls}
            // initial="hidden"
            // variants={wallLightAnimation}
          >
            {/* <Image
              className={styles.plywood_wall_light_mobile}
              src={plywood_wall_light}
              alt="image"
            /> */}
            
            <div className={styles.thickness_inner}>
            <div className={styles.thickness_text}>
             <p >Available thickness:</p>
             <p className={styles.thickness_text_inner}>25mm | 19mm | 16mm | 12mm | 9mm | 6mm </p>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Page;
