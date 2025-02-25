"use client";
import UserForm from "@/Components/User/UserForm";
import { user } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useUpdate from "@/Utils/Hooks/useUpdate";

const UserUpdate = ({ params }) => {
  const { mutate, isLoading } = useUpdate(user,params?.updateId,`/user`,"user updated successfully");
  return (
    params?.updateId && (
      <FormWrapper title="edit_user">
        <UserForm
          mutate={mutate}
          updateId={params?.updateId}
          loading={isLoading}
          buttonName="update"
        />
      </FormWrapper>
    )
  );
};

export default UserUpdate;
