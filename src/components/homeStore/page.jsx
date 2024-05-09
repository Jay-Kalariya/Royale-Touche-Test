import Image from "next/image";
import homepage_box from "@/images/india.svg";
import Button from "@/common/button/button2";
import styles from "@/components/homeStore/pageStore.module.css";
const Page = () => {
  return (
    <>
      <div className={styles.responsive_section}>
        <div className={styles.content1}>
          <p className={styles.heading}>
            {"Discover the elegance of"}
            <span> {"Royale Touché"} </span> {" Performance Ply"}
          </p>
          <p className={styles.content}>
            {"Looking to experience the luxury of"}
            <span>{" Royale Touché "}</span>
            {
              "Performance Ply that can transform your furniture? You’re just a click away from exploring our range of plywood and getting expert advice from our trusted partners."
            }
          </p>
          <div className={styles.common_button_outer3}>
            <Button btn_text="FIND A PLYWOOD SHOP NEAR ME" />
          </div>
        </div>
        <div className={styles.image_wrapper}>
          <Image src={homepage_box} alt="Your Image" className={styles.image} />
        </div>
      </div>
    </>
  );
};

export default Page;
