import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 3em;
  font-weight: 700;
  letter-spacing: 0.2rem;
`;

export const H2 = styled.h2`
  font-weight: 400;
  font-size: 2em;
  margin: 0.5em;
`;

export const H3 = styled.h3`
  font-weight: 700;
`;

export const P = styled.p`
  font-weight: 400;
`;

export const SCHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em;
`;

export const SCConverterContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em;
`;

export const SCForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SCInputDate = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  border: none;
  background-color: #80b7ff;
  font-size: 1.5em;
  padding: 0.75em;
  border-radius: 0.5em;
`;

export const SCButton = styled.div`
  margin: 1em;
  font-size: 1.5em;
  padding: 0.5em 0.75em;
  border-radius: 0.5em;
  border: none;
  transition: all 0.2s;

  :hover {
    background-color: #003478;
    color: white;
    cursor: pointer;
  }
`;

export const SCFooter = styled.div`
  text-align: center;
  font-size: 1em;
  padding: 2em;
`;
