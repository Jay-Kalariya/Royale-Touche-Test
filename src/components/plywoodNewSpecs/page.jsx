import Image from "next/image";
import Specs_img1 from '@/images/spec1.svg';
import Specs_img2 from '@/images/spec2.svg';
import Specs_img3 from '@/images/spec3.svg';
import Specs_img4 from '@/images/spec4.svg';
import Specs_img5 from '@/images/spec5.svg';
import Specs_img6 from '@/images/spec6.svg';
import Specs_img7 from '@/images/spec7.svg';
import Specs_img8 from '@/images/spec8.svg';
import Specs_img9 from '@/images/spec9.svg';
import Specs_img10 from '@/images/spec10.svg';
import Specs_img11 from '@/images/spec11.svg';
import Specs_img12 from '@/images/spec12.svg';
import Specs_img13 from '@/images/spec13.svg';
import Specs_img14 from '@/images/spec14.svg';
import Specs_img15 from '@/images/spec15.svg';
import Specs_img16 from '@/images/spec16.svg';
import styles from "@/components/plywoodNewSpecs/plywoodNewSpec.module.css";
const Feature_specification = () => {
  return (
    <div className={styles.specs_container}>
      <div className={styles.specs_title}>
        <p className={styles.specs_text}>FEATURES SPECIFICATIONS:</p>
      </div>
      <div className={styles.specs_grid_container}>
        <div className={styles.grid_item}>
          <Image src={Specs_img1} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>Fire Retardant</p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img2} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>
              Vacuum Pressure
              <br /> Treatment
            </p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img3} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>
              Anti Viral
              <br /> Anti Fungal
            </p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img4} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>
              Fully Composed
              <br /> Core & Panels
            </p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img5} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>
              Fully
              <br /> Calibrated
            </p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img6} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>
              4 Press <br />
              Technology
            </p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img7} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>
              Boiling <br />
              Waterproof
            </p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img8} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>100% Gapless</p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img9} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>
              Imported Gurjan
              <br /> Face Veneer
            </p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img10} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>
              Termite &<br /> Borer Proof
            </p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img11} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>
              Carb Certified <br />
              E-O Emissions
            </p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img12} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>
              100% In-house
              <br /> Manufacturing
            </p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img13} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>
              Lifetime
              <br /> Warranty
            </p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img14} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>
              100% Phenolic
              <br /> Resins
            </p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img15} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>
              High Screw & <br />
              Nail Holding Capacity
            </p>
          </div>
        </div>

        <div className={styles.grid_item}>
          <Image src={Specs_img16} alt="img" className={styles.specs_grid_img} />
          <div className={styles.specs_grid_content}>
            <p className={styles.specs_grid_Content_text}>
              100% Hardwood
              <br /> Core
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature_specification;