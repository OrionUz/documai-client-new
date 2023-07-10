import {
  CopyRightSvg,
  DiscordSvg,
  FacebookSvg,
  InstagramSvg,
  MessageSendSvg,
  PlaySvg,
  TwitterSvg,
} from "src/assets/svg";
import CustomButton from "src/components/common/button";
import CustomSlider from "src/components/common/slider";
import { companies } from "./const";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Companies */}
        <div className="footer-companies">
          <h3>{t("home.footer.title")}</h3>
          <CustomSlider counts={5} arrows={false} autoplay dots>
            {companies.map((item) => {
              return (
                <div className="footer-companies-image" key={item}>
                  <img
                    src={require(`src/assets/img/companies/${item}.png`)}
                    alt={item}
                  />
                </div>
              );
            })}
          </CustomSlider>
        </div>

        {/* Main content */}
        <div className="footer-content">
          <div className="footer-content-header">
            <h2>{t("home.footer.description")}</h2>
            <p>{t("home.footer.text")}</p>
            <div className="footer-content-buttons">
              <CustomButton color="white" icon={<PlaySvg />} left_icon>
                {t("home.footer.demo")}
              </CustomButton>
              <CustomButton color="light">
                {t("home.footer.start")}
              </CustomButton>
            </div>
          </div>

          <div className="footer-content-main">
            <div className="footer-content-left">
              <h1>{t("home.footer.docum")}</h1>
              <p>{t("home.footer.text-down")}</p>
              <ul>
                <li>{t("home.footer.overview")}</li>
                <li>{t("home.footer.features")}</li>
                <li>{t("home.footer.pricing-down")}</li>
                {/* <li>Blog & News</li> */}
                <li>{t("home.footer.help")}</li>
                <li>{t("home.footer.demo-down")}</li>
              </ul>
            </div>

            <div className="footer-content-right">
              <div>
                <MessageSendSvg />
              </div>
              <div>
                <DiscordSvg />
              </div>
              <div>
                <InstagramSvg />
              </div>
              <div>
                <FacebookSvg />
              </div>
              <div>
                <TwitterSvg />
              </div>
            </div>
          </div>

          <div className="footer-content-personal">
            <p>
              <CopyRightSvg /> 2023 Docum.ai, All right reserved.
            </p>
            <div>
              <p>Terms of use</p>
              <p>Privacy & Policy</p>
              <p>Cookies Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
