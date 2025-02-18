import { Form, Link, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import SubmitBtn from "../components/SubmitBtn";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("register!");
    return redirect("/login");
  } catch (err) {
    toast.error("error!");
    return err;
  }
};
function Register() {
  return (
    <>
      <Wrapper>
        <Form className="form" method="post">
          <Logo />
          <h4>Register</h4>
          <FormRow type="text" name="name" defaultValue="" />
          <FormRow
            type="text"
            name="lastName"
            labelText="Last name"
            defaultValue=""
          />
          <FormRow type="text" name="location" defaultValue="" />
          <FormRow type="email" name="email" defaultValue="" />
          <FormRow type="password" name="password" defaultValue="" />
          <SubmitBtn />
          <p>
            Already a member?
            <Link to="/login" className="member-btn">
              Login
            </Link>
          </p>
        </Form>
      </Wrapper>
    </>
  );
}

export default Register;
