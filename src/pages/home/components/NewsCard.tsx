import { NewsCardProps } from "../type";

function NewsCard({ item }: NewsCardProps) {
  return (
    <div className="newscard">
      <img src={item.img} alt="error news img" />
      <div className="newscard-date">{item.date}</div>
      <div className="newscard-title">{item.title}</div>
      <p>{item.description}</p>
    </div>
  );
}

export default NewsCard;
