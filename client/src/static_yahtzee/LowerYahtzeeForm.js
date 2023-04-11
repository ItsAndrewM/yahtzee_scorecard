import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ScoreInput from "./ScoreInput";

const LowerYahtzeeForm = ({ i }) => {
  const [total, setTotal] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [arr, setArr] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [sectionTotal, setSectionTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [upperSectionTotal, setUpperSectionTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let j = 0; j < 7; j++) {
      sum += total[j];
    }
    setUpperSectionTotal(Number(window.localStorage.getItem(`game${i}`)));
    setGrandTotal(sum + Number(window.localStorage.getItem(`game${i}`)));
    setSectionTotal(sum);
  }, [total]);

  return (
    <Form>
      {arr.map((val, index) => {
        return (
          <ScoreInput key={index} i={index} setTotal={setTotal} total={total} />
        );
      })}
      <CellContainer>
        <P>{sectionTotal}</P>
      </CellContainer>
      <CellContainer>
        <P>{upperSectionTotal}</P>
      </CellContainer>
      <CellContainer>
        <P>{grandTotal}</P>
      </CellContainer>
    </Form>
  );
};

const CellContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 84%;
  border: 1px solid black;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const P = styled.p`
  text-transform: capitalize;
`;

export default LowerYahtzeeForm;
