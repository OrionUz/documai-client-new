import CustomSlider from "src/components/common/slider";
import DocumPart from "./components/docum";
import WebinarPart from "./components/webinar";
import { documData, webinarData } from "./const";

function NewsPage() {
  return (
    <div className="news">
      <div className="blur_purple" />
      <div className="blur_blue" />
      <div className="container">
        <div className="webinar-heading">Our latest webinar</div>
        <section className="webinar">
          <div className="webinar-box">
            <CustomSlider counts={2}>
              {[...webinarData, ...webinarData].map((item, index) => {
                return <WebinarPart item={item} key={item.text + index}></WebinarPart>;
              })}
            </CustomSlider>
          </div>
        </section>
        <section className="docum">
          <div className="home-subtitle">News about Docum.ai</div>
          <div className="docum-box">
            {documData.map((item, index) => {
              return <DocumPart item={item} key={item.text + index}></DocumPart>;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default NewsPage;
