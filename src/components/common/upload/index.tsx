import { ConfigProvider, Upload } from "antd";
import type { UploadProps } from "antd";
import { documentTypes } from "./const";
import { DropSvg } from "src/assets/svg";
import { CustomUploadProps } from "./type";
import { useTranslation } from "react-i18next";

function CustomUpload({ accept = documentTypes, onChange, maxSize, disabled, fileList }: CustomUploadProps) {
  const { Dragger } = Upload;

  const {t} = useTranslation();

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
            <h2>{t("dashboard.uploadContent")}</h2>
            {maxSize ? (
              <p>
                {t("dashboard.maxFile")} {maxSize}{" "}
                {t("dashboard.mb")}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </Dragger>
    </ConfigProvider>
  );
}

export default CustomUpload;
