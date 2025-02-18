import {
  Form,
  redirect,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import SubmitBtn from "../components/SubmitBtn";

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get("avatar");

    if (file && file.size > 500000) {
      toast.error("too large");
      return null;
    }
    try {
      await customFetch.patch("/users/update-user", formData);
      queryClient.invalidateQueries(["user"]);
      toast.success("grejt success");
      redirect("/dashboard");
    } catch (err) {
      toast.error("not today");
    }
    return null;
  };

function Profile() {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;

  return (
    <Form method="post" className="form" encType="multipart/form-data">
      <h4 className="form-title"> Profile </h4>
      <div className="form-center">
        <div className="form-row">
          <label htmlFor="avatar" className="form-label">
            select image
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            className="form-input"
            accept="image/*"
          />
        </div>
        <FormRow type="text" name="name" defaultValue={name} />
        <FormRow type="text" name="lastName" defaultValue={lastName} />
        <FormRow type="text" name="email" defaultValue={email} />
        <FormRow type="text" name="location" defaultValue={location} />
        <SubmitBtn formBtn />
      </div>
    </Form>
  );
}

export default Profile;
