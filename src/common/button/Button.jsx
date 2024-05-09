
import styles from "@/common/button/button.module.css"
import { useRouter } from "next/navigation";
function Button(props) {
    const router = useRouter();
    return (
      
<button onClick={()=> router.push("/")} className={styles.button1} role="button"><span className={styles.text1}>{props.btn_text}</span><span className={styles.text1}>{props.btn_text}</span></button>


    )
}
export default Button;