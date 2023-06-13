import { Link } from "react-router-dom";
import { UserSvg } from "src/assets/svg";
import { UserCardProps } from "../type";

function UserCard({ item, active }: UserCardProps) {
  return (
    <Link to={`/dashboard/chat?userId=${item}`}>
      <div className={`usercard ${active ? "usercard-active" : ""}`}>
        <div>
          <UserSvg />
        </div>
        <p>Boltaev Mirsaid</p>
        <span></span>
      </div>
    </Link>
  );
}

export default UserCard;
