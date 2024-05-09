import Image from "next/image";
import "./blockwood_flex.css";
import rectangle from "@/images/blockCardnew.jpg";
import rectangle2 from "@/images/blockCardnew2.png";

const Slide_section = () => {
  return (
    <>
      <div className="section">
        <div className="card_section">
          <div className="left blockCardPosition">
            <Image src={rectangle} alt="image" />
            <div className="blockCardText1">
              <div className="blockCardTextHeading">100% Pine Core</div>
              <div className="blockCardTextContent">
                The edge-to-edge arrangement of pine blocks in the core ensures
                zero gap filling, ensuring exceptional strength and stability to
                the blockboard
              </div>
            </div>
          
          </div>
          <div className="right blockCardPosition">
            <Image src={rectangle2} alt="image" />
            <div className="blockCardText2">
              <div className="blockCardTextHeading">
                Dual Hardwood Veneer for Ultra-smooth Surface
              </div>
              <div className="blockCardTextContent">
                Two layers of selected hardwood timber on both sides, with 100%
                Gurjan face ensures unparalleled strength and ultra smooth
                finish, making it suitable for high-quality finishes in
                furniture and interior panelling
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide_section;
