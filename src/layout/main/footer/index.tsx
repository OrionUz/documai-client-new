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

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Companies */}
        <div className="footer-companies">
          <h3>We are trusted by 1000+ of companies</h3>
          <CustomSlider counts={4} arrows={false} autoplay>
            <div>
              <img src={require("src/assets/img/company.png")} alt="company" />
            </div>
            <div>
              <img src={require("src/assets/img/company.png")} alt="company" />
            </div>
            <div>
              <img src={require("src/assets/img/company.png")} alt="company" />
            </div>
            <div>
              <img src={require("src/assets/img/company.png")} alt="company" />
            </div>
            <div>
              <img src={require("src/assets/img/company.png")} alt="company" />
            </div>
          </CustomSlider>
        </div>

        {/* Main content */}
        <div className="footer-content">
          <div className="footer-content-header">
            <h2>No long-term contracts. No catches. Simple.</h2>
            <p>Start your 30-day free trial. Cancel anytime</p>
            <div className="footer-content-buttons">
              <CustomButton color="white" icon={<PlaySvg />} left_icon>
                View demo
              </CustomButton>
              <CustomButton color="light">Get started</CustomButton>
            </div>
          </div>

          <div className="footer-content-main">
            <div className="footer-content-left">
              <h1>Docum.ai</h1>
              <p>
                Docum.ai - is an artificial intelligence that automates your
                business
              </p>
              <ul>
                <li>Overview</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog & News</li>
                <li>Help</li>
                <li>Demo</li>
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
