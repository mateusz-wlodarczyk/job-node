import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { useDashboardContext } from "./DashboardLayout";
import { redirect } from "react-router-dom";
import Wrapper from "../wrappers/StatsContainer";
import StatItem from "../components/StatIem";
import { FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";

export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");
    return response;
  } catch (err) {
    toast.error("error");
    return redirect("/dashboard");
  }
};

function Admin() {
  const { users, jobs } = useDashboardContext() || {};

  return (
    <Wrapper>
      <StatItem
        title="current user"
        count={users}
        color="#e9b940"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />{" "}
      <StatItem
        title="total job"
        count={jobs}
        color="##647acb"
        bcg="##e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
}

export default Admin;
