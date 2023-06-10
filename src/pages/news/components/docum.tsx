import { documProps } from "../type";

function DocumPart({ item }: documProps) {
  return (
    <div className="docum-box-left">
      <img src={item.img} alt="error img" className="docum-box-left-photo" />
      <div className="docum-box-left-date">{item.date}</div>
      <div className="docum-box-left-title">{item.title}</div>
      <div className="docum-box-left-text">{item.text}</div>
    </div>
  );
}

export default DocumPart;
