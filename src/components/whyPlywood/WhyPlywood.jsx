import styles from "@/components/whyPlywood/whyPlywood.module.css";
import image1 from "@/images/whyPlywood-image1.svg";
import image2 from "@/images/whyPlywood-image2.svg";
import image3 from "@/images/whyPlywood-image3.svg";
import image4 from "@/images/whyPlywood-image4.svg";
import WhyPlywoodItem from "./WhyPlywoodItem";
import Image from "next/image";
import newImage from "@/images/whyPlywoodNew1.jpg";


const whyPlywoodData = [
  {
    image: image1,
    content:
      "With the exponential boom in the building industry, Royale Touche decided to venture into another vertical that aligned with our supply chain and value proposition",
  },
  {
    image: image2,
    content:
      "At the time, we realized that the plywood market in India was extremely fragmented and saturated with organized and unorganized players.",
  },
  {
    image: image3,
    content:
      "Every single brand in the market had a plethora of ranges of plywood with varying qualities, with almost negligible customer awareness about what comprises a good quality plywood.",
  },
  {
    image: image4,
    content:
      "With the aim of providing a quality product to customers making their dream home, and educating them to make an informed decision, Royale Touché has introduced Royale Touché Performance Ply - a ply that has it all.",
  },
];

const WhyPlywood = () => {
  return (
    <div className={styles.whyPlywood}>
      
      <div className={styles.whyPlywoodItem_wrap}>
        {/* {whyPlywoodData.map((item, index) => (
          <WhyPlywoodItem key={index} {...item} />
        ))} */}
        <div className={styles.left}>
        <div className={styles.whyPlywood_heading}>Why Plywood</div>
          <ul>
          
            <li>
              With the exponential boom in the building industry, Royale Touche
              decided to venture into another vertical that aligned with our
              supply chain and value proposition
            </li>
            <li>
              At the time, we realized that the plywood market in India was
              extremely fragmented and saturated with organized and unorganized
              players.
            </li>
            <li>
              Every single brand in the market had a plethora of ranges of
              plywood with varying qualities, with almost negligible customer
              awareness about what comprises a good quality plywood.
            </li>
            <li>
              With the aim of providing a quality product to customers making
              their dream home, and educating them to make an informed decision,
              Royale Touché has introduced Royale Touché Performance Ply - a ply
              that has it all.
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <Image src={newImage} alt="newImage" />
        </div>
      </div>
    </div>
  );
};
export default WhyPlywood;
