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
  width: 46%;
  height: 90%;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media only screen and (max-width: 667px) {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export default Yahtzee;
