import { Link, useSearchParams } from "react-router-dom";
import { UserSvg } from "src/assets/svg";
import { UserCardProps } from "../type";

function UserCard({ data, active }: UserCardProps) {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");

  return (
    <Link to={`/dashboard/chat?projectId=${projectId}&userId=${data.id}`}>
      <div className={`usercard ${active ? "usercard-active" : ""}`}>
        <div>
          <UserSvg />
        </div>
        <p>{data.fullName}</p>
        {/* <span></span> */}
      </div>
    </Link>
  );
}

export default UserCard;
