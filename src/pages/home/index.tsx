import {
  aboutcardData,
  introcardData,
  pricingCardData,
  usagecardData,
} from "./const";
import CustomButton from "src/components/common/button";
import IntroCard from "./components/IntroCard";
import AboutCard from "./components/AboutCard";
import PricingCard from "./components/PricingCard";
import CustomSlider from "src/components/common/slider";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getRootState } from "src/app/store";
import { HomeGridSvg } from "src/assets/svg/pricing";

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
  const { isAuthenticated } = getRootState().auth;

  return (
    <div className="home">
      <div className="home_blur" />
      {/* <div className="blur_blue" /> */}
      <div className="home-svg">
        <HomeGridSvg />
      </div>

      <div className="container">
        {/* Home top */}
        <div className="home-top">
          <div className="home-top-left">
            <div className="home-top-left-title">
              <h1>{t("home.header")} </h1>
              {/* <h1>{t("home.header")} <p>{t("home.header_con")}</p> </h1>  */}
            </div>
            <p>{t("home.text")}</p>
            <Link to={isAuthenticated ? "/dashboard/document" : "/auth/signin"}>
              <CustomButton className="home-button" color="light" bordered>
                {t("home.btn-text")}
              </CustomButton>
            </Link>
          </div>
          <div className="home-top-right">
            {/* <ReactPlayer
              width={640}
              url={require("src/assets/video/IntroVideoPlay.mp4")}
              playing={true}
              controls={true}
            /> */}
            <video
              className="home-top-video"
              loop
              autoPlay
              muted
              style={{ width: 510, height: 514 }}
              src={require("src/assets/video/introVideoLast.mp4")}
            ></video>
          </div>
        </div>
        <div className="home-video">
          <ReactPlayer
            width={1130}
            height={570}
            url={t("home.video")}
            playing={false}
            controls={true}
          />
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
