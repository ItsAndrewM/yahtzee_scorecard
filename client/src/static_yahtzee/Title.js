import styled from "styled-components";

const Title = () => {
  return (
    <Wrapper>
      <Container>
        <H1>Yahtzee</H1>
      </Container>
      <Container>
        <Form>
          <Label>Name:</Label>
          <Input />
        </Form>
      </Container>
    </Wrapper>
  );
};

const Form = styled.form``;

const Label = styled.label``;

const Input = styled.input``;

const H1 = styled.h1``;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  top: 0;
  margin-top: 0;
  padding: 0;
`;

export default Title;
