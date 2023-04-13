import { useContext, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ScoreInput from "./ScoreInput";
import { GrandTotalContext } from "./GrandTotalContext";

const LowerYahtzeeForm = ({ i }) => {
  const [total, setTotal] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [arr] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [sectionTotal, setSectionTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [upperSectionTotal, setUpperSectionTotal] = useState(0);
  const { state } = useContext(GrandTotalContext);

  const contextVal = state[`game${i + 1}`];

  useEffect(() => {
    let sum = 0;
    for (let j = 0; j < total.length; j++) {
      sum += total[j];
    }
    setUpperSectionTotal(Number(window.localStorage.getItem(`game${i}`)));
    setGrandTotal(sum + state[`game${i + 1}`]);
    setSectionTotal(sum);
  }, [total, i, contextVal]);

  return (
    <Form>
      <InputContainer>
        {arr.map((val, index) => {
          return (
            <ScoreInput
              key={index}
              i={index}
              setTotal={setTotal}
              total={total}
            />
          );
        })}
      </InputContainer>
      <Container>
        <CellContainer>
          <P>{sectionTotal}</P>
        </CellContainer>
        <CellContainer>
          <P>{state[`game${i + 1}`]}</P>
        </CellContainer>
        <CellContainer>
          <P>{grandTotal}</P>
        </CellContainer>
      </Container>
    </Form>
  );
};

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Container = styled.div`
  max-height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CellContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 100%; */
  border: 1px solid black;
  min-height: 35px;

  @media screen and (max-width: 667px) {
    max-height: 100%;
    min-height: 35px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* min-width: 0; */
`;

const P = styled.p`
  text-transform: capitalize;
  height: 100%;
  width: 100%;
  text-align: center;
`;

export default LowerYahtzeeForm;
