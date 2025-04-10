import React from "react";
import CrescentAcademy from "../public/assets/projects/Crescent-Academy/ca-coverphoto.png";
import LegoStore from "../public/assets/projects/Lego-Store/ls-coverphoto.png";
import ProjectItems from "../components/ProjectItems";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Crescent-Academy"
            backgroundImg={CrescentAcademy}
            projectURL={"/CrescentAcademy"}
          />

          <ProjectItems
            title="Lego-Store"
            backgroundImg={LegoStore}
            projectURL={"/LegoStore"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
