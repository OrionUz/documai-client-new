import { ConfigProvider, Upload } from "antd";
import type { UploadProps } from "antd";
import { documentTypes } from "./const";
import { DropSvg } from "src/assets/svg";
import { CustomUploadProps } from "./type";

function CustomUpload({ accept = documentTypes, onChange, maxSize, disabled, fileList }: CustomUploadProps) {
  const { Dragger } = Upload;

  const props: UploadProps = {
    name: "file",
    multiple: true,
    accept,
    onChange,
    beforeUpload: () => false,
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Upload: {
            borderRadius: 24,
            colorBgBase: "#343D4A",
            colorBorder: "none",
          },
        },
      }}
    >
      <Dragger {...props} disabled={disabled} fileList={fileList}>
        <div className="custom-upload">
          <div className="custom-upload-content">
            <DropSvg />
            <h2>Click or drag document to this area to upload</h2>
            {maxSize ? <p>Maximum file size {maxSize} MB!</p> : ""}
          </div>
        </div>
      </Dragger>
    </ConfigProvider>
  );
}

export default CustomUpload;
