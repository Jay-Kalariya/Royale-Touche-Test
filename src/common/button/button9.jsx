
import styles from "@/common/button/button.module.css"
function Button(props) {
    return (
      
<button className={styles.button9} role="button"><span className={styles.text3}>{props.btn_text}</span><span className={styles.text3}>{props.btn_text}</span>

</button>



    )
}
export default Button;