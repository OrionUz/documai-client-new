import { IntroPartProps } from "../type";

function IntroPart({ item }: IntroPartProps) {
  return (
    <div className="about-top">
      <div className="about-top-left">
        <h1>{item.title}</h1>
        <p>{item.text}</p>
      </div>
      <div className="about-top-right">{item.icon1}</div>
    </div>
  );
}

export default IntroPart;
