import CustomSlider from "src/components/common/slider";
import AboutPart from "./components/AboutPart";
import MembersPic from "./components/MembersPart";
import ProjectsPart from "./components/ProjectsPart";
import { ProjectsPartData, aboutProData, memberpicData } from "./const";
import { AboutTopSvg } from "src/assets/svg/freepik/about";
import { useTranslation } from "react-i18next";

export function NewsSlider() {
  return <div>NewsSlider</div>;
}

function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="about">
      {/*<div className="blur_red_top" />
      <div className="blur_purple" />
      <div className="blur_blue" />*/}
      <div className="container">
        <div className="about-top">
          <div className="about-top-left">
            <h1>{t("about.title")}</h1>
            <p>{t("about.text")}</p>
          </div>
          <div className="about-top-right">
            <AboutTopSvg />
          </div>
        </div>

        <section className="about-middle">
          <h3 className="home-subtitle">{t("about.about")}</h3>
          <div className="about-middle-top">
            {aboutProData.map((item, index) => {
              return (
                <AboutPart
                  item={item}
                  index={index}
                  key={item.text + index}
                ></AboutPart>
              );
            })}
          </div>
        </section>

        <section>
          <div className="home-subtitle">{t("about.aboutUs")}</div>
          <div className="home-news">
            <CustomSlider counts={5}>
              {[...memberpicData, ...memberpicData].map((item, index) => {
                return (
                  <MembersPic item={item} key={item.description + index} />
                );
              })}
            </CustomSlider>
          </div>
        </section>

        <div className="home-subtitle">{t("about.projects")}</div>
        <section className="about-buttom">
          <div className="about-buttom-parts">
            {ProjectsPartData.map((item, index) => {
              return (
                <ProjectsPart
                  item={item}
                  key={item.title + index}
                ></ProjectsPart>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
