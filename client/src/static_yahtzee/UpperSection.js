import styled from "styled-components";
import UpperSectionHeader from "./UpperSectionHeader";
import { useState } from "react";
import YahtzeeForm from "./YahtzeeForm";
import YAxisHeaders from "./YAxisHeaders";
import { upperSection } from "../data/upperSection";

const UpperSection = () => {
  const [arr, setArr] = useState([0, 1, 2, 3, 4, 5]);
  return (
    <Wrapper>
      <UpperSectionHeader />
      <FormWrapper>
        <YAxisHeaders arr={upperSection} />
        <FormContainer>
          {arr.map((val, index) => {
            return <YahtzeeForm key={index} i={index} />;
          })}
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
};

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default UpperSection;
