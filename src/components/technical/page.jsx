// TechnicalSpecifications.js
import { useState } from "react";
import styles from "@/components/technical/technical.module.css"; // Ensure the path is correct

const TechnicalSpecifications = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore); // Toggle the state to show/hide additional data
  };

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>{"TECHNICAL SPECIFICATIONS:"}</h2>
        <div className={styles.specification}>
          <div className={styles.label}>{"GRADE:"}</div>
          <div className={styles.value}>{"BWP Grade, Marine Grade"}</div>
        </div>
        <div className={styles.specification}>
          <div className={styles.label}>{"SPECIES USED:"}</div>
          <div className={styles.value}>
            {"Diptocarpus spp. & Selected Hardwood Timber"}
          </div>
        </div>
        <div className={styles.specification}>
          <div className={styles.label}>{"FACE VENEER:"}</div>
          <div className={styles.value}>
            {"Both Side Garjan (Diptocarpus spp.)"}
          </div>
        </div>
        {showMore && (
          <div>
            <div className={styles.specification}>
              <div className={styles.label}>{"SIZES OF PLYWOOD:"}</div>
              <div className={styles.value}>{"100% Selected Hardwood Timber"}</div>
            </div>
            <div className={styles.specification}>
              <div className={styles.label}>{"CORE VENEER:"}</div>
              <div className={styles.value}>
                {"2400 X 1220mm & 2140 X 1220mm"}
              </div>
            </div>
            <div className={styles.specification}>
              <div className={styles.label}>{"LENGTHS"}</div>
              <div className={styles.value}>
                {"up to + 2 to 6 mm of specified length"}
              </div>
            </div>
            <div className={styles.specification}>
              <div className={styles.label}>{"WIDTHS"}</div>
              <div className={styles.value}>
                {"Up to + 1 to 3 mm of specified width"}
              </div>
            </div>
            <div className={styles.specification}>
              <div className={styles.label}>{"THICKNESS TOLERANCE:"}</div>
              <div className={styles.value}>
                {"± 0.25 % of specified thickness"}
              </div>
            </div>
            <div className={styles.specification}>
              <div className={styles.label}>{"FACE VENEER THICKNESS:"}</div>
              <div className={styles.value}>
                {"0.30 MM"}
              </div>
            </div>
            <div className={styles.specification}>
              <div className={styles.label}>{"WHETHER CALIBRATED"}</div>
              <div className={styles.value}>
                {"Both Sides Calibrated"}
              </div>
            </div>
            <div className={styles.specification}>
              <div className={styles.label}>{"Both Sides Calibrated"}</div>
              <div className={styles.value}>
                {"High Solid BWP grade Phenolic Polymer"}
              </div>
            </div>
            <div className={styles.specification}>
              <div className={styles.label}>{"PRESERVATIVE TREATMENT:"}</div>
              <div className={styles.value}>
                {"Four-stage preservative treatment."}
              </div>
            </div>
            <div className={styles.specification}>
              <div className={styles.label}>{"EDGE STRAIGHTNESS:"}</div>
              <div className={styles.value}>
                {"0.20%"}
              </div>
            </div>
            <div className={styles.specification}>
              <div className={styles.label}>{"DENSITIES:"}</div>
              <div className={styles.value}>
                {"700 TO 720 Kg/ cm3"}
              </div>
            </div>
            <div className={styles.specification}>
            <div className={styles.label}>{"CORE GAP, OVERLAP:"}</div>
            <div className={styles.value}>
              {"100% used fully composed sheet to avoid gaps and overlap"}
            </div>
          </div>
          <div className={styles.specification}>
          <div className={styles.label}>{"WATER ABSORPTION (24 HRS)"}</div>
          <div className={styles.value}>
            {"< 1 -2 %"}
          </div>
        </div>
        <div className={styles.specification}>
        <div className={styles.label}>{"WATER ABSORPTION (48 HRS)"}</div>
        <div className={styles.value}>
          {"< 2 - 3 %"}
        </div>
      </div>
          </div>
        )}
        <button className={styles.button} onClick={handleClick}>
        {showMore ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default TechnicalSpecifications;
