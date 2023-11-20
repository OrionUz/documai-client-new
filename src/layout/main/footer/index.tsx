import {
  CopyRightSvg,
  FacebookSvg,
  InstagramSvg,
  MessageSendSvg,
  TwoCircleSvg,
} from "src/assets/svg";
import CustomSlider from "src/components/common/slider";
import { companies } from "./const";
import { useTranslation } from "react-i18next";
import { isDocum } from "src/static/const";

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
                <div
                  className={`footer-companies-image footer-companies-image-${item}`}
                  key={item}
                >
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
          {/*<div className="footer-content-header">
            <h2>{t("home.footer.description")}</h2>
            <div className="footer-content-pics">
              <img src={require("src/assets/img/home/git.png")} alt="" />
            </div>
          </div>*/}

          <div className="footer-content-main">
            <div className="footer-content-left">
              <div>
                <h1>{t("home.footer.docum")}</h1>
                <p>{t("home.footer.text-down")}</p>
              </div>
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
                <div className="footer-icon">
                  <TwoCircleSvg />
                </div>
                <MessageSendSvg />
              </div>
              <div>
                <div className="footer-icon">
                  <TwoCircleSvg />
                </div>
                <InstagramSvg />
              </div>
              <div>
                <div className="footer-icon">
                  <TwoCircleSvg />
                </div>
                <FacebookSvg />
              </div>
            </div>
          </div>

          <div className="footer-content-personal">
            <p>
              <CopyRightSvg /> 2023 {isDocum ? "Docum.ai" : "BlueJourney.pro"},
              All right reserved.
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
