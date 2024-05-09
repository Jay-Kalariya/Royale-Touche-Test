import React from 'react'
import Image from 'next/image'
import styles from "@/common/footerHeader/footerHeader.module.css"
const FooterHeader = () => {
  return (
    <div>
      <div className={styles.FooterHeaderOuter}>
      <div className={styles.FooterHeader_imageOuter}>
            <Image src={props.image} className={styles.FooterHeader_image} alt='image_blog'/>
      </div>
      </div>
    </div>
  )
}

export default FooterHeader