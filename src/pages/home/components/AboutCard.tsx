import CustomButton from "src/components/common/button";
import { AboutCardProps } from "../type";

function AboutCard({ item }: AboutCardProps) {
  return (
    <div className={`aboutcard aboutcard-${item.width}`}>
      <div className="aboutcard-left">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        {item.button ? (
          <CustomButton color="light" bordered>
            Book demo version
          </CustomButton>
        ) : item.img ? (
          <img src={item.img} alt={item.title + "error"} />
        ) : item.icon ? (
          item.icon
        ) : (
          ""
        )}
      </div>
      {item.button && <div className="aboutcard-right">{item.icon}</div>}
    </div>
  );
}

export default AboutCard;
