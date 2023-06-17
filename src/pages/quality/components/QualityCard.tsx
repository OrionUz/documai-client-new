import { Link } from "react-router-dom";
import { ChatSvg, UserSvg } from "src/assets/svg";
import CustomButton from "src/components/common/button";

function QualityCard() {
  return (
    <div className="qualitycard">
      <div className="qualitycard-header">
        <div className="qualitycard-header-left">
          <div>
            <UserSvg />
          </div>
          <p>Aziza Tohtamurodova</p>
        </div>
        <ChatSvg />
      </div>

      <div className="qualitycard-content">
        <p>
          Yes, Mirsaid Boltaev is a creative UX/UI designer who has experience
          in communication, UX research, wireframing, interactive design,
          prototyping....
        </p>
        <span>More</span>
      </div>

      <div className="qualitycard-footer">
        <Link to={`:${crypto.randomUUID()}`}>
          <CustomButton color="dark" bordered>
            Answer
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}

export default QualityCard;
