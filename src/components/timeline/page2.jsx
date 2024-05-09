import { useRef, useEffect } from "react";
import Image from "next/image";
import usp1 from "@/images/ix1x.jpg";
import usp2 from "@/images/ix2x.jpg";
import usp3 from "@/images/ix3x.jpg";
import usp4 from "@/images/ix4x.jpg";
import usp5 from "@/images/ix5x.jpg";
import usp6 from "@/images/ix6x.jpg";
// import usp7 from "@/images/ix7x.jpg";
import usp8 from "@/images/alone.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "@/components/timeline/time.module.css";
const Page2 = () => {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    // gsap.to(".triggered-element", {
    //   scrollTrigger: {
    //     trigger: container.current,
    //     scrub: 1,
    //     start: "top 10%",
    //     end: "bottom ",
    //   },
    //   opacity: 0,
    //   color: "white",
    //   ease: "none",
    //   stagger: 0.9,
    // });
  };
  return (
    <div className={styles.display}>
      <div className={styles.first_timeline_outer}>
        <div className={styles.first_timeline_inner}>
          <div className={styles.timeline_animation_text}>
            Promise Of Quality
          </div>
          <div className={styles.timeline} ref={container}>
            <div className={styles.line}></div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <div className={styles.img_main_outer}>
                  <Image src={usp1} alt="image" className={styles.img_main} />
                </div>
                <p className={styles.timeline_number}>01</p>
                <h2 className={styles.twoo}>Vacuum Pressure Treatment</h2>
                <p className={styles.timeline_sec_comment}>
                  The only plywood in India made with 100% scientifically
                  researched proprietary Vacuum Pressure Chemical Treated veneer
                  to provide protection against termites, borers and fire
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <div className={styles.img_main_outer}>
                  <Image src={usp2} alt="image" className={styles.img_main} />
                </div>
                <p className={styles.timeline_number}>02</p>
                <h2 className={styles.twoo}>Fully Composed Core & Panels</h2>
                <p className={styles.timeline_sec_comment}>
                  100% composed veneer sheets made using sophisticated core and
                  panel composers to ensure precise manufacturing of high
                  quality plywood
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <div className={styles.img_main_outer}>
                  <Image src={usp3} alt="image" className={styles.img_main} />
                </div>
                <p className={styles.timeline_number}>03</p>
                <h2 className={styles.twoo}>100% Phenolic Resins</h2>
                <p className={styles.timeline_sec_comment}>
                  100% BWP grade high solid phenolic polymers ensures excellent
                  bonding and waterproof properties.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <div className={styles.img_main_outer}>
                  <Image src={usp4} alt="image" className={styles.img_main} />
                </div>
                <p className={styles.timeline_number}>04</p>
                <h2 className={styles.twoo}>Termite & Borer Proof</h2>
                <p className={styles.timeline_sec_comment}>
                  Shielded against microbes, viruses, bacteria, fungi, termites,
                  and borers in their favourable conditions.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <div className={styles.img_main_outer}>
                  <Image src={usp5} alt="image" className={styles.img_main} />
                </div>
                <p className={styles.timeline_number}>05</p>
                <h2 className={styles.twoo}>Fire Resistant</h2>
                <p className={styles.timeline_sec_comment}>
                  Fully vacuum pressure-treated veneer with fire-retardant
                  chemical containing nano particles, and organ phosphorus
                  chemicals used during the process, providing excellent
                  fire-retardant properties.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <div className={styles.img_main_outer}>
                  <Image src={usp6} alt="image" className={styles.img_main} />
                </div>
                <p className={styles.timeline_number}>06</p>
                <h2 className={styles.twoo}>Boiling Water Proof</h2>
                <p className={styles.timeline_sec_comment}>
                  100% BWP grade high solid phenolic polymers ensures excellent
                  bonding and waterproof properties.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <div className={styles.img_main_outer}>
                  <Image src={usp8} alt="image" className={styles.img_main} />
                </div>
                <p className={styles.timeline_number}>07</p>
                <h2 className={styles.twoo}>High Screw & Nail Holding Capacity</h2>
                <p className={styles.timeline_sec_comment}>
                  made from all composed full sheet veneers of select hardwood
                  species, ensuring a robust and well-structured plywood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
