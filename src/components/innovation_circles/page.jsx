
import Image from "next/image";
import Functionality_Image from "@/images/Functionality.png";
import Innovation_Image from "@/images/Innovation_img.png";
import Design_Image from "@/images/Design_img.png";
import styles from "@/components/innovation_circles/circle.module.css";
const RT_Circle = () => {
  return (
    <div className={styles.Main_Circle_Container}>
      <div className={styles.Main_Circle_Section}>
        <div className={styles.Main_Circle_Image_Section}>
          <Image
            src={Functionality_Image}
            alt="none"
            className={styles.Image_main}
          />
          <div className={styles.Main_circle_overlay_text}>
            <p className={styles.Overlay_text}>Functionality</p>
          </div>
        </div>

        <div className={styles.Main_Circle_Image_Section}>
          <Image
            src={Innovation_Image}
            alt="none"
            className={styles.Image_main}
          />
          <div className={styles.Main_circle_overlay_text}>
            <p className={styles.Overlay_text}>Innovation</p>
          </div>
        </div>

        <div className={styles.Main_Circle_Image_Section}>
          <Image src={Design_Image} alt="none" className={styles.Image_main} />
          <div className={styles.Main_circle_overlay_text}>
            <p className={styles.Overlay_text}>Design</p>
          </div>
        </div>
      </div>
      <div className={styles.Circle_Text_Container}>
        <p className={styles.Circle_Text}>
          About Plywood who accept nothing less than the finest. Super
          Exclusive, handcrafted luxury laminates that make a bold statement.
          Always Classy, Beautifully Luxurious. ONE transcends trends to create
          timeless elegance.
        </p>
      </div>
    </div>
  );
};
export default RT_Circle;
