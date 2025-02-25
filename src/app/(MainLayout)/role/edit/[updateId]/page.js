"use client";
import PermissionForm from "@/Components/Role/PermissionForm";
import { role } from "@/Utils/AxiosUtils/API";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Row } from "reactstrap";

const UserUpdate = ({ params }) => {
  const { t } = useTranslation("common");
  const { mutate, isLoading } = useUpdate(role, params?.updateId, `/role`);
  return (
    params?.updateId && (
      <Row>
        <Col xxl="8" lg="10" className="m-auto">
          <Card>
            <CardBody>
              <div className="title-header option-title">
                <h5>{t("edit_role")}</h5>
              </div>
              <PermissionForm mutate={mutate} updateId={params?.updateId} loading={isLoading} buttonName="update" />
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  );
};

export default UserUpdate;
