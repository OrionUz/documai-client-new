import { useDeleteDocumentMutation } from "src/app/services/projects";
import { DeleteSvg, FileSvg } from "src/assets/svg";
import { DocumCardProps } from "../type";
import CustomPopconfirm from "src/components/common/popconfirm";

function DocumCard({ data }: DocumCardProps) {
  const size = ((+data.size ?? 0) / 1024 / 1024).toFixed();

  const [deleteDocument] = useDeleteDocumentMutation();

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
          <CustomPopconfirm
            title="Are you sure to delete this document?"
            placement="top"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteDocument(data.id)}
          >
            <DeleteSvg />
          </CustomPopconfirm>
        </div>
      </div>

      {/* <div className="documcard-footer">Edit document</div> */}
    </div>
  );
}

export default DocumCard;
