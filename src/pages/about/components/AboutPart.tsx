import { AboutProProps } from "../type";

function AboutPart({ item, index }: AboutProProps) {
  return (
    <div className="about-middle-top-box">
      <img
        style={index === 1 ? { order: 2 } : {}}
        src={item.img}
        alt="error about img"
      />
      <div className="about-middle-top-box-element">
        <div>
          <div className="about-middle-top-box-element-heading .text_s">
            {item.title}
          </div>
          <p className="about-middle-top-box-element-paragraph">{item.text}</p>
        </div>

        <div className="about-middle-top-box-element-stat ">
          {item.stat
            ? item.stat.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="about-middle-top-box-element-stat-pack"
                  >
                    <div className="about-middle-top-box-element-stat-pack-year .title_l">
                      {item.count}
                    </div>
                    <p className="about-middle-top-box-element-stat-pack-p">
                      {item.title}
                    </p>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default AboutPart;
