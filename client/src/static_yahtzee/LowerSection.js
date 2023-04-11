import { useState } from "react";
import styled from "styled-components";
import YAxisHeaders from "./YAxisHeaders";
import { lowerSection } from "../data/lowerSection";
import LowerSectionHeader from "./LowerSectionHeader";
import LowerYahtzeeForm from "./LowerYahtzeeForm";

const LowerSection = () => {
  const [arr, setArr] = useState([0, 1, 2, 3, 4, 5]);

  return (
    <Wrapper>
      <LowerSectionHeader />
      <FormWrapper>
        <YAxisHeaders arr={lowerSection} />
        <FormContainer>
          {arr.map((val, index) => {
            return <LowerYahtzeeForm key={index} i={index} />;
          })}
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
};

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  border-width: 1px;
  border-color: black;
  border-style: double;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default LowerSection;
