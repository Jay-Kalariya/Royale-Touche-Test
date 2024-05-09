import styles from "@/components/whyPlywood/whyPlywood.module.css";
import Image from "next/image";

const WhyPlywoodItem = ({ image, content }) => {
  return (
    <div className={styles.whyPlywoodItem}>
      <div className={styles.wrapper}>
        <div className={styles.plywood_icon}>
          <Image src={image} alt="why_plywood" />
        </div>
        <div className={styles.plywood_content}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
export default WhyPlywoodItem;
