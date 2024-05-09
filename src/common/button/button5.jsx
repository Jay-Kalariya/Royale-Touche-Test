'use client'
import { useRouter } from 'next/navigation'

import styles from "@/common/button/button.module.css"
function Button(props) {
    const router = useRouter()
    return (
      
<button onClick={()=>router.push("/products")} className={styles.button5} role="button"><span className={styles.text3}>{props.btn_text}</span><span className={styles.text3}>{props.btn_text}</span></button>


    )
}
export default Button;