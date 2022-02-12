import React from "react";
import * as componentStyles from "./Projects.module.css";
import ProjectCard from "../ProjectCard";

const Projects = ({ data }) => {
  console.log(data);
  return (
    <div className={componentStyles.projects}>
      <div className={componentStyles.projectsContainer}>
        <h1 className={componentStyles.projectsTitle}>Projects</h1>
        <div className={componentStyles.projectsGrid}>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
