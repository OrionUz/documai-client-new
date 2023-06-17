import { DeleteSvg, FileSvg } from "src/assets/svg";
import { DocumCardProps } from "../type";

function DocumCard({ data }: DocumCardProps) {
  const size = ((+data.size ?? 0) / 1024 / 1024).toFixed();

  return (
    <div className="documcard">
      <div className="documcard-content">
        <div className="documcard-content-icon">
          <FileSvg />
        </div>
        <div className="documcard-content-info">
          <h3>{data.name}</h3>
          {data.size ? (
            <p>
              File size: {+size ? size : (+data.size / 1024).toFixed()} {+size ? "mb" : "kb"}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="documcard-content-delete">
          <DeleteSvg />
        </div>
      </div>

      {/* <div className="documcard-footer">Edit document</div> */}
    </div>
  );
}

export default DocumCard;
