import React from "react";
import styles from "@/common/contact_map/contact_map.module.css";
function Map() {
  return (
    <div className={styles.iframe_outer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8026288584406!2d72.46987617588161!3d23.031018016011963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b09932f1e99%3A0x75fbb34492ff4f3e!2sRoyale%20Touche%20Wooden%20Floors!5e0!3m2!1sen!2sin!4v1709016013140!5m2!1sen!2sin"
        width="100%"
        height="750"
        allowfullscreen=""
        className={styles.map_height}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
export default Map;
