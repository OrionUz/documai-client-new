import { useTranslation } from "react-i18next";
import { ProjectsPartProps } from "../type";

function ProjectsPart({ item }: ProjectsPartProps) {
  const {t} = useTranslation();
  return (
    <a href={item.link} className="about-buttom-parts-part" target="_blank" rel="noreferrer">
      <div className="about-buttom-parts-part-box">
        <div className="about-buttom-parts-part-box-title">{t(item.title)}</div>
        <div className="about-buttom-parts-part-box-text">{t(item.text)}</div>
      </div>

      <div className="about-buttom-parts-part-img">
        <img src={item.img} alt="error img" />
      </div>
    </a>
  );
}

export default ProjectsPart;
