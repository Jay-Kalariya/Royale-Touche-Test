import { useRef } from "react";
import styles from "@/components/footer/title.module.css";
import { useScroll, useTransform, useMotionTemplate } from "framer-motion";

export default function index({ data, setSelectedProject, openLink }) {
  return (
    <div className={styles.titles}>
      {data.map((project, i) => {
        // Pass the openLink function down to the Title component
        return (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
            openLink={openLink}
          />
        );
      })}
    </div>
  );
}

function Title({ data, setSelectedProject, openLink }) {
  const { title, speed, i, url } = data; // Assuming that url is added to the data object where needed
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  // Conditionally render the title as a clickable element if a URL is provided
  const titleElement = url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      {title}
    </a>
  ) : (
    <span>{title}</span>
  );

  return (
    <div ref={container} className={styles.title}>
      <div
        className={styles.wrapper}
        onMouseOver={() => setSelectedProject(i)}
        onMouseLeave={() => setSelectedProject(null)}
        onClick={() => url && openLink(url)} // Add the onClick event handler here
      >
        <p>{titleElement}</p>
      </div>
    </div>
  );
}
