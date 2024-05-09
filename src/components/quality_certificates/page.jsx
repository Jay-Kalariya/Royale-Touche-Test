import Image from "next/image";
import Certificate_image from "@/images/certificate_img.png";
import styles  from "@/components/quality_certificates/qualityCerticates.module.css"
const Certificates = () => {
  return (
    <div className={styles.Certificate_Container}>
      <div className={styles.Certificate_title}>
        <p className={styles.certificate_text}>Certificate</p>
      </div>
      <div className={styles.Certificates_Header}>
        <div>
          <Image src={Certificate_image} className={styles.Certificate_img}  alt="image" />
        </div>
        <div>
          <Image src={Certificate_image} className={styles.Certificate_img} alt="image" />
        </div>
        <div>
          <Image src={Certificate_image} className={styles.Certificate_img} alt="image" />
        </div>
        <div>
          <Image src={Certificate_image} className={styles.Certificate_img} alt="image" />
        </div>
        <div>
          <Image src={Certificate_image} className={styles.Certificate_img} alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Certificates;