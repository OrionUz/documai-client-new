import { message } from "antd";
import { useDeleteProjectMutation } from "src/app/services/projects";
import { Delete2Svg } from "src/assets/svg";
import CustomPopconfirm from "src/components/common/popconfirm";
import { DeleteProjectProps } from "../type";

function DeleteProject({ projectId, closeModal }: DeleteProjectProps) {
  const [deleteProject] = useDeleteProjectMutation();

  const handleDelete = () => {
    deleteProject(projectId).then(() => {
      message.success("Project deleted successfully!");
      closeModal();
    });
  };
  return (
    <CustomPopconfirm
      title="Are you sure to delete this project?"
      placement="rightBottom"
      okText="Yes"
      cancelText="No"
      onConfirm={handleDelete}
    >
      <Delete2Svg />
    </CustomPopconfirm>
  );
}

export default DeleteProject;
