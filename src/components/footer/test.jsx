"use client";
import { useState } from "react";
import styles from "@/components/footer/test.module.css";
import Title from "@/components/footer/title";
import Descriptions from "@/components/footer/desc";
import WARRANTY_Accordian from "@/components/warrantyAccordian/page";

const data = [
  {
    title: "Facebook",
    speed: 0.5,
    url: "https://www.facebook.com/RoyaleToucheOfficial?utm_source=Royale-Touche&utm_medium=store_locator&utm_content=footer",
  },
  {
    title: "Linkedin",
    speed: 0.5,
    url: "https://www.linkedin.com/company/31261499/admin/feed/posts/?utm_source=Royale-Touche&utm_medium=store_locator&utm_content=footer",
  },
  {
    title: "Instagram",
    speed: 0.5,
    url: "https://www.instagram.com/royale_touche/?utm_source=Royale-Touche&utm_medium=store_locator&utm_content=footer",
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/@RoyaleToucheOfficial",
    // Replace with your YouTube channel URL
    speed: 0.5,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open a new tab with the provided url
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.container}>
      <Title
        data={data}
        setSelectedProject={setSelectedProject}
        openLink={openLink}
      />
      <Descriptions data={data} selectedProject={selectedProject} />
      <div>
        <WARRANTY_Accordian />
      </div>
    </div>
  );
}
