import { useDashboardContext } from "../pages/DashboardLayout";
import Wrapper from "../assets/wrappers/ThemeToggle";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext() || {};
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
}

export default ThemeToggle;
