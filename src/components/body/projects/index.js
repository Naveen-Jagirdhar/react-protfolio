import ProjectCard from "../../common/project-card";
import { ProjectData } from "../../data/projects";

export default function ProjectComponent() {
  const projData = ProjectData;
  return (
    <div className="projects">
      <label className="section-title">Projects</label>
      <div>
        {projData.map((project) => {
          return (
            <ProjectCard
              title={project.title}
              description ={project.description}
              demolink={project.demolink}
              img={project.image}
              githubLink = {project.githublink}
              tags = {project.tags}
            />
          );
        })}
      </div>
    </div>
  );
}
