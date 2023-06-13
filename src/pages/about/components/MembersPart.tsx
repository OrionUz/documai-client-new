import { MemberPicProps } from "../type";

function MembersPic({ item }: MemberPicProps) {
  return (
    <div className="memberscard">
      <img className="memberscard-photo" src={item.img} alt="error news img" />
      <div className="memberscard-title">{item.title}</div>
      <p>{item.description}</p>
    </div>
  );
}

export default MembersPic;
