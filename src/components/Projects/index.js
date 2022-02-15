import React from "react";
import * as componentStyles from "./Projects.module.css";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <div className={componentStyles.projects} id={"projects"}>
      <div>
        <h1 className={componentStyles.projectsTitle}>Projects</h1>
        <div>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
