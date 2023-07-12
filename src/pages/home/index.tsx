import { aboutcardData, introcardData, pricingCardData, usagecardData } from "./const";
import CustomButton from "src/components/common/button";
import IntroCard from "./components/IntroCard";
import AboutCard from "./components/AboutCard";
import PricingCard from "./components/PricingCard";
import CustomSlider from "src/components/common/slider";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";

export function PricingSlider() {
  return (
    <CustomSlider counts={3} arrows={false} dots initialSlide={0}>
      {pricingCardData.map((item) => {
        return <PricingCard item={item} key={item.price} />;
      })}
    </CustomSlider>
  );
}

function HomePage() {
  const { t } = useTranslation();
  return (
    <div className="home">
      <div className="blur_purple" />
      <div className="blur_blue" />
      <div className="container">
        {/* Home top */}
        <div className="home-top">
          <div className="home-top-left">
            <h1>{t("home.header")}</h1>
            <p>
              {t("home.text")}
            </p>
            <CustomButton color="light" bordered>
              {t("home.btn-text")}
            </CustomButton>
          </div>
          <div className="home-top-right">
            <ReactPlayer
              width={640}
              url= {t("home.video")}
              playing={false}
              controls={true}
            />
          </div>
        </div>

        {/* Infocards */}
        <div className="home-introcards">
          {introcardData.map((item) => {
            return <IntroCard item={item} key={item.description} />;
          })}
        </div>

        {/* Usage */}
        <section>
          <div className="home-subtitle">{t("home.work")}</div>
          <div className="home-usage">
            {usagecardData.map((item) => {
              return (
                <div className="home-usage-card" key={item.info}>
                  {item.icon}
                  <p>{t(item.info)}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* About */}
        <section>
          <div className="home-subtitle">{t("home.about")}</div>
          <div className="home-about">
            {aboutcardData.map((item) => {
              return <AboutCard item={item} key={item.title} />;
            })}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing">
          <div className="home-subtitle">{t("home.pricing")}</div>
          <div className="home-pricing">
            <PricingSlider />
          </div>
        </section>

        {/* News and blogs */}
        {/* <section>
          <div className="home-subtitle">News & Blogs</div>
          <div className="home-news">
            <CustomSlider>
              {[...newscardData, ...newscardData].map((item, index) => {
                return <NewsCard item={item} key={item.description + index} />;
              })}
            </CustomSlider>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default HomePage;
