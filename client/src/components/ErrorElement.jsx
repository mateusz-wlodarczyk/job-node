import { useRouteError } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();
  return <h4>There war an error...</h4>;
}

export default ErrorElement;
