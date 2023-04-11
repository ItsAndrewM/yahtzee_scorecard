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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const Checkbox = styled.input`
  width: 100%;
  text-align: center;
  height: 100%;
  font-size: 16px;
  border: 1px solid black;
`;

const Input = styled.input`
  width: 100%;
  text-align: center;
  height: 100%;
  font-size: 16px;
  /* -webkit-appearance: none; */
  margin: 0;
  border: 1px solid black;
`;

const CellContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default ScoreInput;
