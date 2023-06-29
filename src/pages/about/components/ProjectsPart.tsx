import { ProjectsPartProps } from "../type";

function ProjectsPart({ item }: ProjectsPartProps) {
  return (
    <a href={item.link} className="about-buttom-parts-part" target="_blank" rel="noreferrer">
      <div className="about-buttom-parts-part-box">
        <div className="about-buttom-parts-part-box-title">{item.title}</div>
        <div className="about-buttom-parts-part-box-text">{item.text}</div>
      </div>

      <div className="about-buttom-parts-part-img">
        <img src={item.img} alt="error img" />
      </div>
    </a>
  );
}

export default ProjectsPart;
