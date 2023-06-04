import { IntroCardProps } from "../type";

function IntroCard({ item }: IntroCardProps) {
  return (
    <div className="introcard">
      <div className="introcard-content">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      <div className="introcard-icon">
        <img src={item.img} alt={item.title + "error"} />
      </div>
    </div>
  );
}

export default IntroCard;
