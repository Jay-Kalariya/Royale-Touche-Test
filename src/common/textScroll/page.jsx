"use client";
import styles from "@/common/textScroll/textScroll.module.css";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const phrase =
  "For those who accept nothing less than the finest. A ply that has it all. Carefully engineered using proprietary 4-stage preservative treatment of select hardwood species, cross-bonded with 100% BWP grade phenolic resins using , a ply that is safe for your home and loved ones with E-0 emissions and fire retardant properties.";

export default function Home() {
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top 40%`,
        end: `+=${window.innerHeight / 1.55}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
      color: "#c3a464",
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div className={styles.scroll_text_wrapper}>
      <div ref={container} className={styles.main}>
        <div ref={body} className={styles.body}>
          {splitWords(phrase)}
          <h1 className={styles.scroll_text_header}>
            Royale Touché Performance Ply
          </h1>
        </div>
      </div>
    </div>
  );
}
