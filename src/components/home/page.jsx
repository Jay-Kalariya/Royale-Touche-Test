"use client";
import React from "react";
import HeroSection from "@/components/heroSection/page";
import Timeline from "@/components/timeline/page";
import Timeline1 from "@/components/timeline/page2";
import Footer from "@/components/footer/page";
import Layers from "@/components/layers/page";
import Factory from "@/components/factory/page";
import Form from "@/components/form/page";
// import Plyspin from "@/components/plyspin/page";
import Navbar from "@/components/navbar/index";
import HomeStore from "@/components/homeStore/page";
import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";
import { useLayoutEffect, useState, useEffect } from "react";
import "./homeParallax.css";
import close from "@/images/closeIcon.svg"
import Image from "next/image";
import PopupHomePage from "@/components/Popup/page";

const Page = ({ lData }) => {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 20000);
  }, []);
  useEffect(() => {
      const handleScroll = () => {
          if (popup) {
              document.body.style.overflow = "hidden"; 
          } else {
              document.body.style.overflow = ""; 
          }
      };
  
      // Call the function to handle scrolling
      handleScroll();
  
      // Clean up effect on component unmount
      return () => {
          document.body.style.overflow = ""; // Reset the overflow style
      };
  }, [popup]); // Depend on the popup state
  const handlePopup = () => {
    setPopup(false);
  };
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // lenis integration for smooth scroll
      // const lenis = new Lenis();
      // function raf(time) {
      //   lenis.raf(time);
      //   ScrollTrigger.update();
      //   requestAnimationFrame(raf);
      // }
      // requestAnimationFrame(raf);
      // card parallax effect
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        gsap.to(card.querySelector(".card-cover"), {
          yPercent: 60,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className={`container ${popup ? 'demo' : ''}`}>
      <div>
        <Navbar />
      </div>
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
      <section className="cards">
        <div className="card">
          <div className="card-cover">
            <HeroSection
              video_bg="./video/video4.mp4"
              homepage_heading="ply that is a living shield for beautiful and timeless furniture"
            />
          </div>
        </div>
        <Factory loadImage={lData} />
      </section>
      <Layers loadLayer={lData} />
      <Timeline  />
      <Timeline1 />
      <HomeStore />
      <Form />
      <Footer />
    </div>
  );
};

export default Page;
