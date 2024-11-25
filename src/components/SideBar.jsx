import styled from "styled-components";


const Div = styled.div`
  width: 250px;
  background-color: #333;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-top: 40px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 150px;
  height: 50px;
  background-color: #5c4033;
  color: white;
  margin-top: 20px;
  &:hover {
    background-color: green;
  }
`;
export default function SideBar({goToProjectInputForm}) {
  return (
    <Div>
      <H2>YOUR PROJECTS</H2>

      <Button onClick={goToProjectInputForm}>+ Add Project</Button>
    </Div>
  );
}
