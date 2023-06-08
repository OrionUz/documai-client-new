import { DeleteSvg, FileSvg } from "src/assets/svg";

function DocumCard() {
  return (
    <div className="documcard">
      <div className="documcard-content">
        <div className="documcard-content-icon">
          <FileSvg />
        </div>
        <div className="documcard-content-info">
          <h3>Resum.pdf</h3>
          <p>File size 20mb</p>
        </div>
        <div className="documcard-content-delete">
          <DeleteSvg />
        </div>
      </div>

      <div className="documcard-footer">Edit document</div>
    </div>
  );
}

export default DocumCard;
