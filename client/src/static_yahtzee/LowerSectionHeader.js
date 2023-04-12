import styled from "styled-components";

const LowerSectionHeader = () => {
  return (
    <RowWrapper>
      <NonGameContainer>
        <CellContainer>
          <P>LOWER SECTION</P>
        </CellContainer>
        <CellContainer></CellContainer>
      </NonGameContainer>
      <GameContainer>
        <CellContainer></CellContainer>
        <CellContainer></CellContainer>
        <CellContainer></CellContainer>
        <CellContainer></CellContainer>
        <CellContainer></CellContainer>
        <CellContainer></CellContainer>
      </GameContainer>
    </RowWrapper>
  );
};

const NonGameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const GameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const P = styled.p`
  text-transform: capitalize;
`;

const CellContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export default LowerSectionHeader;
