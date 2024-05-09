import Image from "next/image";
import logo from "@/images/heroLogo.svg";
import Navbar from "@/components/navbar/index";
const Page = () => {
  return (
    <>
      <nav className={styles.nav_parent}>
        <div className={styles.nav_menu_names}>
          <Image src={logo} alt="logo" />
        </div>
        <div>
          <ul className={styles.nav_testing}>
            <div className={styles.nav_ham_button}>
              <Navbar />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Page;
