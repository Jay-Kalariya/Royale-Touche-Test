import styles from "@/components/contactAddress/contactAddress.module.css";

const ContactAddressItem = ({
  heading,
  address,
  address2,
  address3,
  address4,
  address5,
  number1,
  number2,
  mail1,
  mail2,
}) => {
  return (
    <div className={styles.contactAddressItem}>
      {heading && <div className={styles.heading}>{heading}</div>}
      {address && <div className={styles.address}>{address}</div>}
      {address2 && <div className={styles.address}>{address2}</div>}
      {address3 && <div className={styles.address}>{address3}</div>}
      {address4 && <div className={styles.address}>{address4}</div>}
      {address5 && <div className={styles.address}>{address5}</div>}
      {number1 && (
        <div className={styles.number}>
          <a href={`to:${number1}`}>{number1}</a>
        </div>
      )}
      {number2 && (
        <div className={styles.number}>
          <a href={`to:${number2}`}>{number2}</a>
        </div>
      )}
      {mail1 && (
        <div className={styles.number}>
          <a href={`mailto:${mail1}`}>{mail1}</a>
        </div>
      )}
      {mail2 && (
        <div className={styles.number}>
          <a href={`mailto:${mail2}`}>{mail2}</a>
        </div>
      )}
    </div>
  );
};
export default ContactAddressItem;
