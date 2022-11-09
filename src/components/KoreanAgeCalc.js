import { H2, P } from "../stylesheets/Styles";

const KoreanAgeCalc = () => {
  return (
    <>
      <div className="form">
        <H2>Birthday</H2>
        <input type="date" id="birthday" name="birthday"></input>
        <button>Convert</button>

        <P>output</P>
      </div>
    </>
  );
};

export default KoreanAgeCalc;
