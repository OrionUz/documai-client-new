import DocumPart from "./components/docum";
import WebinarPart from "./components/webinar";
import { documData, webinarData } from "./const";

function NewsPage() {
  return (
    <div className="news">
      <div className="blur_purple" />
      <div className="blur_blue" />
      <div className="container">
        <section className="webinar">
          <div className="webinar-heading">Our latest webinar</div>
          <div className="webinar-box">
            {webinarData.map((item) => {
              return <WebinarPart item={item}></WebinarPart>;
            })}
          </div>
        </section>
        <section className="docum">
          <div className="home-subtitle">News about Docum.ai</div>
          <div className="docum-box">
            {documData.map((item) => {
              return <DocumPart item={item}></DocumPart>;
            })}
          </div>
        </section>

        <section className="webinar">
          <div className="home-subtitle">Our latest company</div>
          <div className="webinar-box">
            {webinarData.map((item) => {
              return <WebinarPart item={item}></WebinarPart>;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default NewsPage;
