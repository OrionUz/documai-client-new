import { ConfigProvider, Pagination } from "antd";
import { CustomPaginationProps } from "./type";

function CustomPagination({
  total,
  pageSize = 12,
  defaultCurrent = 1,
}: CustomPaginationProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            fontSize: 16,
            colorText: "#ffffff60",
          },
        },
      }}
    >
      <Pagination
        defaultCurrent={defaultCurrent}
        pageSize={pageSize}
        total={total}
      />
      ;
    </ConfigProvider>
  );
}

export default CustomPagination;
