import { ProjectsPartProps } from "../type";

function ProjectsPart({ item }: ProjectsPartProps) {
  return (
    <div className="about-buttom-parts-part">
      <div className="about-buttom-parts-part-box">
        <div className="about-buttom-parts-part-box-title">{item.title}</div>
        <div className="about-buttom-parts-part-box-text">{item.text}</div>
      </div>

      <div className="about-buttom-parts-part-img">
        <img src={item.img} alt="error img" />
      </div>
    </div>
  );
}

export default ProjectsPart;
