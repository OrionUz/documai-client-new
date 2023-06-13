import { UserSvg } from "src/assets/svg";
import CustomButton from "src/components/common/button";
import CustomTextArea from "src/components/common/input/Textarea";

function QualityIdPage() {
  return (
    <div className="qualityid">
      <div className="qualityid-info">
        <div className="qualityid-info-header">
          <div>
            <UserSvg />
          </div>
          <p>Aziza Tohtamurodova</p>
        </div>
        <div className="qualityid-info-description">
          Yes, Mirsaid Boltaev is a creative UX/UI designer who has experience
          in communication, UX research, wireframing, interactive design,
          prototyping, and analytics. He is fluent in English and Russian and is
          a native speaker of Uzbek. He has completed a UX/UI Bootcamp by Sardor
          Kadirov online lesson and a Super Photoshop course at TFI University.
        </div>
      </div>
      <div className="qualityid-content">
        <CustomTextArea rows={5} placeholder="The main content of article" />
        <CustomButton color="light">Publish</CustomButton>
      </div>
    </div>
  );
}

export default QualityIdPage;
