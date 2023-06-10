import { Link } from "react-router-dom";
import { webinarProps } from "../type";

function WebinarPart({ item }: webinarProps) {
  return (
    <div className="webinar-box-left">
      <Link to={`${crypto.randomUUID()}`}>
        <img
          src={item.img}
          alt="error img"
          className="webinar-box-left-photo"
        />
      </Link>
      <div className="webinar-box-left-date">{item.date}</div>
      <div className="webinar-box-left-title">{item.title}</div>
      <div className="webinar-box-left-text">{item.text}</div>
    </div>
  );
}

export default WebinarPart;
