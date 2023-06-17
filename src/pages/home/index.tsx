import { aboutcardData, introcardData, newscardData, pricingCardData, usagecardData } from "./const";
import CustomButton from "src/components/common/button";
import IntroCard from "./components/IntroCard";
import AboutCard from "./components/AboutCard";
import PricingCard from "./components/PricingCard";
import NewsCard from "./components/NewsCard";
import CustomSlider from "src/components/common/slider";
import ReactPlayer from "react-player";

function HomePage() {
  return (
    <div className="home">
      <div className="blur_purple" />
      <div className="blur_blue" />
      <div className="container">
        {/* Home top */}
        <div className="home-top">
          <div className="home-top-left">
            <h1>Create an AI customer service assistant</h1>
            <p>With Docum.ai you can boost your business 5 times without. Docum.ai works to any languages</p>
            <CustomButton color="light" bordered>
              Book demo version
            </CustomButton>
          </div>
          <div className="home-top-right">
            <ReactPlayer
              width={640}
              url="https://www.youtube.com/watch?v=F4o2Zs0pjwU"
              playing={false}
              controls={true}
              light={<img src={require("src/assets/img/home/video_bg.png")} alt="Thumbnail" style={{ width: 640 }} />}
            />
          </div>
        </div>

        {/* Infocards */}
        <div className="home-introcards">
          {introcardData.map((item) => {
            return <IntroCard item={item} />;
          })}
        </div>

        {/* Usage */}
        <section>
          <div className="home-subtitle">How it works</div>
          <div className="home-usage">
            {usagecardData.map((item) => {
              return (
                <div className="home-usage-card">
                  {item.icon}
                  <p>{item.info}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* About */}
        <section>
          <div className="home-subtitle">About</div>
          <div className="home-about">
            {aboutcardData.map((item) => {
              return <AboutCard item={item} />;
            })}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing">
          <div className="home-subtitle">Pricing</div>
          <div className="home-pricing">
            <CustomSlider counts={3}>
              {pricingCardData.map((item) => {
                return <PricingCard item={item} />;
              })}
            </CustomSlider>
          </div>
        </section>

        {/* News and blogs */}
        <section>
          <div className="home-subtitle">News & Blogs</div>
          <div className="home-news">
            <CustomSlider>
              {[...newscardData, ...newscardData].map((item) => {
                return <NewsCard item={item} />;
              })}
            </CustomSlider>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
