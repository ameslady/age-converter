import logo from "../images/logo.png";
import { H2 } from "../stylesheets/Styles";

const ConverterTypes = (props) => {
  // TODO add more conversion type icons
  return (
    <>
      <H2>Select a converter...</H2>

      <img
        src={logo}
        alt="logo"
        className="logo"
        style={{ width: "100px", height: "100px" }}
        onClick={() => props.setShowCal(true)}
      />
    </>
  );
};

export default ConverterTypes;
