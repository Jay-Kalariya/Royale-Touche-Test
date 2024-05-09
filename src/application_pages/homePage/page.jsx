"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import Home from "@/components/home/page";
import Image from "next/image";
import close from "@/images/closeIcon.svg"
// import PopupHomePage from "@/components/Popup/page"
import "./homepage.css";
export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  // const [popup, setPopup] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPopup(true);
  //   }, 5000);
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //       if (popup) {
  //           document.body.style.overflow = "hidden"; 
  //       } else {
  //           document.body.style.overflow = ""; 
  //       }
  //   };

    // Call the function to handle scrolling
    // handleScroll();

    // Clean up effect on component unmount
//     return () => {
//         document.body.style.overflow = ""; // Reset the overflow style
//     };
// }, [popup]); // Depend on the popup state

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  // setTimeout(() => {
  //   setIsLoading(false);
  //   if (typeof document !== "undefined") {
  //     document.body.style.cursor = "default";
  //     window.scrollTo(0, 0);
  //   }
  // }, 3500);

  function handleLoad(data) {
    console.log(data);
    setIsLoading(data);
  }
  // const handlePopup = () => {
  //   setPopup(false);
  // };
  // console.log("popup", popup);
  

  return (
    <main>
      <div>
        {/* {popup  && (
          <div className="popup">
            <div className="popup_wrapper">
            <PopupHomePage />
              <div className="close" onClick={handlePopup}>
                <Image src={close} alt="close" />
              </div>
            </div>
          </div>
        )} */}
      </div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Home lData={handleLoad} />
    </main>
  );
}
