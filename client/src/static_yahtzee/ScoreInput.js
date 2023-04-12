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

  const handleCheck = (e) => {
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
      {i === 6 ? (
        <Container>
          <Checkbox
            type="checkbox"
            onChange={handleCheck}
            value={100}
          ></Checkbox>
          <Checkbox
            type="checkbox"
            onChange={handleCheck}
            value={200}
          ></Checkbox>
          <Checkbox
            type="checkbox"
            onChange={handleCheck}
            value={300}
          ></Checkbox>
        </Container>
      ) : (
        <Input type="number" onChange={handleChange}></Input>
      )}
    </CellContainer>
  );
};

const Container = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  @media screen and (max-width: 667px) {
    flex-direction: column;
    height: 100%;
  }
`;

const Checkbox = styled.input`
  display: flex;
  width: 100%;
  text-align: center;
  height: 100%;
  font-size: 16px;
  padding: 0px;
  @media screen and (max-width: 667px) {
    font-size: 8px;
    padding: 0;
    margin: 0;
    height: 10px;
  } ;
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  text-align: center;
  height: 100%;
  /* font-size: 16px; */
  /* -webkit-appearance: none; */
  margin: 0;
  padding: 0;
  border: 1px solid black;
  @media screen and (max-width: 667px) {
    font-size: 8px;
  } ;
`;

const CellContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 667px) {
    /* max-height: 30px; */
  } ;
`;

export default ScoreInput;
