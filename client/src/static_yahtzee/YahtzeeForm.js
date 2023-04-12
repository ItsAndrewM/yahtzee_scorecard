import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ScoreInput from "./ScoreInput";

const YahtzeeForm = ({ i }) => {
  const [total, setTotal] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [arr, setArr] = useState([0, 1, 2, 3, 4, 5]);
  const [sectionTotal, setSectionTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [bonus, setBonus] = useState(false);

  useEffect(() => {
    let sum = 0;
    for (let j = 0; j < 6; j++) {
      sum += total[j];
      if (sum >= 63) {
        setBonus(true);
        setGrandTotal(sum + 35);
      } else {
        setBonus(false);
      }
    }
    window.localStorage.setItem(`game${i}`, grandTotal);

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
      {bonus ? (
        <CellContainer>
          <P>35</P>
        </CellContainer>
      ) : (
        <CellContainer>
          <P>0</P>
        </CellContainer>
      )}

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
  height: 100%;
  border: 1px solid black;
  @media screen and (max-width: 667px) {
    max-height: 37px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const P = styled.p`
  text-transform: capitalize;
  padding: 0px;
  margin-top: 25%;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export default YahtzeeForm;
