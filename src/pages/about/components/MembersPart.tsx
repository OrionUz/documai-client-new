import { useTranslation } from "react-i18next";
import { MemberPicProps } from "../type";

function MembersPic({ item }: MemberPicProps) {
  const {t} = useTranslation();
  return (
    <div className="memberscard">
      <img className="memberscard-photo" src={item.img} alt="error news img" />
      <div className="memberscard-title">{t(item.title)}</div>
      <p>{t(item.description)}</p>
    </div>
  );
}

export default MembersPic;
