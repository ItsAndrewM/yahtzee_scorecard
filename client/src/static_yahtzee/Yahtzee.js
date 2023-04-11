import styled from "styled-components";
import Title from "./Title";
import UpperSection from "./UpperSection";
import LowerSection from "./LowerSection";

const Yahtzee = () => {
  return (
    <Wrapper>
      <Container>
        <Title />
        <UpperSection />
        <LowerSection />
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  border: 1px solid black;
  width: 40%;
  height: 90%;
  padding: 15px;
`;

const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export default Yahtzee;
