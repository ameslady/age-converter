import React, { useEffect, useState } from "react";
import ConverterTypes from "./components/ConverterTypes";
import KoreanAgeCalc from "./components/KoreanAgeCalc";
import logo from "./images/logo.png";
import {
  H1,
  H3,
  P,
  SCHeader,
  SCConverterContainer,
  SCFooter,
} from "./stylesheets/Styles";

const App = () => {
  const [showCalc, setShowCal] = useState(false);

  return (
    <div className="App">
      <SCHeader>
        <H1>AGE CONVERTER</H1>
      </SCHeader>

      <SCConverterContainer>
        {!showCalc ? (
          <ConverterTypes setShowCal={setShowCal} />
        ) : (
          <KoreanAgeCalc />
        )}
      </SCConverterContainer>

      <SCFooter>
        <H3>Created by</H3>
        <P>
          <i>Amy Martin & Joe Owen</i>
        </P>
      </SCFooter>
    </div>
  );
};

export default App;
