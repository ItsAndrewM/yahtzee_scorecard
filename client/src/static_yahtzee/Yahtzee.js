import styled from "styled-components";
import Title from "./Title";
import UpperSection from "./UpperSection";
import LowerSection from "./LowerSection";

const Yahtzee = () => {
  return (
    <Wrapper>
      <Title />
      <UpperSection />
      <LowerSection />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default Yahtzee;
