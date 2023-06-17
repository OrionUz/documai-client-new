import CustomSlider from "src/components/common/slider";
import AboutPart from "./components/AboutPart";
import IntroPart from "./components/IntroPart";
import MembersPic from "./components/MembersPart";
import ProjectsPart from "./components/ProjectsPart";
<<<<<<< HEAD
import { IntroPartData, ProjectsPartData, aboutProData, memberpicData } from "./const";
=======
import {
  IntroPartData,
  ProjectsPartData,
  aboutProData,
  memberpicData,
} from "./const";
>>>>>>> f9db9efec1d06d2adb59cccfa723f5eb13fad205

function AboutPage() {
  return (
    <div className="about">
      <div className="blur_purple" />
      <div className="blur_blue" />
      <div className="container">
        {IntroPartData.map((item, index) => {
          return <IntroPart item={item} key={item.title + index}></IntroPart>;
        })}

        <section className="about-middle">
          <h3 className="home-subtitle">About project</h3>
          <div className="about-middle-top">
            {aboutProData.map((item, index) => {
              return <AboutPart item={item} index={index} key={item.text + index}></AboutPart>;
            })}
          </div>
        </section>

        <section>
          <div className="home-subtitle">About Us</div>
          <div className="home-news">
            <CustomSlider counts={5}>
              {[...memberpicData, ...memberpicData].map((item, index) => {
                return <MembersPic item={item} key={item.description + index} />;
              })}
            </CustomSlider>
          </div>
        </section>

        <div className="home-subtitle">Our projects</div>
        <section className="about-buttom">
          <div className="about-buttom-parts">
            {ProjectsPartData.map((item, index) => {
              return <ProjectsPart item={item} key={item.title + index}></ProjectsPart>;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
