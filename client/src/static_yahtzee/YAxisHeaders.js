import styled from "styled-components";
import Icon from "@mdi/react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const YAxisHeaders = ({ arr }) => {
  return (
    <Container>
      {arr.map((val, index) => {
        console.log(val.howToScore);
        return (
          <RowContainer key={index}>
            <CellContainer>
              <P>{val.title}</P>
              {val.description ? <SmallP>{val.description}</SmallP> : <></>}
              <Icon path={val.icon} style={{ height: "30px" }} />
              <P>{val.number}</P>
            </CellContainer>
            <CellContainer>
              {val.howToScore === TrendingFlatIcon ? (
                <TrendingFlatIcon />
              ) : (
                <P>{val.howToScore}</P>
              )}
            </CellContainer>
          </RowContainer>
        );
      })}
    </Container>
  );
};

const SmallP = styled.p`
  font-size: 10px;
`;

const P = styled.p`
  text-transform: capitalize;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  border: 1px solid blue;
`;

const CellContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border: 2px solid limegreen;
`;
export default YAxisHeaders;
