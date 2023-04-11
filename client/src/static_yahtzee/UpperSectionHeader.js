import styled from "styled-components";

const UpperSectionHeader = () => {
  return (
    <RowWrapper>
      <NonGameContainer>
        <CellContainer>
          <P>UPPER SECTION</P>
        </CellContainer>
        <CellContainer>
          <P>How to Score</P>
        </CellContainer>
      </NonGameContainer>
      <GameContainer>
        <CellContainer>
          <P>Game #1</P>
        </CellContainer>
        <CellContainer>
          <P>Game #2</P>
        </CellContainer>
        <CellContainer>
          <P>Game #3</P>
        </CellContainer>
        <CellContainer>
          <P>Game #4</P>
        </CellContainer>
        <CellContainer>
          <P>Game #5</P>
        </CellContainer>
        <CellContainer>
          <P>Game #6</P>
        </CellContainer>
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
  border: 1px solid black;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid black;
`;

export default UpperSectionHeader;
