import Wrapper from "../wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>ohh! page not found</h3>
          <p>please keep trying</p>
          <Link to="/dashboard">back</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3> <Link to="/dashboard">back</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
