import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { IDocument } from "src/app/services/projects/type";
import { useTypedSelector } from "src/app/store";
import CustomButton from "src/components/common/button";
import AddDocuments from "./components/AddDocuments";
import DocumCard from "./components/DocumCard";

function DocumentsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleMakeParams = (key: string, value: string) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };

  const projectId = searchParams.get("projectId");

  const projects = useTypedSelector((state) => state.project.projects);

  const [documents, setDocuments] = useState<IDocument[]>();

  useEffect(() => {
    if (projects && projects.length > 0) {
      if (projectId) {
        let obj = projects.find((el) => el.id === +projectId);
        if (obj) setDocuments(obj.documents);
      } else {
        handleMakeParams("projectId", String(projects[0]?.id));
      }
    } else setDocuments([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId, projects]);

  return (
    <div className="documents">
      <div className="documents-content">
        {documents &&
          documents.map((item) => {
            return <DocumCard data={item} key={item.id} />;
          })}
      </div>
      <div className="documents-footer">
        <div className="documents-footer-left">{/* <CustomPagination total={50} /> */}</div>
        <div className="documents-footer-right">
          <Link to={`train?projectId=${projectId}`}>
            <CustomButton color="dark" bordered>
              Try this data
            </CustomButton>
          </Link>
          <AddDocuments />
        </div>
      </div>
    </div>
  );
}

export default DocumentsPage;
