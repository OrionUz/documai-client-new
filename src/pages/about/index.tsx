import CustomSlider from "src/components/common/slider";
import AboutPart from "./components/AboutPart";
import IntroPart from "./components/IntroPart";
import MembersPic from "./components/MembersPart";
import ProjectsPart from "./components/ProjectsPart";
import {
  IntroPartData,
  ProjectsPartData,
  aboutProData,
  memberpicData,
} from "./const";

function AboutPage() {
  return (
    <div className="about">
      <div className="blur_purple" />
      <div className="blur_blue" />
      <div className="container">
        {IntroPartData.map((item) => {
          return <IntroPart item={item}></IntroPart>;
        })}

        <section className="about-middle">
          <h3 className="home-subtitle">About project</h3>
          <div className="about-middle-top">
            {aboutProData.map((item, index) => {
              return <AboutPart item={item} index={index}></AboutPart>;
            })}
          </div>
        </section>

        <section>
          <div className="home-subtitle">About Us</div>
          <div className="home-news">
            <CustomSlider counts={5}>
              {[...memberpicData, ...memberpicData].map((item) => {
                return <MembersPic item={item} />;
              })}
            </CustomSlider>
          </div>
        </section>

        <div className="home-subtitle">Our projects</div>
        <section className="about-buttom">
          <div className="about-buttom-parts">
            {ProjectsPartData.map((item) => {
              return <ProjectsPart item={item}></ProjectsPart>;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
