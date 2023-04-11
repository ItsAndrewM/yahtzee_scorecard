import { useState } from "react";
import styled from "styled-components";

const ScoreInput = ({ i, setTotal, total }) => {
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value) {
      const totalArr = [
        ...total.slice(0, i),
        Number(e.target.value),
        ...total.slice(i + 1),
      ];
      setTotal(totalArr);
    }
  };
  return (
    <CellContainer>
      <Input type="number" onChange={handleChange}></Input>
    </CellContainer>
  );
};

const Input = styled.input`
  /* max-width: 50px; */
  width: 100%;
  text-align: center;
  height: 100%;
  font-size: 16px;
`;

const CellContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 30px;
`;

export default ScoreInput;
