import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function Landing() {
  return (
    <Wrapper>
      <nav>
        {/* <img src={logo} alt="job" className="logo" />
         */}

        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>
          </h1>
          <p>
            I'm baby literally williamsburg hoodie four dollar toast authentic
            cray flexitarian pickled biodiesel waistcoat taxidermy tonx irony
            offal. Bushwick retro live-edge, hell of listicle gentrify
            farm-to-table gluten-free gochujang swag. Street art ethical disrupt
            knausgaard sus, chartreuse JOMO kitsch bicycle rights hexagon VHS
            freegan drinking vinegar. Man bun bicycle rights cray narwhal,
            skateboard ramps vape tofu poutine.
          </p>
          <Link to="/register" className="btn register">
            register
          </Link>{" "}
          <Link to="/login" className="btn login">
            login
          </Link>
        </div>
        <img src={main} alt="job" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
